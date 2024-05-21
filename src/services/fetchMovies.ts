import { type ApiMoviesType } from "../types/api";

const getMovieperId = async (id) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGYyOTBiNTEzZmI1ZTA5MjVhZjMzNGNmYWQyZjQ5YSIsInN1YiI6IjY2NDdkZTA3MzlhNjgxNDQ2Yjc4N2ZhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.slmHBszq73_fpGn7SxoV2oTemcb4EhqLzb8mYsTAQik'
    }
  };

  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=es-US`, options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return null; 
  }
};


const getAllMovies = (word): Promise<ApiMoviesType[]> => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGYyOTBiNTEzZmI1ZTA5MjVhZjMzNGNmYWQyZjQ5YSIsInN1YiI6IjY2NDdkZTA3MzlhNjgxNDQ2Yjc4N2ZhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.slmHBszq73_fpGn7SxoV2oTemcb4EhqLzb8mYsTAQik'
    }
  };


  const URL_API = 'https://api.themoviedb.org/3'
  let URL_FETCH = word ? `${URL_API}/search/keyword?query=${word}&page=1`  : `${URL_API}/discover/movie?include_adult=false&include_video=false&language=es-US&page=3&sort_by=popularity.desc`

  return fetch(URL_FETCH, options)
    .then(response => response.json())
    .then(response => {
      return response.results as ApiMoviesType[]; 
    })
    .catch(err => {
      console.error(err);
      throw new Error('Failed to fetch movies');
    });
};

/* const getMovieSearch = async (word) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGYyOTBiNTEzZmI1ZTA5MjVhZjMzNGNmYWQyZjQ5YSIsInN1YiI6IjY2NDdkZTA3MzlhNjgxNDQ2Yjc4N2ZhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.slmHBszq73_fpGn7SxoV2oTemcb4EhqLzb8mYsTAQik'
    },
  };


  const URL_API = 'https://api.themoviedb.org/3'

  try {
    const response = await fetch(`${URL_API}/search/keyword?query=${word}&page=1`, options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return null; 
  }
};
 */


export { getAllMovies, getMovieperId }
