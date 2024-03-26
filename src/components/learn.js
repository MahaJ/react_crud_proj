import { Component } from "react";

class learn extends Component {
    constructor(props) {
        super(props)
        console.log(props);
        this.state = {
            fruits: [
                {name : 'banana', price: 130},
                {name : 'Mango', price: 200},
                {name : 'Apple', price: 300}
            ]
        }
    }
    render() {
        
        return (<div className="container">
            {/* <h1>{this.state.fruits[1].name +' is RS: '+ this.state.fruits[1].price}</h1> */}
            <label>Fruit : {this.state.fruits[0].name}</label> <br></br>
            <label>Price : </label><input value={this.state.fruits[0].price}></input> <br></br>
            <button onClick={this.showData}>Click Me</button>
        </div> )
    }

    showData = () => {
        console.log('Button click event');
        alert('welcome to the react world!');
    }
    
}

export default learn