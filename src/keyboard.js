
const Keyboard = (props) => {

  const keyboardTab = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Ę', 'Ó', 'Ą', 'Ś', 'Ł', 'Ż', 'Ź', 'Ć', 'Ń'];
  const keyboardMap = keyboardTab.map((key) => (
    <div id={key} name={key} className="keyboard_key" key={key} onClick={() => props.handlePush(key)}>
      {key}
    </div>
  ))

  return (
    <form className="keyboard">
      <div className="keyboard_letter">{keyboardMap}</div>
      <div className="function_key" onClick={() => props.handleDelete(this)}>Delete</div>
    </form>
  )
}

export default Keyboard;
