import React, {Component} from 'react';

export default class KeyPadComponent extends Component {

    render() {
        return (
            <div className="keys">
                <button name="(" class="button gray" onClick={e => this.props.onClick(e.target.name)} >(</button>
                <button name="CE" class="button gray" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                <button name=")" class="button gray" onClick={e => this.props.onClick(e.target.name)}>)</button>
                <button name="C" class="button gray" onClick={e => this.props.onClick(e.target.name)}>C</button>


                <button name="1" class="button black" onClick={e => this.props.onClick(e.target.name)} >1</button>
                <button name="2"  class="button black"onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button name="3" class="button black" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button name="+" class="button pink" onClick={e => this.props.onClick(e.target.name)}>+</button>


                <button name="4" class="button black" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button name="5" class="button black" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button name="6" class="button black" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button name="-" class="button pink" onClick={e => this.props.onClick(e.target.name)}>-</button>

                <button name="7" class="button black" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button name="8" class="button black" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button name="9" class="button black" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button name="*" class="button pink" onClick={e => this.props.onClick(e.target.name)}>x</button>


                <button name="." class="button pink" onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button name="0"  class="button black" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button name="=" class="button pink" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button name="/" class="button pink" onClick={e => this.props.onClick(e.target.name)}>÷</button> 
            </div>
        );
    }
}


