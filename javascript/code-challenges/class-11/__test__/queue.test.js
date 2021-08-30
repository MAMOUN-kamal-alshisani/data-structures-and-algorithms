"use strict";

const Queue = require("../queue");

describe("Queue Tests ", () => {
  it("Can successfully enqueue into a queue", () => {
    let queue = new Queue();
    queue.enqueue('5');
    queue.enqueue('72');
    queue.enqueue('27');
    queue.enqueue('63');
    queue.enqueue('92');
    expect(queue.size).toBe(5);
  });

  it("Can successfully dequeue out of a queue the expected value", () => {
    let queue = new Queue();
    queue.enqueue(6);
    queue.enqueue(5);
    queue.enqueue(2);
    queue.enqueue(1);
    queue.dequeue();
    expect(queue.size).toBe(3);
  });
  it("empty queue stack", () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.size).toBe(0);
  });
});