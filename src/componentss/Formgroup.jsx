import React from 'react';
import "./Formgroup.css"



function FormGroup(propsObj) {
  console.log("Props", propsObj);
  return (
    <div style={{marginBottom:"1rem"}}>
      <label htmlFor={propsObj.id} style={{display: 'block' }} className={propsObj.className}>
        {propsObj.label}
      </label>
      <input
        type="text"
        id={propsObj.id}
        placeholder={propsObj.placeholder}
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "2px solid black",
          boxSizing: "border-box"
        }}
      />
    </div>
  );
}

  
  export default FormGroup;