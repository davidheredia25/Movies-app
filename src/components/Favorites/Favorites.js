import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import { removeMovieFavorite } from '../../actions/actionFavorite';
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div className="container">
        <h2 class="display-4">favorite movies</h2>
        <div className="card-conteiner">
          {
            this.props.favoritesMovies.map((movie) => {
              return (
                <div className="card" key={movie.imdbID}>
                  <NavLink className="link" to={`/movie/${movie.imdbID}`}>
                    <h1 className="title">{movie.Title}</h1>
                    <img className="Image" src={movie.Poster} alt="Poster de pelicula" />
                  </NavLink>
                  <button className="button" onClick={() => { this.props.removeFavorite(movie.imdbID) }}>Delete</button>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favoritesMovies: state.favoriteReducer.moviesFavourites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeFavorite: (id) => dispatch(removeMovieFavorite(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);

