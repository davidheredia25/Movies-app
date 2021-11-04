import { ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE } from '../actions/actionFavorite';


const initialState = {
    moviesFavourites: [],
};

function favoriteReducer(state = initialState, action) {
    if (action.type === ADD_MOVIE_FAVORITE) {   
        return {                                
            ...state,  
            moviesFavourites: state.moviesFavourites.concat(action.payload) 
        }
    }

    if (action.type === REMOVE_MOVIE_FAVORITE) {
        return {
            ...state,
            moviesFavourites: state.moviesFavourites.filter((movie) => movie.imdbID !== action.payload)
        }
    }
    return state;
}

export default favoriteReducer;