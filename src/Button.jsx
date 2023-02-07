import context from './context'
import { useContext } from 'react'

const Text = () => {
  const store = useContext(context)

  return <button onClick={() => store.addCount()}>Add Count</button>
}

export default Text
