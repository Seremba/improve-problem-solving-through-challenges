// search for 22 in the Array

const binarySearch = (arr, target) =>{
  let start = 0;
  let end = arr.length - 1;

  while(start <= end) {
     // find the mid
     let mid = Math.floor((start + end)/2);

     if(target === arr[mid]){
         return mid;
     }

     if(target < arr[mid]){
         start = mid - 1;
     } else if (target > arr[mid]){
         end = mid + 1;
     }
  }

return -1;
}





const arr = [-18, -12, -4, 2, 3, 4, 15,16, 18, 22, 45, 89];
const target = 22;
console.log(binarySearch(arr, 22))
