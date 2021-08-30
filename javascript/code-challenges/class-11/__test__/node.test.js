'use strict';

const Node = require('../node');


describe('Node',()=>{

it('should create new node', ()=>{

    //arrange
    let value='some value';

    //aact

    let node = new Node(value);

//assert
expect(node.value).toEqual(value);
expect(node.next).toBeNull();
});


})