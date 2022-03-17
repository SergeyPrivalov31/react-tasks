import React, { useState } from 'react'

/**
 * TODO
 * 1. Добавление любого количества инпутов по кнопке
 * 2. Во время ввода во всех инпутах производить валидацию. 
 * Если input value везде "react", то кнопка "Сохранить" 
 * должна стать disabled={false}
 * 
 */

const validate = (item :any) => item === 'react'

const ManageInputs = () => {

    const [values, setValues] = useState([ 'vue', 'angular', 'react' ]);

    const onChange = (e :any, index :any) => {
        const newValue = [...values];
        newValue[index] = e.currentTarget.value;
        setValues(newValue)
    }

    const onClick = () => {
        const inputs = [...values]
        inputs.push(' ')
        setValues(inputs)
        console.log('values :>> ', values);
      }
    return (
        <form>
            <h3>Rambler. Input Managment</h3>
            <h5>
                * TODO
                * 1. Добавление любого количества инпутов по кнопке
                * 2. Во время ввода во всех инпутах производить валидацию.
                * Если input value везде "react", то кнопка "Сохранить"
                * должна стать disabled='false'
                * </h5>
            {values.map((val, index) => <input
                key={index}
                onChange={(e)=> onChange(e, index)}
                className='input'
                type='text'
                defaultValue={val}
            />)}
            <div className='controls'>
                <button
                    className='button'
                    onClick={onClick}
                    type='button'
                >
                    Добавить Input
                </button>
                <button
                    className='button'
                    type='button'
                    disabled={!values.every(validate)}
                    onClick={() => alert('You Win Samurai !!!')}
                    >
                    Создать
                </button>
            </div>
        </form>
    )
}

export default ManageInputs
