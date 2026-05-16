import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// function App() {

//    const  [counter, setCounter] =useState(0)

//   // let counter =0

// const addValue = () => {
//   if (counter != 20){
//  setCounter(counter +1)
//   }else {
//     setCounter(counter)
//   }
// }
// const removeValue = () => {
//   if(counter != 0){
//     setCounter(counter-1)
//   }else 
// setCounter(counter)
// }

//   return (
//     <>

//       <h1>CHAI AUR COUNTER</h1>
//       <h3>COUNTER VALUE:{counter}</h3>
//       <button onClick={addValue}>Add value {counter}</button>
//       <br />
//       <button onClick={removeValue}>Remove value{counter}</button>
//     </>
//   )

// react interview quwstion 
function App() {

   const  [counter, setCounter] =useState(0)

  // let counter =0

const addValue = () => {
 // interviewer isko repeat kr dega or bolega 0 se 1 jayega ya 4 print hoga, to ek hi update hoga kyuki batches me jayenge ye update , yadi maunally krna h ki 4 hi print ho to .. 
//  setCounter(counter +1)
//    setCounter(counter +1)
//     setCounter(counter +1)
//      setCounter(counter +1)

setCounter(prevCounter => prevCounter+1)
setCounter(prevCounter => prevCounter+1)
setCounter(prevCounter => prevCounter+1)
setCounter(prevCounter => prevCounter+1)

 
}
const removeValue = () => {
  
    setCounter(counter-1)
}

  return (
    <>

      <h1>CHAI AUR COUNTER</h1>
      <h3>COUNTER VALUE:{counter}</h3>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value{counter}</button>
    </>
  )
}

export default App
