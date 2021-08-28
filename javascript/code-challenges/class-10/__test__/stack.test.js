"use strict";

const Stack =require('../stack');

describe("Stack  ", () => {

    it("Can successfully push onto a stack", () => {
        let stack = new Stack();
        stack.push(6);
        stack.push(1);
        expect(stack.top.value).toBe(1);
    });

    it("Can successfully push multiple values onto a stack", () => {
        let stack = new Stack();
        stack.push(10);
        stack.push(45);
        stack.push(23);
        stack.push(68);
        expect(stack.top.value).toBe(68);
    });

    it("Can successfully pop off the stack", () => {
        let stack = new Stack();
        stack.push(6);
        stack.push(4);
        stack.push(2);
        stack.pop();
        expect(stack.top.value).toBe(4);
        expect(stack.pop()).toBe(4);
    });

    it("Can successfully empty a stack after multiple pops", () => {
        let stack = new Stack();
        stack.push(64);
        stack.push(85);
        stack.push(35);
        stack.push(11);
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        expect(stack.top).toBe(null);
    });

    it("Can successfully peek the next item on the stack", () => {
        let stack = new Stack();
        stack.push(9);
        stack.push(8);
        stack.push(7);

        expect(stack.peek()).toBe(7);
    });

    it("Can successfully instantiate an empty stack", () => {
        let stack = new Stack();
        let Stack2 = new Stack();
        Stack2.push(7);
        Stack2.push(54);

        expect(stack).toBeInstanceOf(Stack);
        expect(Stack2.isEmpty()).toBe("the stack have values");
    
    });
});