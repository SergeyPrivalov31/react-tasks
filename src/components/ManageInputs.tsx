import React from 'react'

/**
 * TODO
 * 1. Добавление любого количества инпутов по кнопке
 * 2. Во время ввода во всех инпутах производить валидацию. 
 * Если input value везде "react", то кнопка "Сохранить" 
 * должна стать disabled={false}
 * 
 */

const ManageInputs = () => {

    return (
        <form>
            <h3>Rambler Input Managment</h3>
            <h5>
                * TODO
                * 1. Добавление любого количества инпутов по кнопке
                * 2. Во время ввода во всех инпутах производить валидацию.
                * Если input value везде "react", то кнопка "Сохранить"
                * должна стать disabled='false'
                * </h5>
            <input
                className='input'
                type='text'
                defaultValue='vue'
            />
            <input
                className='input'
                type='text'
                defaultValue='angular'
            />
            <div className='controls'>
                <button className='button'>
                    Добавить Input
                </button>
                <button
                    className='button'
                    type='button'
                    disabled={true}
                    >
                    Создать
                </button>
            </div>
        </form>
    )
}

export default ManageInputs