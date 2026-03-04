import { useState } from 'react'

import './App.css'

import Board from './components/Board/Board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='headingContainer'>
        <h1 className='heading'>TicTacToe game</h1>
      </div>
      <div className='gameContainer'>
        <Board />
      </div>
    </div>
  )
}

export default App
