
const mergesort = (arr) => {
  let n =  arr.length
  if(n >1){
    let mid=Math.floor(n / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return merge(mergesort(left), mergesort(right));
  }else{return arr; }
}


const merge = (left, right)=>{
    let i= 0;
    let j= 0
    let k= []
    while(i<left.length && j<right.length){
        let leftEle=left[i];
        let rightEle=right[j];

        if(leftEle<rightEle){
k.push(leftEle);
i++
        }else{k.push(rightEle);
        j++}
    }
    return k.concat(left.slice(i)).concat(right.slice(j));  
}
console.log(Array);
let array = [12, 55, 32, 65, 76, 2, 11,-100];
console.log(mergesort(array));
module.exports= mergesort



