import React, { useState } from "react"
import ClassComponent from "./components/classComponent"
import FunctionComp from "./components/funcComponent"
import Header from "./components/main."

function App() {
  const [showFunctionComponent, setShowFunctionComponent] = useState(false)
  const [showClassComponent, setShowClassComponent] = useState(false)

  const showFunctionHandler = () => {
    setShowFunctionComponent(!showFunctionComponent)
  }

  const showClassHandler = () => {
    setShowClassComponent(!showClassComponent)
  }

  return (
    <div className="App">
      <Header onshowFunc={showFunctionHandler} onshowClass={showClassHandler} />
      <div className="component-container">
        {showFunctionComponent ? <FunctionComp className="funcComp" /> : ""}
        {showClassComponent ? <ClassComponent className="classComp" /> : ""}
      </div>
    </div>
  )
}

export default App
