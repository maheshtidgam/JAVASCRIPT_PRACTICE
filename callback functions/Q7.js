
function cb(el){
   if (el%2===0){
     return el
   }
}
function filterArray(arr, cb){
   return arr.map((el)=>cb(el))




}

let numbers=[1,2,3,4,5,6]

console.log(filterArray(numbers,cb))


