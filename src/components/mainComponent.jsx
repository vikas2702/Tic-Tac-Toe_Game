import React, { Component } from "react";
import Cell from "./cell";
import './cell.css';

class MainComponent extends Component{

    state = {
        turn: "X",
        value : Array(9).fill(''),
        winner: false,
    }

    checkForWinner = (value) => {
        let s1 = {...this.state};
        let conditions = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6],
        ];
        conditions.forEach((pattern) => {
            if(value[pattern[0]] !== "" || value[pattern[1]] !== "" || value[pattern[2]] !== ""){
                if(value[pattern[0]] === value[pattern[1]] && value[pattern[1]] === value[pattern[2]]){
                    s1.winner = true;
                    this.setState(s1);
                }
            }
        })
    }


    handleBox = (num) => {
        let s1 = {...this.state};
        if(s1.winner){
            // 
        }else {
            if(s1.turn === "X"){
                s1.turn = "O";
                if(s1.value[num] !== ""){
                    alert('Already Clicked');
                    return;
                }else{
                    // this.checkForWinner(s1.value);
                    s1.value[num] = "X"
                }
                this.setState(s1);
            }
            else {
                s1.turn = "X";
                if(s1.value[num] !== ""){
                    alert('Already Clicked');
                    return;
                }else{
                    // this.checkForWinner(s1.value);
                    s1.value[num] = "O"
                }
                this.setState(s1);
            }
        }
        this.checkForWinner(s1.value);
    } 

    handleReset = () => {
        let s1 = {...this.state};
        s1.value = Array(9).fill('');
        s1.winner = false;
        this.setState(s1);
    }

    render(){
        const { turn, value, winner } = this.state;
        console.log(turn, value);
        return (
            <div className="container">
            <h5>Move: {turn} {winner ? <div className="win">{`${turn} is a winner`}</div> : ""}</h5>
                <div className="box">
                    <Cell num={0} value={value} onClick={() => this.handleBox(0)}/>
                    <Cell num={1} value={value} onClick={() => this.handleBox(1)}/>
                    <Cell num={2} value={value} onClick={() => this.handleBox(2)}/>
                </div>
                <div className="box">
                    <Cell num={3} value={value} onClick={() => this.handleBox(3)}/>
                    <Cell num={4} value={value} onClick={() => this.handleBox(4)}/>
                    <Cell num={5} value={value} onClick={() => this.handleBox(5)}/>
                </div>
                <div className="box">
                    <Cell num={6} value={value} onClick={() => this.handleBox(6)}/>
                    <Cell num={7} value={value} onClick={() => this.handleBox(7)}/>
                    <Cell num={8} value={value} onClick={() => this.handleBox(8)}/>
                </div>
                <div>
                    
                    <button className="btn btn-primary btn-sm mt-2" onClick={() => this.handleReset()}>{winner ? "New Game" : "Reset"}</button>
                </div>
            </div>
        );
    }
}

export default MainComponent;