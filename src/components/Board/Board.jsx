import { useState } from "react";
import Square from "../Square/Square";
import './Board.css'
import { Styles } from "../../../Styles";
function Board(){

    const [turn, setTurn] = useState('X')
    const [history, setHistory] = useState([null,null,null,null,null,null,null,null,null])
    const [winner, setWinner] = useState(false)
    const [draw, setDraw] = useState(false)
    

    const checkWinner = ()=>{
        // if(history[0] == null && history[1] == null && history[2]) return false
        if(history[0] != null && history[0] == history[1] && history[1] == history[2]) return true;
        else if(history[3] != null && history[3] == history[4] && history[4] == history[5]) return true;
        else if(history[6] != null && history[6] == history[7] && history[7] == history[8]) return true;
        else if(history[0] != null && history[0] == history[3] && history[3] == history[6]) return true;
        else if(history[1] != null && history[1] == history[4] && history[4] == history[7]) return true;
        else if(history[2] != null && history[2] == history[5] && history[5] == history[8]) return true;
        else if(history[0] != null && history[0] == history[4] && history[4] == history[8]) return true;
        else if(history[2] != null && history[2] == history[4] && history[4] == history[6]) return true;
        else return false
    }

    const handleClick = (i)=>{
        
        if(history[i] !== null) return;
        
        if(history[i] === null){
            const newHistory = [...history];
            newHistory[i] = turn
            setHistory(newHistory)
            
            if(turn == 'X'){
                setTurn('O');
            }else{
                setTurn('X');
            }
        }
    }

    const restartGame = ()=>{
        setHistory([null,null,null,null,null,null,null,null,null]);
        setWinner(false);
        setTurn("X")
    }

    if(!winner && checkWinner()){
        setWinner(true)
        if(turn == 'X'){
            setTurn('O');
        }else{
            setTurn('X');
        }
    }
    
    if(!draw && history.every(item => item !== null)){
        setDraw(true)
    }
    return(
        <div className="board">
            { winner ? (
                <div>winner is {
                    turn == "X" ? (<span>Aarzoo da maal</span>) : (<span>Maalkin</span>)
                }</div>
            ) : draw ? (
                <div>Match Draw</div>
            ) : 
                (
                    <div>
                        <div>
                            <h1>Turn : {turn}</h1>
                        </div>
                        <div className="squreBtnsContainer">
                                <div className="squreBtns">
                                    <Square Styles={Styles[0]} value={history[0]} onClickSquare={() => handleClick(0)}/>
                                    <Square Styles={Styles[1]} value={history[1]} onClickSquare={() => handleClick(1)}/>
                                    <Square Styles={Styles[2]} value={history[2]} onClickSquare={() => handleClick(2)}/>
                                </div>
                                <div className="squreBtns">
                                    <Square Styles={Styles[3]} value={history[3]} onClickSquare={() => handleClick(3)}/>
                                    <Square Styles={Styles[4]} value={history[4]} onClickSquare={() => handleClick(4)}/>
                                    <Square Styles={Styles[5]} value={history[5]} onClickSquare={() => handleClick(5)}/>
                                </div>
                                <div className="squreBtns">
                                    <Square Styles={Styles[6]} value={history[6]} onClickSquare={() => handleClick(6)}/>
                                    <Square Styles={Styles[7]} value={history[7]} onClickSquare={() => handleClick(7)}/>
                                    <Square Styles={Styles[8]} value={history[8]} onClickSquare={() => handleClick(8)}/>
                                </div>
                        </div>
                    </div>
                )
            }
            <div className="restartBtnContainer">
                {(winner || draw) ? (<button className="restartBtn" onClick={restartGame}>Restart Game</button>) : null}
            </div>
        </div>
    )
}

export default Board;