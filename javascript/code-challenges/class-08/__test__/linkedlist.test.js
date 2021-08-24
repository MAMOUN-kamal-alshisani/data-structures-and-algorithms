'use strict';

const LL =require('../linkedlist');

describe('linked list',()=>{

    it('the initial value', ()=>{
    
        //arrange
       
    
        //aact
    const list = new LL();
    //assert
   expect(list.head).toBeNull();
   expect(list.length).toEqual(0);

    });
    
    it('should add node to an empty linked list', ()=>{
    
        //arrange
       
        const list = new LL();
    const value = 'first value';
        //aact
    
      list.append(value)
    
    //assert
   expect(list.head.value).toBe(value);
   expect(list.head.next).toBeNull();
    });

    it('should append node to linked list with some ', ()=>{
    
        //arrange
       
        const list = new LL();
    const value1 = 'first value';
    list.append(value1)
    const value2 = 'second value';
        //aact
    
        list.append(value2)
    
    //assert
    expect(list.head.value).toBe(value1);
    expect(list.head.next.value).toBe(value2);
    expect(list.head.next.next).toBeNull();
//    expect(list.head.next).toBeNull(value);
    });
    it("insert multiple nodes", () => {
        let NList = new LL();
        NList.insert(1);
        NList.append(2);
        expect(NList.head.value).toEqual(1);
        expect(NList.head.next.value).toEqual(2);
      });
      it("insert before node", () => {
        let NList = new LL();
        NList.insert(1);
        NList.append(3);
        NList.append(2);
        NList.insertbefore(2, 5);
        console.log(NList.head.value);
        console.log(NList.head.next.value);
        expect(NList.head.value).toEqual(1);
        expect(NList.head.next.value).toEqual(3);
      });
      it("insert After node", () => {
        let NList = new LL();
        NList.insert(1);
        NList.append(2);
        NList.append(3);
       NList.insertafter(1, 4);
        console.log(NList.head.value);
        console.log(NList.head.next.value);
        expect(NList.head.value).toEqual(1);
        expect(NList.head.next.value).toEqual(2);
      });
      it("append()", () => {
        let NList = new LL();
        let NewValue = "First Item";
        NList.append(NewValue);
        expect(NList.head.value).toEqual(NewValue);
    
        let secondOne = "Second Item";
        NList.append(secondOne);
        expect(NList.head.next.value).toEqual(secondOne);
        expect(NList.head.next.next).toBeNull();
        expect(NList.head.value).toEqual(NewValue);
      });

      it("reverse() Where k is greater than the length of the linked list", () => {
        let NList = new LL();
    
        NList.insert(4);
        NList.append(2)
        NList.append(6)
        expect(NList.reverselist(6)).toEqual("error");
    
  
      });
     
      it("reverse() Where k and the length of the list are the same", () => {
        let NList = new LL();
  
        NList.insert(4);
        NList.append(2)
        NList.append(6)
        NList.insert(5);
        expect(NList.reverselist(4)).toEqual("error");
      });
    
      it("reverse()  Where k is not a positive integer", () => {
        let NList = new LL();
        
        NList.insert(4);
        NList.append(2)
        NList.append(6)
        NList.insert(5);
        expect(NList.reverselist(-4)).toEqual("error");
      });

      it("reverse() Where the linked list is of a size 1", () => {
        let NList = new LL();
        NList.insert(4);
      
        expect(NList.reverselist(0)).toEqual(4);
      });

      
      it("reverse() Happy Path” where k is not at the end, but somewhere in the middle of the linked list", () => {
        let NList = new LL();
        
        NList.insert(4);
        NList.append(2)
        NList.append(6)
        NList.insert(5);
        NList.insert(8);
        expect(NList.reverselist(3)).toEqual(5);
      });

      it('ZipList() check if it works as needed',()=>{
        let List3= new LL();
        let List1= new LL();
        List1.insert(40);
        List1.append(10);
  
         let List2= new LL();
         List2.insert(30);
         List2.append(50);
        
        expect(List3.zipList(List1,List2).toString()).toEqual('40, 30, 10, 50');
      });

      it('ZipList() if the length is not the same',()=>{
        let List3= new LL();
        let List1= new LL();
        List1.insert(40);
        List1.append(10);
  
         let List2= new LL();
         List2.insert(30);
         List2.append(50);
         List1.append(80);
         List1.append(90);
        expect(List3.zipList(List1,List2).toString()).toEqual('40, 30, 10, 50, 80, 90');
      });
    });
