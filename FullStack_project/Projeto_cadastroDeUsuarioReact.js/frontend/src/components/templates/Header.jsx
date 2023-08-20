import "./Header.css";
import React from "react";
//props.icone => valor do nome passado no app.jsx

export default (props) => (
    <header className="header d-none d-sm-flex flex-column">      
    <h1 className="mt-3">
      <i className={`fa fa-${props.icon}`}></i> {props.title}
    </h1>
  </header>
  
);
