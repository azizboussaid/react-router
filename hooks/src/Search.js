import React from "react";
import StarRatingComponent from 'react-star-rating-component';


const Search=({getRate,getWord,rating} )=>{
    const  onStarClick=(nextValue) =>{
        getRate(nextValue);
      }
    return(
<div>
 
<div className="btn-search">
<input type="text" placeholder="Enter Movie Name" className="inputtext" onChange={(e)=>getWord(e.target.value)}/>



<StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={onStarClick}
        />
</div>
</div>
    )
}
export default Search;