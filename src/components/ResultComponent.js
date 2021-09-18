import React, {Component} from 'react';

class ResultComponent extends Component {
    render() {

        
        let {result} = this.props;
        return (
            
            <div className="display">
                
            <input type="text"  readonly="true" size="18" id="d" value={result}/>
 
            </div>
    )
        ;
    }
}

export default ResultComponent;