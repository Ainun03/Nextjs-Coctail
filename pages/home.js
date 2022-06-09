import React, { useEffect, useState } from 'react'
import Listcom from '../components/List'
import style from '../styles/Home.module.css'
import {  Form, FormGroup  } from 'react-bootstrap'

export default function Drink() {
    const [state, setState] = useState({
        posts: [],
        searchDrink: []
    })

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
                .then(response => response.json())
                .then(result => {
                    setState({ posts: result.drinks })
        })
    }, [])

    const handleChange = (e) => {
        const search = e.target.value;

        if(search) {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
                .then(response => response.json())
                .then(result => {
                    setState({ posts: result.drinks, searchDrink: search})
                })
        } else {
            fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
                .then(response => response.json())
                .then(result => {
                    setState({ posts: result.drinks })
                })
        }
    }

    return(
        <div className=''>

            <h1 className='text-center text-4xl antialiased mt-2 font-mono'> List  Cocktails !</h1>
                <div className={style.name}>
                    <form className={style.search}>
                    <FormGroup>
                        <Form.Control type="text" name="searchDrink" id="searchDrink" 
                        placeholder="Search . . ." value={state.searchDrink}
                        onChange={handleChange}/>
                    </FormGroup>
                    </form>
                </div>
            <div className={style.App}>
                { state.posts.length > 0 && state.posts.map(i => 
                <Listcom 
                    key={i.idDrink} 
                    drink={i} 
                />)}
            </div>
        </div>
    )
}