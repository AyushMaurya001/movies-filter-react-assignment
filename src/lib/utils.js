import data from "./../constants/movies.json"

export async function searchMovieByFilter(search, filter) {
  
  const fiteredMovie = data.filter((movie) => {
    if (filter==='movietitle'){
      return movie.movietitle.toLowerCase().includes(search);
    } else {
      let dataToFilter = [];
      if (filter==='moviecountries'){
        dataToFilter=movie.moviecountries;
      } else if (filter==='moviegenres'){
        dataToFilter=movie.moviegenres;
      } else if (filter==='movielanguages'){
        dataToFilter=movie.movielanguages;
      } else if (filter==='moviegenres'){
        dataToFilter=movie.moviegenres;
      }
      return dataToFilter.find((val) => {
        return val.toLowerCase().includes(search);
      });
    }
  })
  return fiteredMovie;

}

export async function getMovieDetail(id){

  const movieData = data.filter((movie) => {
    if (movie.movietitle === id) return true;
  });
  console.log(movieData[0]);
  return movieData[0];

}