
function quickSort(arr,left,right){

  left =left ||0;
  right=right ||arr.length -1;
  let pivot = partition(arr, left, right)
  if(left<pivot - 1){
    quickSort(arr, left ,pivot -1);
  }

if(right>pivot){
  quickSort(arr, pivot ,right);
}
  return arr;

}
function partition(arr,left,right){

  let pivot = Math.floor((left +right) /2)
  while(left <=right){
    while(arr[left] <arr[pivot]){
    left++
    }
    while(arr[right] >arr[pivot]){
    right--}
    if(left<= right){
      [arr[left], arr[right]] = [arr[right], arr[left]]
      left ++
      right--
    }
  }
  return left;
}
let array = [12, 55, 32, 65, 76, 2, 11,100];
console.log(quickSort(array));
module.exports= quickSort



// return merge(quicksort(left), mergesort(right));


