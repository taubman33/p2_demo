import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Data () {
 
    //making a state to set data in √
    //setting up a useeffect to control my components lifecycle √
    //organize API links / url √
    // make the darned API call, right?√
    //set our data in state and log it√
    // render our data √
    //set up Guard Operator √

    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        const url = 'https://pokeapi.co/api/v2/pokemon/ditto'
        const getPokemon = async () => {
            const response = await axios.get(url)
            console.log(response.data)
            setPokemon(response.data)
        }
        getPokemon()
    },[])

    console.log(pokemon)

    //Returns go INSIDE of our IF ELSE
    // Ternaries go INSIDE of our Returns


if (pokemon && pokemon.name) {
    return (  <div>
    <h2> {pokemon.name}</h2>
    <img src={pokemon.sprites.front_default}/>
</div>
    )
} else {
    return (
     <h1> loading please wait</h1> 
    )
  }
}