import { Component } from "react";


class Hook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            os : [
                { name : "Mac", price : "Rs. 1,00,000"},
                { name : "Windows", price : "Rs. 50,000"},
                { name : "Ubuntu", price : "Rs. 75,000"}
            ]
        }
    }

    viewData() {
        
        // for(var i = 0; i++; i<this.state.length) {
           return (
            <div className="container">
                <label>Name : {this.state.os[0].name}</label> <br></br>
                <label>Price : {this.state.os[0].price}</label>
            </div>
           )
        // }
    }
    render() {
        return (
            <div> <button onClick={this.viewData} >Show Data</button></div>
        )
    }

}



export default Hook