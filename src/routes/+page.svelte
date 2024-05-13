<script lang="ts">
	import { fly,fade } from 'svelte/transition';
	import { quintIn } from 'svelte/easing';

	let stepper = 1;
	let temp = 0;
	function logger(message: number) {
		console.log(`Logger got called with: ${message}`);

		stepper += 1;

		if (stepper == 5) {
			stepper = 0;
		}
	}

		const seconds = 5;

	// call function every 5 seconds
	setInterval(() => {
		logger(stepper);
	}, seconds * 1000);
</script>

<div class="page-container">
	{#if stepper == 0 }
		<img src="/Carousel/_IMG1464.jpg" alt="" transition:fade={ { delay: 500, duration: 500 , easing: quintIn}} />
	{:else if stepper == 1}
		<img src="/Carousel/_IMG5136.jpg" alt="" transition:fade={ { delay: 500, duration: 500 , easing: quintIn}} />
	{:else if stepper == 2}
		<img src="/Carousel/_IMG2616.jpg" alt="" transition:fade={ { delay: 500, duration: 500 , easing: quintIn}} />
	{:else if stepper == 3}
		<img src="/Carousel/_IMG4685.jpg" alt="" transition:fade={ { delay: 500, duration: 500 , easing: quintIn}} />
	{:else if stepper == 4}
		<img src="/Carousel/ContactSheet-001.png" alt="" transition:fade={ { delay: 500, duration: 500 , easing: quintIn}} />
	{/if}
</div>

<style>
	img {
		position:sticky;
	}

	.page-container{
		background-color: #353535;
		height: 90vh;
		width: 100vw;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	/* img {
		display: flex;
		align-items: center;
		justify-content: center;
	} */
</style>