import axios from 'axios';
import React, { useState } from 'react'
import { debounce } from "ts-debounce";

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
    const [values, setValues] = useState(['vue', 'angular']);

    function throttle(func: any, timeFrame: any) {
        var lastTime = 0;
        return function () {
            var now = Date.now();
            if (now - lastTime >= timeFrame) {
                func();
                lastTime = now;
            }
        };
      }

      //Пробный запрос
    async function fetch(){
        try{
          const response: any = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
          console.log('response :>> ', response);
        } catch (e) {
          alert(e)
        }
      }
      //Срабатывает сразу, следующий вызов через указанное время
      const f = throttle(fetch, 3000)

      //Срабатывает после истечения времени и если прервалось ожидание, то не выполниться
    //   const f = debounce(fetch, 3000)

    const onClick = () => {
        const newValues = [...values]
        newValues.push('');
        setValues(newValues);
    }

    const onChange: any = (e: any, index: any) => {
        const newValues = [...values]
        newValues[index] = e.currentTarget.value;
        setValues(newValues);
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
           {values.map((val, index)=> <input
                key={index}
                onChange={(e) => onChange(e, index)}
                onMouseMove={(e)=> f()}//Изучаем debounce И throttling по движению мыши. отправка запроса
                className='input'
                type='text'
                defaultValue={val}
                placeholder='ВВЕДИ'
            />)}
            <div className='controls'>
                <button
                    className='button'
                    type='button'
                    onClick={onClick}
                >
                    Добавить Input
                </button>
                <button
                    className='button'
                    type='button'
                    disabled={!values.every(validate)}
                    >
                    Создать
                </button>
            </div>
        </form>
    )
}

export default ManageInputs
