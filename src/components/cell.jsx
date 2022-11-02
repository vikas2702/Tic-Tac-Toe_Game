import React, { Component } from "react";
import './cell.css'

class Cell extends Component{

    state = {   
        value: this.props.value,
        turn: this.props.turn,
    }

    handleCell = (num) => {
        console.log(num)
        this.props.onClick();
    }

    render(){
        const { num, value } = this.props;
        return (
            <div className="cell" onClick={() => this.handleCell(num)}>{value[num]}</div>
        );
    }
}

export default Cell;