import React from "react";
import "./index.css";
function Header(props) {
  const { onshowFunc, onshowClass } = props;
  return (
    <div>
      <h1 className="heading">Styling using Functional and Class Component</h1>

      <button onClick={onshowFunc} className="functionHeading">
        To see styling in Functional Component
      </button>
      <button onClick={onshowClass} className="classHeading">
        To see styling in Class Component
      </button>
    </div>
  );
}

export default Header;
