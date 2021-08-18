
function BinarySearch(arr,searchValue){

for(let i=0; i<arr.length;i++){

if(searchValue ===arr[i]){

return i;
}
}

return -1;

}

describe('Test challenge 03' , ()=>{
    test ('should return the appropriate value ', ()=>{
        expect(BinarySearch([4,7,30,40], 30 )).toStrictEqual(2);
        expect(BinarySearch([15,34,65,44,62], 16 )).toStrictEqual(-1);
    })
})