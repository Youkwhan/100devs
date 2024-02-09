// PREP
/*
Given:
Range 1 to n
Divisible:
  3 fizz
  5 buzz
  3&5 fizzbuzz

Now Ask Questions:
P: num: int
  - Will the value im passing in always be a number? Number
  - whole number?
  - Negative? Positive
  - Any other kind of things that might be passed in that I have't clarified here?
R: 
  - console log?
  
E:
Let me write some test cases... Does this look correct?
*/
function fizzBuzz(num) {
  /*
  P:
  loop
  conditionals %3&5, %3, %5, ORDER MATTERS
  console log num or fizz,buzz,fizzBuzz
  Does this look like a good direction to go about solving this problem? (Usually they give hint here)
  */
  for (let i = 1; i <= num; i++) {
    byThree = i % 3 === 0;
    byFive = i % 5 === 0;
    if (byThree && byFive) console.log("fizzBuzz");
    else if (byThree) console.log("fizz");
    else if (byFive) console.log("buzz");
    else console.log(i);
  }
}

fizzBuzz(5); //1, 2, fizz, 4, buzz
fizzBuzz(3); //1,2,fizz,
fizzBuzz(15); // 1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzBuzz
