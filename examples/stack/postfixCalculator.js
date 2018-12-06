import Stack from '../../stack/stackUsingArray'
import readline from 'readline'

const readArguments = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stack = new Stack()

const postFixCalculator = () => {
  // example input 84/ or 567*+1-
  readArguments.question('Add value and operator: ', (values) => {

    console.log('\nCalculating...\n')

    for (let item = 0; item < values.length; item++){
      let char = values.charAt(item)
      if (!isNaN(char)) {
        stack.push(char)
      } else {
        let rightHandValue = stack.pop()
        let leftHandValue = stack.pop()
        switch (char) {
          case '+':
            stack.push(parseInt(leftHandValue)+parseInt(rightHandValue))
            break
          case '-':
            stack.push(leftHandValue-rightHandValue)
            break
          case '*':
            stack.push(leftHandValue*rightHandValue)
            break
          case '/':
            stack.push(leftHandValue/rightHandValue)
            break
          case '%':
            stack.push(leftHandValue%rightHandValue)
            break
          default:
            throw new Error(`Unrecognized token ${item}`)
        }
      }
    }
    console.log('Answer is: ', stack.pop())
    readArguments.close();
  });

}

postFixCalculator()