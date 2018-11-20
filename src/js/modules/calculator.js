const screen = document.getElementById('js-calculator-screen'),
      keys = document.getElementById('js-calculator-keys')

// Reset Content in Screen
screen.textContent = '0'

// Execute Operation?
let operationStatus = false,
    number1, typeOperation

const calculator = () => {
  if(!keys) return
  keys.addEventListener('click', e => {
    let t = e.target,
        d = t.dataset
    
    // detectar pulsar un número
    if(d.number) writeScreen(d.number) // Ok
    // detectar pulsar una operación matemática
    if(d.math) getOperation(t,d.math) // Ok
    // detectar pulsar una otra operación
    if(d.operation) runOperation(d.operation)
  })
}

// Write in Screen
const writeScreen = number => {
  screen.textContent === '0' || operationStatus === true
    ? screen.textContent = number
    : number === '.' && !screen.textContent.includes('.') 
      ? screen.textContent += number
      : number !== '.'
        ? screen.textContent += number
        : null

  operationStatus = false
}

// Get Operation
const getOperation = (element,operation) => {
  operationStatus = true
  number1 = Number(screen.textContent)
  typeOperation = operation 
  screen.textContent = element.textContent
}

// Run Operation
const runOperation = (operation) => {
  
  // Get Result
  const getResult = (number1, typeOperation) => {
    const number2 = Number(screen.textContent)
    let result
    switch (typeOperation){
      case 'add':
        result = number1 + number2
        break;
      case 'minus':
        result = number1 + number2
        break;
      case 'multiply':
        result = number1 * number2
        break;
      case 'divide':
        result = number1 / number2
        break;
      default:
        break
    }

    result == Infinity
      ? screen.textContent = 'Error'
      : screen.textContent = result
  }

  // Operation
  operation === 'clear'
    ? screen.textContent = '0'
    : getResult(number1,typeOperation)

  operationStatus = true
}


export { calculator }
