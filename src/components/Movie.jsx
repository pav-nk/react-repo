import React from 'react';

function Movie(props) {

    const { Poster, Title, Year } = props.data;

    return (
        <div className="movie card blue-grey darken-1">
            <div className="card-image">
                {Poster === 'N/A' ?  <img src={`https://placehold.co/300x450?font=roboto&text=${Title}`} alt='poster'/> : <img src={Poster} alt='poster'/>}
            </div>
            <div className="card-content white-text">
                <span className="card-title">{Title}</span>
                <p>Year: ${Year}</p>
            </div>
            <div className="card-action">
                <a href="/">Link to the movie</a>
            </div>
        </div>
    );
}

export default Movie;