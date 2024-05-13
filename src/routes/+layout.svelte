<script lang="ts">
	import '../app.postcss';
</script>

<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">

<div class="web-container">
	<div class="pagenav">
		<p class="Corner-Title">Li Yu</p>
	</div>
	
	<slot />
	
</div>



<style>
	.pagenav {
		background-color: #353535;
		height: 10vh;
		width: full;
	}

	.Corner-Title {
		margin: 3rem;
		color: white;
		font-family: Bebas Neue;	
		font-size: 100px;
		position: absolute;
	}

	
</style>
