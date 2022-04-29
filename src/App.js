import './App.css'
import githubLogo from './images/githubLogo.png'
import Button from './components/Button'
import Screen from './components/Screen'
import ClearAllButton from './components/ClearAllButton'
import DeleteButton from './components/DeleteButton'
import { useState } from 'react'
import { evaluate } from 'mathjs'

function App() {

  const [input, setInput] = useState('')

  const addInput = (value) => {
    if (input === '') {
      if (value === '*' || value === '/' || value === '.') {
        setInput(input)
      } else {
        setInput(input + value)
      }
    } else {
      if (
        (input.slice(-1) === '*' && (value === '*' || value === '/' || value === '+' || value === '-' || value === '.')) ||
        (input.slice(-1) === '/' && (value === '/' || value === '*' || value === '+' || value === '-' || value === '.')) ||
        (input.slice(-1) === '+' && (value === '+' || value === '-' || value === '*' || value === '/' || value === '.')) ||
        (input.slice(-1) === '-' && (value === '-' || value === '+' || value === '*' || value === '/' || value === '.')) ||
        (input.slice(-1) === '.' && (value === '.' || value === '-' || value === '+' || value === '*' || value === '/'))
      ) {
        setInput(input)
      } else {
        setInput(input + value)
      }
    }
  }

  const clearAllInput = () => {
    setInput('')
  }

  const deleteInput = () => {
    setInput(input.slice(0, -1))
  }

  const calculate = () => {
    if (
      (input.includes('+') ||
        input.includes('-') ||
        input.includes('*') ||
        input.includes('/')) &&
      !(input.slice(-1) === '.')
    ) {
      setInput(evaluate(input))
    } else {
      setInput(input)
    }
  }

  return (
    <div className='App'>
      <div className='calculator-container'>
        <Screen input={input} />
        <div className='row'>
          <ClearAllButton handleClearAll={clearAllInput}>AC</ClearAllButton>
          <DeleteButton handleDelete={deleteInput}>DEL</DeleteButton>
          <Button handleInput={addInput}>/</Button>
        </div>
        <div className='row'>
          <Button handleInput={addInput}>7</Button>
          <Button handleInput={addInput}>8</Button>
          <Button handleInput={addInput}>9</Button>
          <Button handleInput={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button handleInput={addInput}>4</Button>
          <Button handleInput={addInput}>5</Button>
          <Button handleInput={addInput}>6</Button>
          <Button handleInput={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button handleInput={addInput}>1</Button>
          <Button handleInput={addInput}>2</Button>
          <Button handleInput={addInput}>3</Button>
          <Button handleInput={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button handleInput={addInput}>0</Button>
          <Button handleInput={addInput}>.</Button>
          <Button handleInput={calculate}>=</Button>
        </div>
      </div>
      <div className='github-logo-container'>
        <a href='https://github.com/patokernel' target='_blank' rel='noopener noreferrer'>
          <img
            className='github-logo rotate-diagonal'
            src={githubLogo}
            alt='freeCodeCamp'
          />
        </a>
      </div>
    </div>
  );
}

export default App