import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/actionMovie';
import './Movie.css';


class Movie extends React.Component {

    componentDidMount() {
        const movieId = this.props.match.params.id;
        this.props.getMovieDetail(movieId)
    }

    render() {
        return (
            <div className="container-superior">
                <h1 class="display-4">Movie details</h1>
                <div className="container-movie">
                    <div>
                        <img className="Image-movie" src={this.props.movie.Poster} alt={`poster movie ${this.props.movie.Title}`} />
                    </div>
                    <div className="container-info">

                        <h2 className="subtitulo"> {this.props.movie.Title} </h2>
                        <h5 className="h5">DIRECTOR : {this.props.movie.Director} </h5>
                        <h5 className="h5"> YEAR: {this.props.movie.Year} </h5>
                        <h5 className="h5">RELEASED : {this.props.movie.Released} </h5>
                        <h5 className="h5">TIME: {this.props.movie.Runtime} </h5>
                        <h5 className="h5">GENRE: {this.props.movie.Genre}  </h5>
                        <h5 className="h5">ACTORS: {this.props.movie.Actors} </h5>
                        <p className="texto"> {this.props.movie.Plot}</p>

                    </div>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movie: state.movieReducer.movieDetail
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getMovieDetail: (id) => dispatch(getMovieDetail(id))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Movie);
