const Information = () => {
    return(
        <div className="information">
            <div className="information-text">
                <h1>Instrukcja</h1>
                <hr/>
                <p>Wpisz dowolne 5-literowe słowo, następnie kliknij Sprawdź!</p>
                <p>Po każdej próbie, Twoje słowo zostaje porównane z odpowiedzią:</p>
                <div className="information-div">
                    <div className="information-key">D</div>
                    <div className="information-key">E</div>
                    <div className="information-key" style={{background: 'green'}}>S</div>
                    <div className="information-key">K</div>
                    <div className="information-key">A</div>
                </div>
                <p>Jeśli literze zmienia się tło na <i className="information_color-word" style={{color: 'green'}}>Zielony</i>, występuje ona w haśle dokładnie w tym miejscu!</p>
                <div className="information-div">
                    <div className="information-key">L</div>
                    <div className="information-key">A</div>
                    <div className="information-key">L</div>
                    <div className="information-key" style={{background: 'yellow'}}>K</div>
                    <div className="information-key">A</div>
                </div>
                <p>Jeśli literze zmienia się tło na <i className="information_color-word" style={{color: 'yellow'}}>Żółty</i>, występuje ona w haśle lecz nie w tym miejscu gdzie została wpisana!</p>
                <div className="information-div">
                    <div className="information-key">R</div>
                    <div className="information-key" style={{background: 'grey'}}>O</div>
                    <div className="information-key">W</div>
                    <div className="information-key">E</div>
                    <div className="information-key">R</div>
                </div>
                <p>Jeśli literze zmienia się tło na <i className="information_color-word" style={{color: 'grey'}}>Szary</i>, wpisana litera nie występuje w haśle!</p>
                <hr/>
                <p style={{textAlign: 'center'}}>W grze nie występują żadne podpowiedzi!</p>
                <p style={{textAlign: 'center'}}>Masz 5 szans na odgadnięcie hasła!</p>
                <h2>Powodzenia!</h2>
            </div>
        </div>
    )
}

export default Information;