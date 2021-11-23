import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = (  ) => {

    //const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
    
    const [categories, setCategories] = useState(['Kimetsu no Yaiba']);

    return (

        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories = { setCategories } />

            <hr />

            <ul>
                {
                    categories.map( category => 
                        <GifGrid 
                            key = { category }
                            category = { category } 
                        />     
                    )

                }
            </ul>

        </>

    );

}

export default GifExpertApp;