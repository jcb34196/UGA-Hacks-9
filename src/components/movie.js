import React from 'react';
import './movie.css';

const Movie = props => {
    return (
        <li key={props.id} className="movie-item">
            <iframe width="560" height="315" src={props.iframe} title="Youtube Player" frameBorder="0" allowFullScreen/>
            <div className='movie-info'>
                <h2>{props.mtitle}</h2>
                <h3>{props.time} minutes</h3>
                <h3>{props.genre}</h3>
            </div>
        </li>
    );
};
export default Movie;