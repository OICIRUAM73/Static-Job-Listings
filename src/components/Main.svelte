<script>
  import { onMount } from 'svelte';
  import JobList from './JobList.svelte';
  import Filter from './Filter.svelte';
  let jobList = [];

  onMount(async () => {
    const res = await fetch(`data.json`);
    jobList = await res.json();
	});
</script>


<style>
  main {
    background-color: var(--light-grayish-background);
  }
</style>
<main>
  <Filter />
  <JobList {jobList} />
</main>