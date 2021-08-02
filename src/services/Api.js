import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
const KEY = process.env.REACT_APP_API_KEY;

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(`movie/popular?api_key=${KEY}`);
    return response.data.results;
  } catch (error) {
    throw new Error(error);
  }
};

export const searchMovie = async ({ query = "", currentPage = 1, pageSize = 5 }) => {
  try {
    const response = await axios.get(
      `search/movie?query=${query}&api_key=${KEY}&language=en-US&page=${currentPage}&pageSize=${pageSize}&include_adult=false`
    );
    return response.data.results;
  } catch (error) {
    throw new Error(error);
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`movie/${movieId}?api_key=${KEY}`);
    console.log(`response`, response);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getMovieCast = async (movieId) => {
  try {
    const response = await axios.get(`movie/${movieId}/credits?api_key=${KEY}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getMovieReviews = async (movieId) => {
  try {
    const response = await axios.get(`movie/${movieId}/reviews?api_key=${KEY}`);
    return response.data.results;
  } catch (error) {
    throw new Error(error);
  }
};
