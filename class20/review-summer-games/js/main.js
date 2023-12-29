//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function m(nums) {
  return nums.reduce((total, num) => total * num, 1)
}

console.log(m([1,2,3,4,435,3456,457,4567,56]))