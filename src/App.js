import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
  const [firstTurn, setFirstTurn] = useState(false)
  let init = [{id:0, value:'-'},{id:1, value:'-'},{id:2, value:'-'},{id:3, value:'-'},{id:4, value:'-'},{id:5, value:'-'},{id:6, value:'-'},{id:7, value:'-'},{id:8, value:'-'}]
  let winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
  const [gameState, setGameState] = useState('default')
  const [arr, setArr] = useState(init)

  useEffect(()=> {
    if(firstTurn == 'computer'){
      let move = Math.floor(Math.random()*9)
      let placeholder = [...arr]
      placeholder.splice(move, 1, {id:move, value:"O"})
      setArr(placeholder)
    }
  },[firstTurn])

  useEffect(()=>{
    checkWin();
  },[arr])

  useEffect(()=>{
    if(gameState !== 'default'){
      let placeholder = [...arr]
      placeholder = placeholder.map(c => {
        if(c.value == '-') {
          return ({id:c.id, value:'.'});
        }
        return c;
      });
      setArr(placeholder)
    }
  },[gameState])

  if(!firstTurn){
    return(
      <div className='App'>
        <h1>Tic-Tac-Toe!</h1>
        <h2>Who should go first?</h2>
        <button onClick={()=>{(setFirstTurn('player'))}}>Me</button>
        <button onClick={()=>{(setFirstTurn('computer'))}}>The Computer</button>
      </div>
    )
  }

  function checkWin(){
    winConditions.forEach(win => {
      if(arr[win[0]].value =='X' && arr[win[1]].value =='X' && arr[win[2]].value =='X'){
        setGameState('Player Victory')
    } else if(arr[win[0]].value =='O' && arr[win[1]].value =='O' && arr[win[2]].value =='O'){
        setGameState('Computer Victory')
    }})
    if(!arr.some((current) => {return current.value == '-' || current.value == '.'})){
        setGameState('Tied')
    }
  }


    const playerTurn = (value, id) => {
        if(value == '-'){
          let placeholder = [...arr]
            placeholder.splice(id, 1, {id:id, value:'X'})
            setArr(placeholder)
            checkWin()
            setTimeout(function () {
              if(gameState == 'default'){
                let move = Math.floor(Math.random()*9)
                if(placeholder[move].value == '-'){
                  let placeholder2 = [...placeholder]
                  placeholder2.splice(move, 1, {id:move, value:'O'})
                  setArr(placeholder2)
                } else {
                  let placeholder2 = [...placeholder]
                  for (let index = 0; index < 9; index++) {
                    const c = placeholder2[index];
                    if(c.value == '-'){
                      placeholder2.splice(index, 1, {id:index, value:'O'})
                      setArr(placeholder2)
                      break;
                    }    
                  } 
                } checkWin()
              }
            }, 500)
        }
    }
  

    function changeColor(gameState){
      let color;
      if(gameState == 'Player Victory'){
          color = 'green'
      }
      if(gameState == 'Computer Victory'){
        color = 'red'
      }

      else if(gameState == 'Tied'){
          color = 'orange'
      }
      return {color}
      
  }

  const gameover = () => {
    if(gameState == 'Tied'){
      return(
        <h2>Game Tied</h2>
      )
    }
    if(gameState == 'Player Victory'){
      return(
        <h2>You Won!</h2>
      )
    }
    if(gameState == 'Computer Victory'){
      return(
        <h2>You Lost</h2>
      )
    }
  }

  return (
    <div className='App'>
      <h1>Tic-Tac-Toe!</h1>
      {gameover()}
      <div className='gridContainer'>
        <button style={changeColor(gameState)} className='box' onClick={()=>{playerTurn(arr[0].value, 0)}}>{arr[0].value}</button>
        <button style={changeColor(gameState)} className='box' onClick={()=>{playerTurn(arr[1].value, 1)}}>{arr[1].value}</button>
        <button style={changeColor(gameState)} className='box' onClick={()=>{playerTurn(arr[2].value, 2)}}>{arr[2].value}</button>
        <button style={changeColor(gameState)} className='box' onClick={()=>{playerTurn(arr[3].value, 3)}}>{arr[3].value}</button>
        <button style={changeColor(gameState)} className='box' onClick={()=>{playerTurn(arr[4].value, 4)}}>{arr[4].value}</button>
        <button style={changeColor(gameState)} className='box' onClick={()=>{playerTurn(arr[5].value, 5)}}>{arr[5].value}</button>
        <button style={changeColor(gameState)} className='box' onClick={()=>{playerTurn(arr[6].value, 6)}}>{arr[6].value}</button>
        <button style={changeColor(gameState)} className='box' onClick={()=>{playerTurn(arr[7].value, 7)}}>{arr[7].value}</button>
        <button style={changeColor(gameState)} className='box' onClick={()=>{playerTurn(arr[8].value, 8)}}>{arr[8].value}</button>
      </div>
    </div>
  );
}

export default App;
