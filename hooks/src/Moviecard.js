import StarRatingComponent from "react-star-rating-component";
import "./moviecard.css";
import React from 'react'

const Moviecard = ({movie}) => {
  return (
    <div className="box">
  <div className="container">
    <div className="cellphone-container">
      <div className="movie">
        <div className="movie-img"   />
    
        <div className="text-movie-cont">
          <div className="mr-grid">
            <div className="col1">
               
              <h1>{movie.title},</h1>
              <ul className="movie-gen">
                <li>PG-13 /</li>
                <li>2h 49min /</li>
                <StarRatingComponent 
          name="rate1" 
          starCount={(5)}
          value={movie.rate}
        />
              </ul>
            </div>
          </div>
          <div className="mr-grid summary-row">
            <div className="col2">
              <h5>SUMMARY</h5>
            </div>
          </div>
          <div className="mr-grid">
            <div className="col1">
              <p className="movie-description">
                {movie.description}
              </p>
            </div>
          </div>
          <div className="mr-grid actors-row">
            <div className="col1">
              <p className="movie-actors">
                
              </p>
            </div>
          </div>
          <div className="mr-grid action-row">
            <div className="col2">
              
              <img src={movie.posterURL} className="movie-img"  /><br/>
              <div className="watch-btn">
                
                <h3>
                 WATCH TRAILER
                  
                </h3>
                
              </div>
            </div>
          
             
            
          </div>
        </div>
      </div>
    </div>
    </div>
  
    
  
</div>

  )
}

export default Moviecard

