/**
 * Hour glass
 *
 * By:      Daniel Pawelko
 * Version: 1.0
 * Since:   2022-11-23
 */

import promptSync from 'prompt-sync'
const prompt = promptSync()

function hourglass(stars: number, empty: number): void {

  // Base Case
  if (stars !== 0) {
    // Output string
    let out = ''

    // Adding empty spaces to the output string
    for (let count = 0; count < empty; count++) {
      out += ' '
    }

    // Adding stars to the output string
    for (let count = 0; count < stars; count++) {
      out += '* '
    }

    // Printing and recursion
    console.log(out)
    hourglass(stars - 1, empty + 1)
    console.log(out)
  }
}

const inp = prompt('How wide would you like the hour glass to be: ')
const inpInt = parseInt(inp)

console.log('')
if (isNaN(inpInt)) {
  console.log('Invalid Input')
} else if (inpInt <= 0) {
  console.log('Input must be greater than 0')
} else {
  hourglass(inpInt, 0)
}

console.log('\nDone.')
