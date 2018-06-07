/* 
add function with multiple calls and returns added
numbers if last parameter is not a number

Example: 

Input: 
  add(10)(20)(30)(true);
  add(10)(30)(1)(3)(5)(1)(true);

Output:
  60
  50
  
*/

function add(a) {
  if (typeof a === "number") {
    if (this && typeof this.valueOf() === "number") {
      return add.bind(this + a);
    }
    else {
      return add.bind(a);
    }
  }
  else {
    return this && this.valueOf() || 0;
  }
}

console.log(add(10)(30)(1)(3)(5)(1)(true));
