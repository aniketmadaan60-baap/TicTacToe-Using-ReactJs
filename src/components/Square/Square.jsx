import './Square.css'

function Square({ value, onClickSquare, Styles }){
    return(
        <button style={Styles}
            onClick={onClickSquare}> 
            {value}
        </button>
    )
}

export default Square