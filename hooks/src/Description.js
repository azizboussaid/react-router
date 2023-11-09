import "./App.css";
import {useParams,Link} from "react-router-dom";


export default function Description({list}) {
const {id} = useParams()
const foundMovie = list.find((el)=> el.id === +id)

    console.log(list.length);
    let params = useParams();
    return (
        
        <div className="desc">
            <h1>{foundMovie.title}</h1>
            <iframe width="560" height="315" src={foundMovie.trailer}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
                 <p>{foundMovie.description}</p>
                <Link to='/'><button>Back home</button></Link>
        </div>
    )
}