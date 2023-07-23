const fs = require('fs');

// Load the prefixes data from the sample_prefixes file
const prefixesFileData = fs.readFileSync('sample_prefixes.txt', 'utf8').split('\n');

class matchingPrefixes {
  // Constructs the matchingPrefixes object with the list of prefixes
  constructor(prefixes) {
    // Load the data into set data structure
    this.prefixesSet = new Set();
    for (const pre of prefixes) {
      // Add the prefixes to the prefix set
      for (let i=0; i <= pre.length; i++) {
        let prefix = pre.slice(0, i);
        this.prefixesSet.add(prefix);
      }
    }
  }

  // Finds the longest prefix that matches to the string
  findLongestPrefix(str) {
    let longestPrefix = '';
    let errorMessege = 'No prefixes was matched to the input';

    for (let i = 0; i < str.length; i++) {
      let substring = str.slice(0, i+1);
      // Return true if the set has the substring
      if (this.prefixesSet.has(substring)) {
        longestPrefix = substring;
      } else {
        break;
      }
    }
    // Check the length of the longest prefix to look if no prefix was found
    return longestPrefix.length > 0 ? longestPrefix : errorMessege;
  }
}

// Create new instance of the matchingPrefixes class
const prefixesToMatch = new matchingPrefixes(prefixesFileData);


// Examples
console.log(prefixesToMatch.findLongestPrefix('4wTqbBOM4')); // return: 4
console.log(prefixesToMatch.findLongestPrefix('Rhs1OVZ9O')); // return: Rhs
console.log(prefixesToMatch.findLongestPrefix('8w0JS91X2')); // return: 8w0JS91
console.log(prefixesToMatch.findLongestPrefix('2y3fKTS133')); // return: 2y3fKTS
console.log(prefixesToMatch.findLongestPrefix(':43d')); // return: No prefixes was matched to the input

