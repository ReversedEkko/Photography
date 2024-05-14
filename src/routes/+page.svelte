<script lang="ts">
	import { fade } from 'svelte/transition';
	import { quintIn } from 'svelte/easing';
	import { onDestroy } from 'svelte';
  
	let currentImage = 0; // Initialize currentImage to 0
	const images = [
		"/Carousel/_IMG1464.jpg",
		"/Carousel/_IMG5136.jpg",
		"/Carousel/_IMG2616.jpg",
		"/Carousel/_IMG4685.jpg",
		"/Carousel/ContactSheet-001.png"
	];
  
	function changeImage() {
		currentImage = (currentImage + 1) % images.length; // Use modulo to cycle through images
		console.log(`Changing image. Current Image Index: ${currentImage}`);
	}
  
	const seconds = 5;
  
	// call function every 5 seconds
	const interval = setInterval(changeImage, seconds * 1000);
  
	// Clear the interval when the component is destroyed
	onDestroy(() => {
		clearInterval(interval);
	});
</script>
  
<div class="page-container">
	{#each images as image, index}
		<div 
			style="background-image: url({image});"
			class="{currentImage === index ? 'active' : ''}"
			transition:fade={{ duration: 500, easing: quintIn }}>
		</div>
	{/each}
</div>
  
<style>
	.page-container {
		background-color: #353535;
		height: 90vh;
		width: 100vw;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative; /* Needed for absolute positioning */
	}
  
	.page-container > div {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-size: cover;
		background-position: center;
		opacity: 0;
		transition: opacity 0.5s ease;
	}
  
	.page-container > div.active {
		opacity: 1;
	}
</style>
  