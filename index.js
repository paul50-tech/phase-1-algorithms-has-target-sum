function hasTargetSum(array, target) {
  // Initialize an empty set to store seen numbers
  const seenNumbers = new Set();

  // Loop through each number in the array
  for (let number of array) {
    const complement = target - number;

    // Check if the complement is in the set
    if (seenNumbers.has(complement)) {
      return true;
    }

    // Add the current number to the set
    seenNumbers.add(number);
  }

  // If no pair is found, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here:
  Time complexity: O(n)
*/

/* 
  Add your pseudocode here:
  1. Initialize an empty set `seenNumbers`.
  2. Loop through each number in the array:
     a. Calculate the `complement` as `target - current number`.
     b. If the `complement` is found in the set `seenNumbers`, return true.
     c. Add the current number to `seenNumbers`.
  3. If no such pair is found, return false.
*/

/*
  Add written explanation of your solution here:
  The function checks if there are two numbers in the array that add up to the target sum. 
  It uses a set to keep track of the numbers we've already seen, so that we can quickly check 
  if the complement of the current number (the number that would add up to the target) has already been seen.
*/

// Test cases
if (require.main === module) {
  // Custom tests
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
