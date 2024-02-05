const findAdjacents = (width, square) => {
    let allSquares = [...document.querySelectorAll('.square')]
    let adjacents = []
    let squarePosition = Number(allSquares.indexOf(square))
    width = Number(width)

    if (squarePosition>width-1) {
      adjacents.push(allSquares[squarePosition-width])
      if ((squarePosition+1)%width!=0) {
        adjacents.push(allSquares[squarePosition-width+1])
      }
      if (squarePosition%width!=0) {
        adjacents.push(allSquares[squarePosition-width-1])
      }
    }
    
    if (squarePosition<width*(width-1)) {
      adjacents.push(allSquares[squarePosition+width])
      if ((squarePosition+1)%width!=0) {
        adjacents.push(allSquares[squarePosition+width+1])
      }
      if (squarePosition%width!=0) {
        adjacents.push(allSquares[squarePosition+width-1])
      }
    }

    if (squarePosition%width!=0) {
      adjacents.push(allSquares[squarePosition-1])
    }
    if ((squarePosition+1)%width!=0) {
      adjacents.push(allSquares[squarePosition+1])
    }


    return adjacents
}


const placeNums = (width) => {
  let allSquares = document.querySelectorAll('.square')

  allSquares.forEach(square => {
    if (square.innerText != '💣') {
      square.innerText = ''
    }
  })

  allSquares.forEach(square => {
    let adjacents = findAdjacents(width, square)
    if (square.innerText != '💣') {
      let mines = 0
      adjacents.forEach(adjacent => {
        if (adjacent.innerText == '💣') { mines++ }
      })
      if (mines>0) { square.innerText = mines }
    }
  })
}

export default placeNums