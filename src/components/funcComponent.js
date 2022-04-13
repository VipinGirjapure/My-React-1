import React from "react"
import "./index.css"


const FunctionComp = () => {
  return (
    <div className="functionalBox">
      <h1>This is created using functional Component</h1>
      <p className="functionalExternalStyle">This is done using external Css</p>
      <p style={{ color: "blue" }}>This is done using inline CSS</p>
    </div>
  )
}

export default FunctionComp;
