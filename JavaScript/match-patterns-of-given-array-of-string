
/* 
  
  Match given array of string with similar patterns
  
  For Example:
  
  "aba", "xlx", "aaxx", "mmnn", "xyzlm", "yydd"
  
  here matching patterns are: 
  
  "aba", "xlx" --> matched
  
  "aaxx", "mmnn", "yydd" --> matched
  
  
*/

function matchPatterns(arr){
  
  var obj = {};
  for(var i = 0; i < arr.length; i++){
    let strObj = {}, item = arr[i], pattern = "", index = 0;
    
    for(let j = 0; j < item.length; j++){
      
      if(!strObj.hasOwnProperty(item[j])){
        strObj[item[j]] = index++;
      }
      pattern += strObj[item[j]];
      
    }
    
    if(obj[pattern]){
      obj[pattern][0]++;
      obj[pattern][1].push(item);
    }
    else{
      obj[pattern] = [1, [item]];
    }
  }
  return obj;
}



/* Sample input/output */

var arr = [
  "aba", "xlx", "pqr", "xyz", "aab", "xxy", "aaa", "ccc"
];

console.log(matchPatterns(arr));
