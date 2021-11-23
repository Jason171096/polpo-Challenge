//Exportación de ULR's de API https://api.icndb.com
const dataFetch = {
    fetchRandom: {
        title: "Random Quick Joke",
        url: "http://api.icndb.com/jokes/random"
    },
    fetchNerdy: {
        title: "Nerdy Joke",
        url: "http://api.icndb.com/jokes/random?limitTo=[nerdy]"
    },
    fetchExplicit: {
        title: "Explicit Joke",
        url: "http://api.icndb.com/jokes/random?limitTo=[explicit]"
    },
}

export default dataFetch;