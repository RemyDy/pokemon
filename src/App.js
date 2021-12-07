import React, {Fragment, useState} from 'react';
import axios from "axios";
import './App.css';

//Toon 20 Pokemon op de Homepagina

//[x] Stap 1: Toon eerst 1 pokemon kaartje op de pagina
//-[x] install axios
//-[x] schrijf axios request functie in App.js voor 1 pokemon
//-[x] Log resultaat en werkt
//-[x] Maak state om later Result op te slaan
//-[x] Maak elementen die op de pagina komen te staan
//---1[x] Title
//---2[x] buttons vorige en volgende
//---3[x] span die info van pokemon weergeven zoals naam, afbeelding etc.
//-[x] Zet <><> tussen de elementen en voeg Object.keys toe, met als prop de state variable, aan de span

//[] Stap 2: Maak Pokemon component


function App() {

    const [pokemonData, setPokemonData] = useState({});

    async function fetchData() {
        try {
            const result = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
            console.log(result.data);
            setPokemonData(result.data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <Fragment>
            <h1>Pokemon</h1>
            <button
                type="button"
                name="previous"
                // onClick={}
                disabled={true}
            >Vorige
            </button>
            <button>Volgende</button>
            <span className="pokemon-details">
                {Object.keys(pokemonData).length > 0 &&
                <>
                    <h3>{pokemonData.forms[0].name}</h3>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
                         alt="balbasaur"
                         width="100px"
                    />
                    <ul>
                        <li>Abilities: {pokemonData.abilities.length}</li>
                        <li>Weight: {pokemonData.weight}</li>
                        <li>Moves: {pokemonData.moves.length}</li>
                    </ul>
                </>
                }
            </span>
            <button type="button" onClick={fetchData} disabled={false}>Haal data op</button>
        </Fragment>
    );
}

export default App;
