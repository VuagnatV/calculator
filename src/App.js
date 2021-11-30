import './App.css';
import {useState} from 'react'

function CalculatorButton(props) {
  return (
    <button onClick={props.onClick}>
      {props.value}
    </button>
  )
}

function Calculator() {
  const [operation, setOperation] = useState('')
  const [total, setTotal] = useState(0)

  const operators = ['.','+', '-', '*', '/', '(', ')', '=']
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  function calculate() {
    // Eval is evil, try to find something safer :)
    setTotal(eval(operation))
  }

  return (
    <div>
      {operation}={total}
      {[...operators, ...numbers].map(
        (operator) =>
          <CalculatorButton
            value={operator}
            //onClick={() => setOperation(operation + operator)}
            onClick={() =>
              operator === '=' 
              ? calculate() 
              : setOperation(operation + operator)
            }
          />
      )}
    </div>
  )
}

function App() {
  return (
    <div>
      <Calculator />
    </div>
  )
}

export default App;
