import React, {useState} from 'react';
import Card from './card';
import Button from './addButton';
import './addMovie.css';

const AddMovie = props => {
const[enteredIframe,setEnteredIframe] = useState('');
const[enteredMtitle,setEnteredMtitle] = useState('');
const[enteredTime,setEnteredTime] = useState('');
const[enteredGenre,setEnteredGenre] = useState('');

const addMovieHandler = event => {
    event.preventDefault();
    const newMovie ={
        id: Math.random().toString,
        mtitle: enteredMtitle,
        time: enteredTime,
        iframe: enteredIframe,
        genre: enteredGenre
    };
    console.log("high");
    //clearing form after click event
    setEnteredMtitle('');
    setEnteredTime('');
    setEnteredIframe('');
    setEnteredGenre('');
    console.log(newMovie); 
    props.onAddMovie(newMovie);
    console.log("creamy")
    
}
return(
        <Card className = "input">
           <form onSubmit={addMovieHandler}>
                <label>Movie Title</label>
                <input
                id="mtitle"
                title="text"
                type="text"
                value ={enteredMtitle}
                onChange={(e)=> {setEnteredMtitle(e.target.value)}}
                />
                <label>Movie Runtime (minutes)</label>
                <input
                id="time"
                type="number"
                title="text"
                value ={enteredTime}
                onChange={(e)=> {setEnteredTime(e.target.value)}}
                />
                <label>Movie Trailer</label>
                <input
                id="iframe"
                type="text"
                title="text"
                value ={enteredIframe}
                onChange={(e)=> {setEnteredIframe(e.target.value)}}
                />
                <label>Movie Genre</label>
                <input
                id="genre"
                type="text"
                title="text"
                value ={enteredGenre}
                onChange={(e)=> {setEnteredGenre(e.target.value)}}
                />
             <Button type="submit">Add Movie</Button>
            </form>
         </Card>
    );
};
export default AddMovie;