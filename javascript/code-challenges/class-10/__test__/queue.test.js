const Queue = require('../queue');
describe("Queue Tests ", () => {
  it("Can successfully enqueue into a queue", () => {
    let queue = new Queue();
    queue.enqueue(1);

    expect(queue.front.value).toBe(1);
  });
  it("Can successfully enqueue multiple values into a queue", () => {
    let queue = new Queue();
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);

    expect(queue.front.value).toBe(2);
    expect(queue.back.value).toBe(4);
  });
  it("Can successfully dequeue out of a queue the expected value", () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();

    expect(queue.front.value).toBe(2);
    expect(queue.back.value).toBe(3);
    expect(queue.dequeue()).toBe(2);
  });
  it("Can successfully peek into a queue, seeing the expected value", () => {
    let queue = new Queue();
    queue.enqueue(2);
    queue.enqueue(5);

    expect(queue.front.value).toBe(2);
    expect(queue.back.value).toBe(5);
    expect(queue.peek()).toBe(2);
  });
  it("Can successfully empty a queue after multiple dequeues", () => {
    let queue = new Queue();
    queue.enqueue(200);
    queue.enqueue(700);
    queue.dequeue();
    queue.dequeue();
    

    expect(queue.front).toBe(null);
    expect(queue.back).toBe(null);
  });
  it("Can successfully instantiate an empty queue", () => {
    let queue = new Queue();
    queue.enqueue(8);
    queue.enqueue(10);
    let newQueue=new Queue();

    expect(newQueue).toBeInstanceOf(Queue);
    expect(queue.isEmpty()).toBe("the Queue is not empty!");
  });

});