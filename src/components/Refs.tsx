import React from 'react'

const Refs = () => {
    // textInput задекларирован здесь, т.к. обратный вызов ref ссылается на него
    
    let textInput : any = null;
    console.log(`textInput => ${textInput}`);
    function handleClick() {
      textInput.focus();
      console.log('textInputFocus :>> ', textInput.value);
    }
  
    return (
      <div>
          <h2>Refs</h2>
        <input
          type="text"
          ref={(input) => { textInput = input }} />
        <input
          type="button"
          value="Focus the text input"
          onClick={handleClick}
        />
      </div>
    );  
}

export default Refs;