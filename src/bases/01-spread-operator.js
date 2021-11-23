import React, { useState } from 'react';

const GifExpertApp = (  ) => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const handleAdd = (e) => {
        // utilizando operador spread
        if(!categories.find(anime => anime === 'HunterXHunter')) {
            setCategories( [...categories, 'HunterXHunter'] );
        }
    }
    
    return (

        <>
            <h2>GifExpertApp</h2>
            <hr />

            <button onClick = { handleAdd } >Agregar</button>

            <ul>
                {
                    categories.map( category => {
                        return <li key = { category }>{ category }</li>
                    } )

                }
            </ul>

        </>

    );

}

export default GifExpertApp;