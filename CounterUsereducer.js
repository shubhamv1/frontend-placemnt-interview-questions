
import { useReducer } from "react"
const initialstate =0;
const reducer=(state,action)=>{
  switch(action){
    case "Increment" :
      return state+1
      case "Decrement" :
        return state-1
        default :
        return state
  }
}


function App() {
  const [count, dispatch]=useReducer(reducer,initialstate)
  return (
    <div className="App">
    <div>{count}</div>
      <button onClick={()=>dispatch("Increment")}>Inc</button>
      <button onClick={()=>dispatch("Decrement")}>Dec</button>
    </div>
  )
}

export default App
