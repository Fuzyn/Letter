import winLogo from './assets/winLogo.png'

const WinTable = (props) => {
    return(
        <div>
            <div className="end_table win">
                <img src={winLogo} alt='win'/>
                <h1 style={{color: 'green'}}>Gratulacje!</h1>
                <p>Odgadłeś za {5-props.counter} podejściem!</p>
            </div>
        </div>
    )
}

export default WinTable;