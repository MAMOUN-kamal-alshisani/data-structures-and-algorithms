

const mergesort=require('../mergeSort')


describe("mergeSort", () => {
  it("sort the array", () => {
    let array = [9,16,34,21,65,1,67,100,88]

    let expectedArray = [1,9,16,21,34,65,67,88,100,]
    expect(mergesort(array)).toEqual(expectedArray);
  });

  it("Reverse-sorted:", () => {
    let array = [9,8,7,6,5,4,3,2,1]

    let expectedArray = [1,2,3,4,5,6,7,8,9]
    expect(mergesort(array)).toEqual(expectedArray);
  });

  it("Few uniques", () => {
    let array = [50,40,30,20,10,0,10,20,30]

    let expectedArray = [0,10,10,20,20,30,30,40,50]
    expect(mergesort(array)).toEqual(expectedArray);
  });

  it("Few uniques", () => {
    let array = [2,3,5,7,13,11]

    let expectedArray = [2,3,5,7,11,13]
    expect(mergesort(array)).toEqual(expectedArray);
  });



});