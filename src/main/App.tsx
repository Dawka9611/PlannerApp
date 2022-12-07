import { useState } from 'react'
import reactLogo from './assets/react.svg'
import '../Styles/App.scss'
import Routers from './Routers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="scssClass">
      <div className='App'>
        <Routers />
      </div>
    </div>
  )
}

export default App
