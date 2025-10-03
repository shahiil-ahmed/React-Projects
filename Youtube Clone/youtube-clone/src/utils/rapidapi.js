const API_KEY=import.meta.env.VITE_YOUTUBE_API_KEY;
const options = {
	method: 'GET',
	hostname: 'youtube138.p.rapidapi.com',
	port: null,
	path: '/auto-complete/?q=desp&hl=en&gl=US',
	headers: {
		'x-rapidapi-key': '',
		'x-rapidapi-host': 'youtube138.p.rapidapi.com'
	}
};