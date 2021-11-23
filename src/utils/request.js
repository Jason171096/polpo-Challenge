//Exportación de ULR's de API https://api.icndb.com
const dataFetch = {
    fetchRandom: {
        title: "Random Quick Joke",
        url: "https://api.icndb.com/jokes/random"
    },
    fetchNerdy: {
        title: "Nerdy Joke",
        url: "https://api.icndb.com/jokes/random?limitTo=[nerdy]"
    },
    fetchExplicit: {
        title: "Explicit Joke",
        url: "https://api.icndb.com/jokes/random?limitTo=[explicit]"
    },
}

export default dataFetch;