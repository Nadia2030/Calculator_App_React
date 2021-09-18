import React, { Component } from 'react';
import './App.css';
import CalculatorComponent from "./components/CalculatorComponent";

export default class App extends Component {
  
 

render() {
    return (
        <div>
           <CalculatorComponent></CalculatorComponent>
        </div>
    );
}
}