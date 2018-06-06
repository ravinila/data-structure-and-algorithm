
/* 

Find if sequence of array numbers which meets the given sum


Input: 

  arr[] = [11, -2, 9, -3, 5, 6];
  sum = 20

Output: 

  { has: true, subarray: [ 11, -2, 9, -3, 5 ] }
  

  Here when you sum this sequence [ 11, -2, 9, -3, 5 ]
  We get the sum 20

*/

function hasSumSequence(arr, sum){

  var tempSum = 0, len = arr.length;
  
  
  for(var i = 0, j = 0; i < len || j < len; i++){
    
    if(i < len){
      tempSum += arr[i];
    }
    else{
      tempSum -= arr[j];
      j++;
    }
    
    if(tempSum > sum){
      tempSum -= arr[j];
      j++;
    }

    if (tempSum === sum){
      return {has: true, subarray: arr.slice(j, i+1)};
    }
    
  }
  
  return {has: false};
}


/* Sample input/output */

// var arr = [11, -2, 9, -3, 5, 6];
var arr = [1, -2, 1, -1, 5, 6];

console.log(hasSumSequence(arr, 11));
