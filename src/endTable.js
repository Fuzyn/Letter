import loseLogo from './assets/loseLogo.png'

const EndTable = () => {
    return(
        <div className="end_background">
            <div className="end_table">
                <img src={loseLogo} alt='lose'/>
                <h1>Może następnym razem Ci się uda!</h1>
            </div>
        </div>
    )
}

export default EndTable;