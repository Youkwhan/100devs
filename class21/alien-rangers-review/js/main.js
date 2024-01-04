//Arrays

//Create and array of tv shows. Loop through and print each show to the console
const tvShows = ["a", "b","c","d","e"]
tvShows.forEach(show => console.log(show))

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
const nums = [1,234,324,35,34,22,131,3]
console.log(nums.filter(num=>num%2===0))
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function SumofSecond(nums) {
  nums.sort((a,b) => a-b)
  console.log(nums)
  return nums[1] + nums[nums.length - 2]
}
console.log(SumofSecond(nums))