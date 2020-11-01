<script>
  import { activeFilters } from '../store/store.js';
  import Job from './Job.svelte';

  export let jobList;
  let jobListFiltered;
  const reducer = (acumulator, currentValue) => acumulator || $activeFilters.has(currentValue);

  $: jobList = jobList.map(job => {
      job.isNew = job.new;
      delete job.new;
      return job
    });
  
  $: if($activeFilters.size != 0) {
      jobListFiltered = jobList.filter((job) => {
        return ($activeFilters.has(job.role) || $activeFilters.has(job.level) || job.languages.reduce(reducer, false) || job.tools.reduce(reducer, false));
      });
    } else {
      jobListFiltered = jobList;
    }
</script>

<style>
  .container {
    padding-top: 60px;
    padding-left: 12%;
    padding-right: 12%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media(max-width: 480px) {
    .container {
      padding-top: 45px;
      padding-left: 6%;
      padding-right: 6%;
    }
  }
</style>

<div class="container">
    {#each jobListFiltered as job}
       <Job {...job} />
    {/each}
</div>