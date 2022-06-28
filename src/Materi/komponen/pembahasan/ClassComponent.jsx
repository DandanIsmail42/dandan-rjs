import React from "react";

class ClassComponent extends React.Component {
    constructor(props) {
       super() 
       this.state = {
        value: 0
       }
    }
    
    handlePlus = () => {
        this.setState({value: this.state.value + 1})
    }
    handleMin = () => {
        if(this.state.value > 0) {
            this.setState({value: this.state.value -1 })
        }
    }
    

    render() {
     return(
        <div>
            <h1>Hello world</h1>
            <h2>Wellcome {this.props.nama} </h2>
            <button onClick={this.handleMin}>-</button>
            <span>{' '}{this.state.value}{' '}</span>
            <button onClick={this.handlePlus}>+</button>
        </div>
        )
    }
}
export default ClassComponent;