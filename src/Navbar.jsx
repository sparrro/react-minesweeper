const Navbar = ({handleInput}) => {
    return (
        <nav>
            <label htmlFor="">Bredd:</label>
            <input id="width" type="number" onInput={() => {
                if ((document.getElementById('width').value != '') && (document.getElementById('mines') != '')) {
                    handleInput({width: document.getElementById('width').value, mines: document.getElementById('mines').value})
                }
            }} />
            <label htmlFor="">Minor:</label>
            <input id="mines" type="number" onInput={() => {
            }} />
        </nav>
    )
}

export default Navbar