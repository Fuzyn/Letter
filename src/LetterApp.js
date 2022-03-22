import { useEffect, useState } from "react";
import Keyboard from "./keyboard";
import Information from './information';
import ReactModal from 'react-modal';
import './letter.css'
import EndTable from "./endTable";
import WinTable from "./winTable";

ReactModal.setAppElement('#root')

const LetterApp = () => {
  const [userAnswer, setUserAnswer] = useState(['', '', '', '', '']);
  const [i, setI] = useState(0);
  const [historyUserAnswer, setHistoryUserAnswer] = useState([]);
  const [counter, setCounter] = useState(5);
  const [information, setInformation] = useState([true, false, false]);
  const [turnOffButton, setTurnOffButton] = useState(false)

  useEffect(() => {
    if (turnOffButton === false) {
      Checking();
      CheckWin();
      if (information[2] === false) {
      TurnOnEndTable();
    }
    }
    
  })

  const handleClose = () => setInformation([false, false, false]);

  const wordOne = ['B', 'U', 'D', 'Y', 'Ń'];

  const handlePush = (e) => {
    if (i < 5) {
      setI(i + 1)
      userAnswer.splice(i, 1, e)
    }
    return
  }

  const handleDelete = (e) => {
    if (i > 0) {
      userAnswer.splice(i - 1, 1, '')
      setI(i - 1)
    }
    return
  }

  const handlePushEmpty = () => {
    return
  }

  const clearAnswerBackground = () => {
    const el = document.getElementsByClassName('answer')
    for (let r = 0; r < el.length; r++) {
      el[r].style.background = null
    }
  }

  let t;
  let d;
  let selectedAnswer;

  const CheckWin = () => {
    const lines = document.getElementsByClassName('text-line')
    for (let w = 0; w < lines.length; w++) {
      const line = lines[w]
      CheckWinLines(line)
    }
  }

  const CheckWinLines = (line) => {
    const separateElement = line.getElementsByClassName('text-area')
    if (separateElement[0].style.background !== 'green') {
      return
    } else if (separateElement[1].style.background !== 'green') {
      return
    } else if (separateElement[2].style.background !== 'green') {
      return
    } else if (separateElement[3].style.background !== 'green') {
      return
    } else if (separateElement[4].style.background !== 'green') {
      return
    } else {
      setInformation([false, true, false])
      setTurnOffButton(true)
    }
  }

  const TurnOnEndTable = () => {
    if (counter === 0 && information[1] === false) {
      setInformation([false, false, true])
    }
  }

  const handleSubmit = () => {
    setHistoryUserAnswer(historyUserAnswer.concat([userAnswer]));
    setUserAnswer(['', '', '', '', '']);
    setI(0);
    setCounter(counter - 1);
    clearAnswerBackground();
  }



  const Checking = () => {
    for (d = 0; d < historyUserAnswer.length; d++) {
      selectedAnswer = historyUserAnswer[d]
      firstCheck()
    }
  }

  const firstCheck = () => {
    for (t = 0; t < 150; t++) {
      checkLetter()
    }
    return
  }

  const checkLetter = () => {
    if (wordOne.includes(selectedAnswer[t]) === true) {
      if (t === wordOne.indexOf(selectedAnswer[t])) {
        return addStyle(selectedAnswer[t], 'green')
      }
      return addStyle(selectedAnswer[t], 'yellow')
    }
    return addStyle(selectedAnswer[t], 'grey')
  }

  const addStyle = (id, color) => {
    const el = document.getElementsByName(id)
    for (let r = 0; r < el.length; r++) {
      checkBackground(el[r], color)
    }
  }

  const checkBackground = (element, color) => {
    if (element.style.background === 'green') {
      return
    }
    else if (color === 'grey') {
      element.style.background = color
    }
    else if (color === 'yellow') {
      element.style.background = color
    }
    else if (color === 'green') {
      if (element['id'] === element.innerHTML) {
        element.style.background = color
      }
      else if (element['id'] !== `${wordOne.indexOf(selectedAnswer[t])}`) {
        element.style.background = 'yellow'
      }
      else { element.style.background = color }
    }
  }

  const getStyle = () => {
    if (counter === 5) {
      return 'chance-counter five'
    } else if (counter === 4) {
      return 'chance-counter four'
    } else if (counter === 3) {
      return 'chance-counter three'
    } else if (counter === 2) {
      return 'chance-counter two'
    } else if (counter === 1) {
      return 'chance-counter one'
    } else if (counter === 0) {
      return 'chance-counter zero'
    }
  }



  return (
    <div className="letter-content">
      <div className="text-block">
        {information[2] === true ? <EndTable /> : <></>}
        <div className={getStyle()}>
          <p>Pozostało Ci:</p>
          <p>{counter} szans!</p>
        </div>
        <div className="text-line answer-line">
          {i === 5 ? <div className="function_key check" onClick={handleSubmit}>Sprawdź!</div> : <></>}
          {userAnswer.map((key, t) => (
            <div id={t} key={t} className='text-area answer'>
              {key}
            </div>
          ))}</div>
        {historyUserAnswer.map((el, ind) => (
          <div id={ind} key={ind} className='text-line'>
            {el.map((item, index) => (
              <div key={index} id={index} name={item} className='text-area'>
                {item}
              </div>
            ))}
          </div>
        ))}

        <Keyboard
          handlePush={turnOffButton ? handlePushEmpty : handlePush.bind(this)}
          handleDelete={turnOffButton ? handlePushEmpty : handleDelete.bind(this)} />


        <ReactModal
          isOpen={information[0]}
          onRequestClose={handleClose}
          className="Modal"
          overlayClassName="Overlay"
        >
          <Information />
        </ReactModal>
        <ReactModal
          isOpen={information[1]}
          onRequestClose={handleClose}
          className="Modal-one"
          overlayClassName="Overlay"
        >
          <WinTable counter={counter} />
        </ReactModal>

      </div>
    </div>
  )
}

export default LetterApp;
