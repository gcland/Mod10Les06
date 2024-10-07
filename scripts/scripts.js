// Mod10Les06
// 1. Exploring Asynchronous JavaScript

// Enter timestamp
ts = "1728325870"

// Enter user api key
apikey = ""

// Generate hash by marvel guidelines as noted here: https://developer.marvel.com/documentation/authorization
// md5 generator: https://www.md5hashgenerator.com/
hash = ""

async function fetchMarvelData() {
    const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=100&ts=${ts}&apikey=${apikey}&hash=${hash}`);
    const marvelData = await response.json();
    console.log(marvelData)
    return marvelData
}

document.addEventListener('DOMContentLoaded', async() => {
        const charData = await fetchMarvelData();
        const marvelInfoElement = document.getElementById('marvel-info');

        
        // Note: this code only a limited list of characers DEFINED BY 'limit=100' in the api link above. Change the value (100 in the example) to change the limit
        // Note: Changing the limit of the character list increases the time to load
        // Note: index (char_index) != character id

        // Code below returns a character name and id. Change the 'char_index' in brackets [] to see different name / id
        
        // char_index = 19
        // marvelInfoElement.innerHTML = `
        //     <h3>Name: ${charData.data.results[char_index].name}</h3>
        //     <h4>ID: ${charData.data.results[char_index].id}</h4>`
        
        console.log(charData.data.results.map(char => char.name))
        marvelInfoElement.innerHTML = `
            <h3>Characters:</h3>
            <ol>
                ${charData.data.results.map(char => `<li>${char.name}</li>`).join('')}
            </ol>`   
    });


// Pokemon api for practice 

// async function fetchPokemonData(pokemonName) {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
//     const pokemonData = await response.json();
//     console.log(pokemonData)
//     return pokemonData
// }

// document.addEventListener('DOMContentLoaded', async() => {
//     const pikachuData = await fetchPokemonData('pikachu');
//     const pokemonInfoElement = document.getElementById('pokemon-info');

//     pokemonInfoElement.innerHTML = `
//         <h2>${pikachuData.name}</h2>
//         <h3>Abilities:</h3>
//         <ul>
//             ${pikachuData.abilities.map(ability => `<li>${ability.ability.name}</li>`).join('')}
//         </ul>
//         <h3>Base Experience:</h3>
//         <p>${pikachuData.base_experience}</p>`
//         // <h3>Moves:</h3>
//         // <ul>
//         //     ${pikachuData.moves.map(move => `<li>${move.move.name}</li>`).join('')}
//         // </ul>
        
// });


