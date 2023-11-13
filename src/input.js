import React from 'react';
//import { useState } from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = { temp: 0 , type: "C", oldtype: "F", trig: false, newTemp: 0, newType: "C" };
        this.tempCalc = this.tempCalc.bind(this);
    }

    reset() { this.setState({ temp: 0, type: "F", trig: false, newTemp: 0 } )}

    tempCalc() {
        this.setState({ trig: true })
        if (this.state.type === "F") {
            this.setState({
                newTemp: (Math.round(this.state.temp * 1.8) + 32 ) , newType: "F"})
        }
        else {
            this.setState({
                newTemp: Math.round((this.state.temp - 32) / 1.8), newType: "C"
            })
        }
    }

    handleChange(e) {
        if (e.target.value === "CF" || e.target.value === "FC") {
        this.setState({ type: String(e.target.value)[1], oldtype: String(e.target.value)[0] })
        }
        else {
            this.setState({ temp: Number(e.target.value) })

        }
    }
    

    render() {
        return <div>
            <input type="number" id="baseTemp"  onChange={e => this.handleChange(e)}></input>

            <div> <select onChange={e => this.handleChange(e)}  name="temptype" id="tempType">
                <option value="FC">Fahrenheit to Celsius</option>
                <option value="CF">Celsius to Fahrenheit</option>
            </select></div>

            <div> <input type="button" value="Submit" onClick={this.tempCalc}></input></div>
            
            <div>{this.state.trig === true ? this.state.newTemp + "\u00B0" + this.state.newType : ""}</div>
        </div>
    }

   

}


export default Input;