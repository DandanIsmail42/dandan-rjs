import React from "react";
import Title from "./Title";

export default class LifeCycle extends React.Component{
    state = {
        name: 'component',
        view: true,
        count: 0
    }
    render() {
        return(
            <div>
                {
                    this.state.view && <Title name={this.state.name} count={this.state.count} />
                }
                <button onClick={() => this.setState({view: false})}>copot</button>
                <button onClick={() => this.setState({name: 'Dandut'})}>update</button>
                <button onClick={() => this.setState({count: this.state.count + 1})}>count</button>
            </div>
        )
    }
}