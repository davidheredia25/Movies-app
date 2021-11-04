export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIES_DETAIL = "GET_MOVIES_DETAIL";


export function getMovies(titulo) {
    return function (dispatch) {
        return fetch("http://www.omdbapi.com/?apikey=c1388c79&s=" + titulo)
            .then(response => response.json())  
            .then(json => { 
                dispatch({               
                    type: GET_MOVIES,    
                    payload: json       
                });                      
            });                          
    };
}

export function getMovieDetail(imdbID) {
    return function (dispatch) {    
        return fetch(`http://www.omdbapi.com/?apikey=c1388c79&i=${imdbID}`)
            .then(response => response.json())  
            .then(json => {  
                dispatch({    
                    type: GET_MOVIES_DETAIL,   
                    payload: json     
                });
            });
    }; 
}