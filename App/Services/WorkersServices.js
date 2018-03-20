import axios from 'axios';

export default {
  getWorkers () {
    return axios.get('https://earnster-api-staging.herokuapp.com/workers')
  }
}
