// App.js

import "./styles.css";
import  ErrorBoundary from "./ErrorBoundary"
function App(){
  return(
<ErrorBoundary>
<Alert message=""></Alert>
</ErrorBoundary>
    
  )
  
  }
  function Alert({message}){
    if(typeof(message)!=='string'||!message){
      throw new Error('Message Must Be String')

    }
    return(
      <h1>{message}</h1>
    )
  }
  export default App;


// ErrorBoundry.js 

import React from "react";
class ErrorBoundary extends React.Component{
  constructor(props){
    super(props);
    this.state={hasError:false}
  }
  componentDidCatch(error){
    this.setState({hasError:  true})
  }
  render(){
    if(this.state.hasError){
      return<h1>Some Eror Occured</h1>

    }
 return this.props.children;
  }
}
export default ErrorBoundary;
