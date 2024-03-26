import { Component } from "react";

class CheckDataBinding extends Component {
    state = {
        name : 'Mahalakshmi',
    }

    changeStateVal = (event) => {
        this.setState({
            name : event.target.value
        })
    }

    render() {
        return(
            <div>
                <h2>Two Way Data Binding Example</h2>
                <input type='text' onChange={this.changeStateVal} value={this.state.name}></input>
                <h5>Hello {this.state.name}</h5>
            </div>
        )
    }
}

export default CheckDataBinding