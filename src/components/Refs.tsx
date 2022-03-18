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
          <h3>Refs</h3>
        <input
        className='input'
          type="text"
          ref={(input) => { textInput = input }} />
        <div className='controls'>
            <input
            type="button"
            className='button'
            value="Focus the text input"
            onClick={handleClick}
            />
        </div>
      </div>
    );  
}

export default Refs;