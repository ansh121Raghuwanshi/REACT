import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

   {/*  https://www.devui.in/components  yaha se component le sakte h website h*/ }
      <h1 className='bg-green-400 p-4'>Tailwind-Props | AC</h1>
    
      <Card username={"ansh"}/>
        <Card username="patel"/>
    
    </>
  )
}

export default App
