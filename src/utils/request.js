//Exportación de ULR's de API https://api.icndb.com
export const dataFetch = {
    fetchRandom: {
        string: "Chistes random",
        url: "http://api.icndb.com/jokes/random"
    },
    fetchNerdy: {
        string: "Chistes nerd",
        url: "http://api.icndb.com/jokes/random?limitTo=[nerdy]"
    },
    fetchExplicit: {
        string: "Chistes explícitos",
        url: "http://api.icndb.com/jokes/random?limitTo=[explicit]"
    },
}