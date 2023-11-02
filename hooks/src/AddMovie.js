import React,{useState } from "react";
import "./addmovie.css"



const AddMovies=({addMovies})=>{
    const[newMovie,setnewmovie]= useState({title: "",description:"",posterURL:"",rate:""})
const handleInputchange = (e)=>{
const {name,value}= e.target;
    setnewmovie({...newMovie,[name]: value});
}
const handlesubmit = (e)=> {
    e.preventDefault();
    addMovies(newMovie);
    setnewmovie({ title:"", description:"", posterURL:"", rate:""})
}
    return (
        <div  className="box2">
        <form onSubmit={handlesubmit}>
        <div className="form">
            <div className="title">Add New Movie</div>
            <div className="subtitle">From Here</div>
            <div className="input-container ic1">
            <input id="firstname" className="input" type="text" name="title"  value={newMovie.title} onChange={handleInputchange} required/>
            <div className="cut" ></div>
              <label htmlFor="firstname" className="placeholder">
                Title
              </label> </div>
              <div className="input-container ic1">
            <input id="firstname" className="input" type="text" name="description"  value={newMovie.description} onChange={handleInputchange} required/>
            <div className="cut" ></div>
              <label htmlFor="firstname" className="placeholder">
              description
              </label> </div>
              <div className="input-container ic1">
            <input id="firstname" className="input" type="text" name="posterURL"  value={newMovie.posterURL} onChange={handleInputchange} required/>
            <div className="cut" ></div>
              <label htmlFor="firstname" className="placeholder">
              posterURL
              </label> </div>
              <div className="input-container ic1">
            <input id="firstname" className="input" type="number" name="rate"  value={newMovie.rate} onChange={handleInputchange} required/>
            <div className="cut" ></div>
              <label htmlFor="firstname" className="placeholder">
              rate
              </label> </div>
    
            <button type="text" className="submit">
              submit
            </button>
            </div>
            
            </form>
            </div>
      
        
          
          
    );
    } 
export default AddMovies