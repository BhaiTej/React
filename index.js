import React from "react";
import ReactDom from 'react-dom/client'

// in react everything is component(card ,button ,items)
// components are basic building block of component
// rules

//  rule 1 . it should return JSX(return html)
//  rule 2 . Component name must start with uppercase letter
//  ex - it do not render the component 
//  function helloWorld(){
//     return <h1>Hello From Component</h1>
//  }
//  const root=ReactDom.createRoot(document.getElementById('root'))
//  root.render(<helloWorld />);
// function HelloWorld(){
//     return <h1>Hello From Component</h1>
// }
// root.render(<HelloWorld />);

function MyButton(){
    return <button>Click Me</button>
}
const root=ReactDom.createRoot(document.getElementById('root'))
root.render(<MyButton />);
