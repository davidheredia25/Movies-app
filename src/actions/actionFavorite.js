export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
export const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE";

export function addMovieFavorite(movie) {
  return {
    type: ADD_MOVIE_FAVORITE,
    payload: movie
  };
}


export function removeMovieFavorite(imdbID) {
  return {
    type: REMOVE_MOVIE_FAVORITE,
    payload: imdbID    
  };                  
}  