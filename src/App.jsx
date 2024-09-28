import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GradientText from './components/GradientText'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <GradientText>Sanket Dhumal</GradientText>
        {/* <BlurText text="Isn't this so cool?!" className="custom-class" delay={50} /> */}
    </>
  )
}


export default App
