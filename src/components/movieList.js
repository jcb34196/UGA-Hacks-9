import React from 'react';
import Card from './card';
import Movie from './movie';
import './movieList.css';
import './movie.css';
import './card.css';

const movieList = (props) => {
   // console.log(props.movies)
    console.log(props.movies.length)
    return(
    <Card className="movie">
        <ul>
        {props.movies.map((movie)=>(
            <Movie
            key={movie.id}
            iframe={movie.iframe}
            mtitle={movie.mtitle}
            time={movie.time}
            genre={movie.genre}
            />
        ))
        }
        </ul>
    </Card>
    );
};
export default movieList;