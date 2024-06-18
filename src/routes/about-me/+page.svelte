<script lang="ts">
    // import type { PageData } from './$types';
    
    // export let data: PageData;
</script>

<div class="pageBG">
    <div class="textHolder">
        <h1>Phil Jiang</h1>
        <p>yap here</p>
    </div>
</div>

<style>
    .pageBG {
        background-image: url("_IMG4739.jpg");
        height: 90vh;
        width: 100vw;
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .textHolder {
        display: grid;
        place-items: center;
        width: 77vw;
        height: 60vh;
        background-color: #353535;
        border-radius: 2rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Adding shadow */
        color: white; /* Text color for better contrast */
        text-align: center; /* Center text alignment */
    }

    h1 {
        font-size: 5rem;
        margin: 0; /* Remove default margin */
    }

    p {
        font-size: 1.5rem;
        margin: 0; /* Remove default margin */
    }
</style>
