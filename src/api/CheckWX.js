import Axios from 'axios';

export default Axios.create({
  baseURL: 'https://api.checkwx.com/',
  headers: {
    'X-API-Key': process.env.REACT_APP_CHECKWX_API_KEY
  }
});
