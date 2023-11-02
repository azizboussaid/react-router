import "./movielist.css";
import MovieCard from "../src/Moviecard";


function MovieList({movie}){
    return(
        <div className="MovieList">{
        movie.map( (movie)=>(
            <MovieCard movie={movie} />
        ))
        }
        </div>
    );
}

export default MovieList;