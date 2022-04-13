
import React from "react"
import "./index.css"

class ClassComponent extends React.Component {
  render() {
    return (
      <div className="classBox">
        <h1>This is created using class Component</h1>
        <p className="classExternalStyle">This is done using external Css</p>
        <p style={{ color: "blue" }}>This is done using inline CSS</p>
      </div>
    )
  }
}

      
export default ClassComponent;






// classClick()
  // export default classClick;

// import React from "react";
// class ClassComponent extends React.Component {

//   render() {
   
//     return (
//       <div>
   
//     <div className="classHeading">Class Component
//     <button>ClassComponent Button
//     </button>
  
//      <p>
//     this is inline
//   </p>
//   <p>
//     this is external
//   </p>

    
//     </div>




//    </div>
//     )
//   };
// }
