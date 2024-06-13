<script lang="ts">
    import type { LayoutData } from './$types';
    import Cards from '../../components/cards.svelte';

    const numberOfCards = 1;

    let imgSrc = ["F5.6.jpg", "_IMG1462.jpg", "_IMG3753.jpg", "_IMG5051.jpg", "_IMG5135.jpg", "_IMG4803.jpg", "_IMG5190.jpg", "_IMG5195.jpg", "_IMG4341.jpg"];
    let imgSubSrc1 = ["F5.6.jpg"];
    
    let srcFolder = "Showcase";

    // Corrected loop to concatenate srcFolder with each item in imgSrc
    for (let i = 0; i < imgSrc.length; i++) {
        if (imgSrc[i]) {
            imgSrc[i] = srcFolder + "/" + imgSrc[i];
        }
    }

    export let data: LayoutData;
</script>

<div class="pagecontainer">
    <div class="decoy"></div>

    <div class="flex justify-center align-middle m-1 max-h-full overflow-y-auto">
        <section class="grid grid-cols-1 md:grid-cols-3 gap-4 w-2/3">
            {#each imgSrc as src, i}
                <Cards imgSrc={src} />
            {/each}

            <section class="grid grid-cols-1 md:grid-cols-3 gap-4 w-2/3">
                    
            </section>
        </section>
    </div>
</div>


<style>
    .pagecontainer {
        position: relative;
    }

    .decoy {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url("/empty.png");
        background-size: cover;
        background-repeat: no-repeat; 
        z-index: 999;
        min-height: 100vh;
    }
</style>