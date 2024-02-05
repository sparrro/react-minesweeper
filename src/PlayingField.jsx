import { useEffect } from "react"
import Square from "./Square"
import  placeNums  from "./utilities"

const PlayingField = ({width, mines}) => {

    useEffect(() => {
        if ([...document.querySelectorAll('.square')].length>10) {
            placeNums(width)
        }
        //placeNums(width)
    })

    const squares = []
    const minePositions = []
    const playingFieldStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${width}, 2rem)`,
        gridGap: '2px'
    }

    while (minePositions.length<mines) {
        let position = Math.floor(Math.random()*width*width)

        if (!minePositions.includes(position)) {
            minePositions.push(position)
        }
    }

    for (let i = 0; i<width*width; i++) {
        minePositions.includes(i) ? squares.push({num: i, mine: true}) : squares.push({num: i, mine: false})
    }

    return (
        <div className="playing-field" style={playingFieldStyle}>
            {squares.map((i) => {
                return (
                    <Square key={i.num} id={i.num} mine = {i.mine} width={width} />
                )
            })}
        </div>
    )
}









export default PlayingField