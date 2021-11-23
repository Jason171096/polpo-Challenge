//Exportación de ULR's de API https://api.icndb.com
const dataFetch = {
    fetchRandom: {
        index: 0,
        title: "Random Quick Joke",
        url: "http://api.icndb.com/jokes/random"
    },
    fetchNerdy: {
        index: 1,
        title: "Nerdy Joke",
        url: "http://api.icndb.com/jokes/random?limitTo=[nerdy]"
    },
    fetchExplicit: {
        index: 2,
        title: "Explicit Joke",
        url: "http://api.icndb.com/jokes/random?limitTo=[explicit]"
    },
}

export default dataFetch;