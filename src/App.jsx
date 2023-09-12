import { useState } from 'react'
import './App.css'
import TrafficLight from './Components/TrafficLight'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className='TrafficLight'>
        <TrafficLight/>
        </div>
      </div>
    </>
  )
}

export default App
