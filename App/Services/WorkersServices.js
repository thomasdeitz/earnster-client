import axios from 'axios';

export default {
  getWorkers: (this) => {
    console.log('getum');
    axios
      .get('https://earnster-api-staging.herokuapp.com/workers')
      .then(response => {
        // JSON responses are automatically parsed.
        this.workers = response.data;
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
