<script lang="ts">
    // import type { PageData } from './$types'; 

    export let data: PageData;
</script>

<div class="pagecontainer">
    <div class="decoy"></div>

    <div class="flex justify-center align-middle m-1 max-h-full overflow-y-auto">
        <section class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Cards imgSrc="/F5.6.jpg" />

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