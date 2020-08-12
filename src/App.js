import React from 'react';
import './App.css';
import Hello from './Hello.js'
import Hello2 from './Hello2.js'
import './Hello.css'


function App(props) {
  return <div className="c"> Hello World from {props.name} 
  <Hello firstname="Baoooooo"/>
  <Hello2 x="hahahaha" y={5-10}/>
  </div> 
}

export default App;
