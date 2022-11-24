// 1) Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import MrApp from './App';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
// function App() {
//   // let message ={nm:'Manish'}; // error object 
//   // if(Math.random() < 0.5 ){
//   //   message='Hello Sir';
//   // }
  
//   const time = new Date().toLocaleTimeString();

//   // return <h1>{message}</h1>;
//   // return <h1>{time} {message}</h1>;
// }


// typical component layout.............................
// function App(){

  // code to compute values we want to show in our JSX
  // const name ='Samantha';
  // const age = 23;
  // const inputType="number";
  // const minValue=5;


// content we want this component to show
  // return(
  //   <h1> My name is{name} and age is{age} </h1>
    
  // )

  // return <input type="number" min={5} max={11} />
  // return(
  //   <input 
  //   type={inputType} // props can refer to a variable using the same curly braces syntax
  //   min={minValue}
  //   style={{color:'orange',border:'2px solid blue'}}
  //    />
  // )
  // return <textarea  maxLength={6} spellCheck={false} />;
// }


// 5) Show the component on the screen
root.render(<MrApp />);