import axios from 'axios';

const httpService = axios.create({
  baseURL: 'https://api.tvmaze.com/singlesearch/shows',
  headers: {
    // 'Access-Control-Allow-Origin': '*',
  },
});

export default httpService;
