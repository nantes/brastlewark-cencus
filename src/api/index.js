import axios from 'axios';
import BASE_API_URL from './config';

const fetch = () => axios.get(BASE_API_URL)
  .then(({ data }) => data);

export default fetch;
