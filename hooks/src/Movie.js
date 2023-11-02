function add (movie){
    if( movie.title  && movie.description && movie.posterURL ) {
      setList([...list, movie]);
    }
  }
