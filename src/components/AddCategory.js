import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        setInputValue(e.target.value); //elemento sobre el que ocurrió el evento
    }

    const handleSubmit = ( e) => {
        e.preventDefault(); // Prevenir que el navegador se refresque al hacer submit

        setCategories( categories => {
            if ( inputValue ) {
                const cats = !categories.find(anime => anime === inputValue) ? [ inputValue, ...categories] : [...categories];
                setInputValue('');
                return cats;
            }
            return categories;
        } ); 
    }

    return (
        <form onSubmit = { handleSubmit } > 
            <input 
                type = "text"
                placeholder = "Buscar..."
                value = { inputValue }
                onChange = { handleInputChange }
            />
            <h1>{ inputValue }</h1>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
