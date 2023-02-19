import axios from "axios";

const API_KEY = '2390bc0c07f3ecc54a6e60472acdfb3a';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchMovieByName = async (name) => {
	const resp = await axios.get('search/movie', {
		params: {
			api_key: API_KEY,
			query: name
		}
	});
	return resp.results;
	// resp.results - array of objects
};


export const fetchTrendMovies = async () => {
	const resp = await axios.get('trending/movie/day', {
		params: {
			api_key: API_KEY,
		}
	});
	return resp.results;
	// resp.results - array of objects
};

export const fetchMovieDetails = async (movieId) => {
	const resp = await axios.get(`movie/${movieId}`, {
		params: {
			api_key: API_KEY,
		}
	});
	return resp;
	// resp - object
};

export const fetchMovieReviews = async (movieId) => {
	const resp = await axios.get(`movie/${movieId}/reviews`, {
		params: {
			api_key: API_KEY,
		}
	});
	return resp.results;
	// resp.results - array of objects
};


