import './App.css'
import context from './context'
import { useState } from 'react'
import Button from './Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <context.Provider
        value={{
          addCount: () => {
            setCount(count + 1)
          },
          count: count,
        }}
      >
        <h1>Count - {count}</h1>
        <Button />
      </context.Provider>
    </div>
  )
}

export default App
