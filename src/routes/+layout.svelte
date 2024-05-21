<script lang="ts">
	import '../app.postcss';
	import Nav from '../components/nav.svelte';
	import Card from '../components/card.svelte';
</script>

<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">

<div class="web-container">
	<div>
		<Nav />
	</div>

	<slot />

</div>



<style>
	.web-container {
		background-color: #282828;
		min-height: 100vh
	}

	div {
		color: white;
		font-family: 'Bebas Neue', sans-serif; /* Added quotes */
	}
</style>
