import React, { useState, useEffect } from 'react';
import './styles/style.css'
import MostraVoltas from './components/MostraVoltas'
import MostraTempo from './components/MostraTempo'
import MostraTempoTotal from './components/MostraTempoTotal'
import Button from './components/Button'


function App() {
  /*
  Funcionamento do useState
  const [array0(Ex.: voltas), array1( Ex.: setVoltas)] = useState(valor array0(Ex.: 0))
  A posição 0 recebe o valor inicial
  A posição 1 faz a alteração da posiao 0
  */
  const [numVoltas, setNumVoltas] = useState(0)  
  const [running, setRunning] = useState(false)
  const [tempo, setTempo] = useState(0)

  useEffect(() => {
    let timer = null
    if(running){
      timer = setInterval(() => {
        setTempo(old => old + 1)
      }, 1000)
    }
    return () => {
      if(timer){
        clearInterval(timer)
      }
    }    
  }, [running])

  const toggleRunning = () => {
    setRunning(!running)
  }

  const increment = () => {
    setNumVoltas(numVoltas + 1)
  }

  const decrement = () => {
    if(numVoltas > 0){
      setNumVoltas(numVoltas - 1)
    }
  }

  const reset = () => {
    setNumVoltas(0)
    setTempo(0)
  }

  return (
    <div>
      <MostraVoltas voltas={numVoltas}/>
      <Button text='-' onClick={decrement}/>
      <Button text='+' onClick={increment}/><br/>
      { 
        numVoltas > 0 &&
        <MostraTempoTotal tempo={Math.round(tempo)}/>
      }
      { 
        numVoltas > 0 &&        
        <MostraTempo tempo={Math.round(tempo/numVoltas)}/>
      }
      <Button text={running ? 'Pausar':'Iniciar'} onClick={toggleRunning}/>
      <Button text='Reiniciar' onClick={reset}/>
    </div>
  )
}

export default App;
