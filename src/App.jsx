import './sass/square.scss'
import './App.css'
import PlayingField from './PlayingField'
import { useState } from 'react'
import Navbar from './Navbar'

function App() {

  const [gameState, setGameState] = useState({width: 0, mines: 0})


  
  return (
    <>
      <Navbar setGameState = {setGameState} />
      <PlayingField width = {gameState.width} mines = {gameState.mines} />
    </>
  )
}



export default App
