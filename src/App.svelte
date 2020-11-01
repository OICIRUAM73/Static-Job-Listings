<script>
	import Header from './components/Header.svelte';
	import Main from './components/Main.svelte';
</script>

<Header />
<Main />

<style>

	:global(:root){
   --desaturated-dark-cyan:  hsl(180, 29%, 50%);
   --light-grayish-background:  hsl(180, 52%, 96%);
   --light-grayish-filter:  hsl(180, 31%, 95%);
   --dark-grayish-cyan: hsl(180, 8%, 52%);
   --very-dark-grayish-cyan: hsl(180, 14%, 20%);
	}
	:global(body) {
		font-family: 'Spartan', sans-serif;
		margin: 0;
		padding: 0;
	}

</style>