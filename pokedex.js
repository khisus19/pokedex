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
const imprimir = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value;
    console.log("Hola " + pokeInput);
}

// Función para cambiar la imagen:
const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
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
        console.log(data);
        //De la data traeremos la imagen y la ponemos en pokeImg
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg); //Ejecuta la función para cambiar la imagen
        let pokeNbr = data.name;
        pokeNombre(pokeNbr);
        let pokeTipo = data.types[0].type.name;
        console.log(pokeTipo);
        let pokeStats = data.stats[0].base_stat;
        console.log(pokeStats);
        let movimientos = data.moves.map(mov => mov.move.name); 
        console.log(movimientos);
    })
}

// Función para cambiar la imagen:
const pokeNombre = (url) => {
    const pokeNbr = document.getElementById("pokeNombre");

}