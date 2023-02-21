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
	return resp.data.results;
	// resp.data.results - array of objects
};


export const fetchTrendingMovies = async () => {
	const resp = await axios.get('trending/movie/day', {
		params: {
			api_key: API_KEY,
		}
	});
	return resp.data.results;
	// resp.data.results - array of objects
};

export const fetchMovieDetails = async (id) => {
	const resp = await axios.get(`movie/${id}`, {
		params: {
			api_key: API_KEY,
		}
	});
	return resp.data;
	// resp.data - object
};

export const fetchMovieReviews = async (movieId) => {
	const resp = await axios.get(`movie/${movieId}/reviews`, {
		params: {
			api_key: API_KEY,
		}
	});
	return resp.data.results;
	// resp.data.results - array of objects
};


