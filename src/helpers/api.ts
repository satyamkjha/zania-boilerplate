import axios from 'axios';

export const API_URL = 'http://localhost:5100';

const API = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
	xsrfCookieName: 'csrftoken',
	xsrfHeaderName: 'X-CSRFToken',
});

export default API;
