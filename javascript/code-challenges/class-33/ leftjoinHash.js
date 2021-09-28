import HashTable from "./hashtable";



function leftjoin(leftHash,rightHash){
    leftHash.forEach(bucket=>{
        if (rightHash.contain(bucket[key])) {

            let current=bucket.next;
            while (current.next) {
                rightHash.push(current.val[key]); 
            }
            rightHash.push(current.val[key]);
        }
    });
    return rightHash;
}



let lefthash =new HashTable(3)

let rightHash = new HashTable(3)


lefthash.set('fond', 'enamored');
lefthash.add('wrath', 'anger');
lefthash.add('diligent', 'employed');

rightHash.add('fond', 'averse');
rightHash.add('follow', 'delight');
rightHash.add('averse', 'idle');


console.log(leftjoin(lefthash,rightHash));