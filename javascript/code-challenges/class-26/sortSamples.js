let array=[8,4,23,42,16,15];

function SelectionSort(arr){

    for(let i=0; i<=arr.length -1; i++){
        let min=i
for(let j=i +1;j<arr.length; j++){

if(arr[j]<arr[min]){
    min=j
}
}
[arr[i],arr[min]]=[arr[min],arr[i]]

    }
    return arr;
}

console.log(SelectionSort(array));
module.exports= SelectionSort

