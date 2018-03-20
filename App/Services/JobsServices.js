import axios from 'axios';

export default {
  getJobs () {
    return axios.get('https://earnster-api-staging.herokuapp.com/jobs')
  },
  removeJob (job_id) {
    axios
      .delete('https://earnster-api-staging.herokuapp.com/job/'+job_id)
      .then(response => {
        return getJobs();
      })
      .catch(e => {
        return e
    })
  }
}