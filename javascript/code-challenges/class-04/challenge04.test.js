



function sumOfMatrix(matrix){

let sum=0;
let arr=[];
for(let i=0 ; i<matrix.length ; i++){

for(let x=0 ; x<matrix[i].length ; x++){


   
    sum += matrix[i][x];
}
arr.push(sum)
sum=0
}

return arr;

}




describe('Test challenge 04' , ()=>{
    test ('should return the sum of matrix ', ()=>{
        expect(sumOfMatrix([ [1, 2, 3], [3, 5, 7], [1, 7, 10] ])).toStrictEqual([6, 15, 18]);
        expect(sumOfMatrix([ [0, 1, 5], [-4, 7, 2], [-3, 12, 11] ])).toStrictEqual([6, 5, 20]);
    });
  
})


// let matrix=[[1,2,3],[4,5,6],[7,8,9]];


// let arr=[];
// let sum=0;

// for(let i =0 ;i<matrix.length ;i++){

//   for(let x=0 ;x<matrix[i].length ; x++){

// sum += matrix[i][x]

//   }
//   arr.push(sum)
// console.log(arr);
// }