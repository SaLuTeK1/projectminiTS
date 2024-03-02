const baseURL = 'https://api.themoviedb.org/3'

const imageUrl = 'https://image.tmdb.org/t/p/w500'

const movie = '/movie'
const discover = '/discover'
const genre = '/genre'
const search = '/search'

const urls = {
    movie:{
        base:`${discover}${movie}`,
        byId:(id:number)=>`${movie}/${id}`,
        byGenre:(genrId:number)=>`${discover}${movie}?with_genres=${genrId}`
    },
    genre:{
        base:`${genre}${movie}/list`
    },
    search:{
        byWord:(word:string)=>`${search}${movie}?query=${word}`
    }
}

export {baseURL,urls,imageUrl}