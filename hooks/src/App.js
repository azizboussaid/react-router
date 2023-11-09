import React, { useState } from 'react'
import MovieList from './MovieList'
import './App.css'
import Search from './Search'
import AddMovie from './AddMovie'
import Description from './Description';
import { Routes, Route } from "react-router-dom";

const App = () => {
    const [word, setWord] = useState("")
    const [addMovie, setAddmovie] = useState(false);
    const [rating, setRating] = useState(1)
    const [movies, setMovies] = useState([
        //movies
        {
            id: 1,
            title: "Chernobly",
            description: "The events recount the circumstances of the explosion of the Chernobyl nuclear reactor in April 1986 .Chernobyl ou Tchernobyl au Québec est une mini-série",
            posterURL: "https://www.themoviedb.org/t/p/original/4cPTQbF2GL59j2YGeUaBg3yvzJw.jpg",
            rate: 5,
            trailer: "https://youtu.be/s9APLXM9Ei8?si=Q4SVywGnhJst0ig8"

        },
        {
            id: 2,
            title: 'Cosmos',
            description: "An exploration of our discovery of the laws of nature and coordinates in space and time.COSMOS is a contemporary sci-fi mystery followingCOSMOS iCOSMOS is a contemporary ",
            posterURL: "http://fanaru.com/cosmos-a-spacetime-odyssey/image/34416-cosmos-a-spacetime-odyssey-cosmos-a-spacetime-odyssey-poster.jpg",
            rate: 5,
            trailer: "https://youtu.be/4j-PzuxcKcc?si=4GXU5wbW8V7udi9P",
        },

        {
            id: 3,
            title: 'MR. ROBOT',
            description: "The series tells the story of a young man who suffers from social anxiety disorder. Mr. Robot est une série télévisée américaine en 45 épisodes d'environ 45 minutes ",
            posterURL: "https://m.media-amazon.com/images/M/MV5BMzgxMmQxZjQtNDdmMC00MjRlLTk1MDEtZDcwNTdmOTg0YzA2XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_FMjpg_UX1000_.jpg",
            rate: 4,
            trailer: "https://youtu.be/N6HGuJC--rk?si=JXNvpybGZVcU41Iy"

        },

        {
            id: 4,
            title: 'Planet Earth',
            description: "Emmy Award-winning, 11 episodes, five years in the making, the most expensive nature documentary series ever commissioned by the BBC, ",
            posterURL: "https://images07.kaleidescape.com/transformed/covers/1134x1624s/385/38562630.jpg",
            rate: 3,
            trailer: "https://youtu.be/c8aFcHFu8QM?si=beTazUM6aC2_s3S_"
        },
        {
            id: 5,
            title: 'Prison Break',
            description: "An innocent man is imprisoned and sentenced to death, and his only hope now is in his younger brother, who commits a crime in order to send himself to prison .",
            posterURL: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/715cf83eecae70af83c4c354a341363cf9177a7940d1893cdba2ce8c7ab29aa4._RI_V_TTW_.jpg",
            rate: 2,
            trailer: "https://youtu.be/AL9zLctDJaU?si=HKotEOYlEOdDGpXj"
        },
        {
            id: 6,
            title: 'Roman Empire',
            description: "Chronicles some of the most famous leaders of the Roman Civilization.Roman Empire est une série américano-canadienne, mélangeant documentaire ",
            posterURL: "https://static.cinemagia.ro/img/resize/db/movie/12/53/359/roman-empire-661568l-600x0-w-951f7943.jpg",
            rate: 5,
            trailer: "https://youtu.be/aOOKeYQs4w0?si=v1CJDvQmvAlcozRC"
        }])
    //searchmovies

    const getWord = (key) => {
        setWord(key)
    }
    const getRate = (rate) => {
        setRating(rate)
    }
    //addmovies
    const handleAddMovieClick = () => {
        setAddmovie(true);
    }
    const addMovies = (newMovies) => {
        setMovies([...movies, newMovies]);
        setAddmovie(false);
    }
    return (
        <div className='back'>
            <h1 className='kk'>Netflix</h1>
            
                <Search getWord={getWord} getRate={getRate} />
                <Routes>
                     {/* SHOW THIS TWO COMPONENTS IF WE ARE IN THE ROOT PATH */}
                    <Route path='/' element={<><MovieList movie={movies.filter((movie) => movie.rate >= rating && movie.title.toLowerCase().includes(word.trim().toLowerCase()))} />
                        <AddMovie addMovies={addMovies} /></>
                    } />
                     {/*  SHOW THIS COMPONENT IF WE ARE IN : /:id  */}
                    <Route path="/trailer/:id" element={<Description list={movies} />} />
                </Routes>

            </div>
        
    );
}

export default App;
