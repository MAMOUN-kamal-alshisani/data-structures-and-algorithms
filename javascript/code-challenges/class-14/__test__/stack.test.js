
"use strict";

const Stack = require("../stack");

describe("Stack Tests ", () => {
  it("Can successfully push onto a stack", () => {
    let stack = new Stack();
    stack.push(19);
    stack.push(27);
    stack.push(44);
    expect(stack.top.value).toBe(44);
  });

  it("Can successfully push multiple values onto a stack", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    expect(stack.top.value).toBe(4);
  });

  it("Can successfully pop off the stack", () => {
    let stack = new Stack();
    stack.push(4);
    stack.push(7);
    stack.pop();
    expect(stack.top.value).toBe(4);
  });

  it("Can successfully empty a stack after multiple pops", () => {
    let stack = new Stack();
    stack.push("a");
    stack.push("b");
    stack.push("c");
    stack.push("d");
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.top).toBe(null);
  });

  it("Can successfully peek the next item on the stack", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);

    expect(stack.peek()).toBe(2);
  });

  it("Can successfully instantiate an empty stack", () => {
    let stack = new Stack();
    let newStack = new Stack();

    newStack.push(50);

    expect(stack).toBeInstanceOf(Stack);
    expect(newStack.isEmpty()).toBe("the stack have values");
  });
});