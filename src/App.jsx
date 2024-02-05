import './sass/square.scss'
import './App.css'
import PlayingField from './PlayingField'
import { useState } from 'react'
import Navbar from './Navbar'

function App() {

  const [gameState, setGameState] = useState({width: 0, mines: 0})
  
  return (
    <>
      <input id='width' type="number" />
      <input id='mines' type="number" />
      <button type='button' onClick={() => {
        let widthInput = document.getElementById('width').value
        let minesInput = document.getElementById('mines').value
        if (widthInput!='' && minesInput!='') {
          setGameState({width: widthInput, mines: minesInput})
        }
      }}>Let's go</button>
      <PlayingField width = {gameState.width} mines = {gameState.mines} />
    </>
  )
}



export default App
