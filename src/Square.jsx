import findAdjacents from "./utilities"

const Square = ({id, mine, width}) => {
    return (
        <div id={id} className="square" onClick={(e) => {
            console.log(findAdjacents(width, e.target))
        }}>
            {mine ? '💣' : ''}
        </div>
    )
}



export default Square