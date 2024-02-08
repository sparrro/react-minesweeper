const Navbar = ({setGameState}) => {

    const handleClick = () => {
        let widthInput = document.getElementById('width').value
        let minesInput = document.getElementById('mines').value
        if (widthInput!='' && minesInput!='') {
          setGameState({width: widthInput, mines: minesInput})
        }
    }

    return (
        <nav>
            <input id='width' type="number" />
            <input id='mines' type="number" />
            <button type='button' onClick={handleClick}>Let's go</button>
        </nav>
    )
}

export default Navbar