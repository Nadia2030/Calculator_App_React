import React, { Component } from 'react';
import ResultComponent from './ResultComponent';
import KeyPadComponent from "./KeyPadComponent";

class CalculatorComponent extends Component {
    constructor(){
        super();
    
        this.state = {
            result: ""
        }
    }

    handelonClick = button => {

        if(button === "="){
            this.calculate()
        }
    
        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }
    
        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };
    
    
    calculate = () => {
        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(this.state.result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })
    
        }
    };
    
    reset = () => {
        this.setState({
            result: ""
        })
    };
    
    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };
    render() {
        return (
            <div>
                <div className="box"> 
                    <ResultComponent result={this.state.result}/>
                    <KeyPadComponent onClick={this.handelonClick}/>
                </div>
            </div>
        );
    }
}

export default CalculatorComponent;