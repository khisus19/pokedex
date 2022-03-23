// Función que busca los datos en el API:
/* const fetchPokemon = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/ditto`;
    fetch(url).then((res) => {
        console.log(res); //Esta es la respuesta que nos regresa el servidor
        return res.json(); 
    }).then((data) => {
        console.log(data);
        //De la data traeremos la imagen y la ponemos en pokeImg
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg); //Ejecuta la función para cambiar la imagen
    })
} */

// fetchPokemon();

// Función para que al pulsar el button tome el input ingresado:
/* const imprimir = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value;
    console.log("Hola " + pokeInput);
} */
// Función para mayúscula:
function capitalizarPrimeraLetra(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
// Función para cambiar la imagen:
const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}
// Función para cambiar la nombre:
const pokeNombre = (pokemon) => {
    let nombre = capitalizarPrimeraLetra(pokemon);
    document.getElementById("pokeNombre").innerHTML = `${nombre}`;
    
}

// pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png");

// Función que busca los datos en el API tomando del input:
const fetchPokemon = () => {
    // Tomamos el input y lo metemos en una variable:
    const pokeName = document.getElementById("pokeName");
    // Obtenemos el valor de la variable del input y lo transformamos a minúsculas:
    let pokeInput = pokeName.value.toLowerCase();
    // Hacer la petición a la API:
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        // El siguiente if es para que en caso de ingresar un nombre que no esxiste el status no será igual a "200" por lo que cambiará a una imagen de error
        if (res.status != "200") {
            console.log(res); //Esta es la respuesta que nos regresa el servidor
            pokeImage("./assets/error.png")
        }
        // si el status = "200" estará bien y sigue con la devolución del json
        else {
            return res.json(); 
        }
    }).then((data) => {
        //De la data traeremos la imagen y la ponemos en pokeImg
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg); //Ejecuta la función para cambiar la imagen
        // pokeNombre(pokeNbr);
        let pokeNbr = data.name; 
        let pokeId = data.id;
        let pokeTipo = data.types[0].type.name;
        let tipo = capitalizarPrimeraLetra(pokeTipo);
        

        pokeNombre(pokeNbr);
        document.getElementById("pokeNumero").innerHTML = `<b>#${pokeId}<b/>`;
        document.getElementById("pokeTipo").innerHTML = `${tipo}`;
        
        let pokeStats = [data.stats[0].base_stat, data.stats[1].base_stat, data.stats[2].base_stat, data.stats[3].base_stat, data.stats[4].base_stat, data.stats[5].base_stat];
        document.getElementById("stat1").innerHTML = `${pokeStats[0]}`;
        document.getElementById("stat2").innerHTML = `${pokeStats[1]}`;
        document.getElementById("stat3").innerHTML = `${pokeStats[2]}`;
        document.getElementById("stat4").innerHTML = `${pokeStats[3]}`;
        document.getElementById("stat5").innerHTML = `${pokeStats[4]}`;
        document.getElementById("stat6").innerHTML = `${pokeStats[5]}`;

        console.log(pokeStats);
        let movimientos = data.moves.map(mov => mov.move.name); 
        console.log(movimientos);
    })
}

