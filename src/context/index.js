

import { createContext, useReducer } from 'react'
import reducer from './reducer'
const Context = createContext({})


const level = {
  index: 1,
  cache: 0
}

export const ContextProvider = function (props) {

  const [state, dispacth] = useReducer(reducer, { level })
  return (
    <Context.Provider value={{ state, dispacth }}>
      {props.children}
    </Context.Provider>
  )
}
export default Context

