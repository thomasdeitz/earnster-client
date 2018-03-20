<template lang="pug">
    div
      h1 Welcome!
      ul
        li(v-for="job in jobs")
          span(@click="removeJob(job.job_id)") {{ job.job_description }} - 
            strong ${{ job.job_value }}.00
      ul
        li(v-for="worker in workers")
          span {{ worker.worker_name }}
        
</template>

<script>
  import axios from 'axios';
  import JobsServices from '../Services/JobsServices';
  
  export default {
    name: 'Home',
    data() {
      return {
        errors: [],
        jobs: [],
        workers: []
      }
    },
    methods: {
      getJobs () {
        axios
          .get('https://earnster-api-staging.herokuapp.com/jobs')
          .then(response => {
            this.jobs = response.data;
          })
          .catch(e => {
            this.errors.push(e)
          })
      },
      removeJob (job_id) {
        axios
          .delete('https://earnster-api-staging.herokuapp.com/job/'+job_id)
          .then(response => {
            this.getJobs();
          })
          .catch(e => {
            console.log(e);
            this.errors.push(e)
        })
      },
      getWorkers () {
        axios
          .get('https://earnster-api-staging.herokuapp.com/workers')
          .then(response => {
            this.workers = response.data;
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    },
    created() {
      
      JobsServices
        .getJobs()
        .then(jobs => { this.jobs = jobs.data})
        .catch(e => { this.errors = e});
      this.getWorkers();
    }
      
  }
</script>

<style lang="sass" scoped>
  h1, h2, h3, h4
    color: teal;
  * 
    color: white;
  ul li
    cursor: pointer;
</style>