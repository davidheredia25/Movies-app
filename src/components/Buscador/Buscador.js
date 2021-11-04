import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import { addMovieFavorite } from '../../actions/actionFavorite';
import { getMovies } from '../../actions/actionMovie';
import './Buscador.css';



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (

      <div className="container" >
        <h2 class="display-4">Search for movie</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Movie: </label>
            <input className="input"
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button className="button" type="submit">SEARCH</button>
        </form>

        <div className="card-conteiner">
          {
            this.props.movies && this.props.movies.map((movie) => {
              return (

                <div className="card" key={movie.imdbID}>
                  <NavLink className="link" to={`/movie/${movie.imdbID}`}>
                    <h1 className="title">{movie.Title}</h1>
                    <img className="Image" src={movie.Poster} alt="Poster de pelicula" />
                  </NavLink>
                  <button className="button" onClick={() => { this.props.addMovieFavorite(movie) }}>Add to fav</button>
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
    movies: state.movieReducer.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: (movie) => dispatch(addMovieFavorite(movie)),
    getMovies: (title) => dispatch(getMovies(title))

  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);
