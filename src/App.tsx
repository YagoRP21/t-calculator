import './styles/main.css'

import { useCallback, useEffect, useState } from 'react'
import Display from './components/display'
import KeyPad from './components/keypad';
import Header from './components/header';


function App() {

  const [userInput, setUserInput] = useState('');
  const [finished, setFinished] = useState(true);

  const displayValue = (value: string) => {
    if(!finished) {
      setUserInput((userInput) => `${userInput}${value}`)
    } else {
      if(/[0-9]/.test(value)) {
        setUserInput(value)
      } else {
        setUserInput((userInput) => `${userInput}${value}`)
      }
      setFinished(false)
    }
  };

  const deleteValue = () => {
    if (typeof userInput == 'string') {
      setUserInput(userInput?.slice(0,-1))
    } else {
      setUserInput('')
    }
  }

  const computeValue = () => {
    try{
      let value = eval(userInput)
      value = parseFloat(value.toFixed(2))
      setUserInput(value)
      setFinished(true)
    } catch (e) {
      if (e instanceof SyntaxError) {
        alert('Invalid operation!')
        setUserInput('')
      }
    }
  }

  const clearValue = () => {
    setUserInput('')
  }


  return (
    <main>
      <div className='h-screen flex flex-col justify-center items-center'>
        <div className='w-96 mx-auto p8 bg-zinc-900 rounded-3xl shadow-lg'>
          <Header />
          <Display value={userInput} />
          <div className='bg-zinc-800 w-auto h-1 mt-8 relative -mb-8'></div>
          <KeyPad
            displayInput={displayValue}
            deleteInput={deleteValue}
            computeInput={computeValue}
            clearInput={clearValue}
          />
        </div>

      </div>



    </main>
  )
}

export default App
