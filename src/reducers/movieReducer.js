import { GET_MOVIES, GET_MOVIES_DETAIL } from '../actions/actionMovie';

const initialState = {
    moviesLoaded: [],
    movieDetail: {}
};

function movieReducer(state = initialState, action) {

    if (action.type === GET_MOVIES) { 
        return {                  
            ...state,        
            moviesLoaded: action.payload.Search 
           
        };
    }

    if (action.type === GET_MOVIES_DETAIL) {
        return {
            ...state,
            movieDetail: action.payload
        };                              
    }
    return state;
}

export default movieReducer;