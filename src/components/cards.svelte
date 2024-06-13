<!-- Card.svelte -->
<!-- a card element that i used to show things that were in the same catagory -->
<script lang="ts">
    import { onMount } from 'svelte';

    // the title
    export let title = "";
    // article/paragraph
    export let content = "";
    // images
    export let imgSrc = "";

    export let contentBg = false;

    export let isUserMobile = false

    let windowWidth = window.innerWidth;
    let isThereTitle = false;
    let isThereContent = false;
    let showCard = false;

    if (content !== "") {
        isThereContent = true;
    }

    if (title !== "") {
        isThereTitle = true;
    }

    if(window.innerWidth < 1200) {
        isUserMobile = true;
    }
</script>
  
<div class="card bg-initial p-4 flex flex-col justify-center items-center">
    <header>
        <img src={imgSrc} alt="">
    </header>
    
    {#if isThereTitle}
    <div class="p-4 space-y-4">
        <h3 class="flex justify-center font-bold">{title}</h3>
        {#if isThereContent}
            <article> 
                {#if contentBg} 
                    <p class="cardBG">{content}</p>
                {:else}
                    <p>{content}</p>
                {/if}
            </article>
        {/if}
    </div>
    {/if}
</div>

<style>
    button {
        width: auto;
        height: auto;
        background: #303030;
        padding: .2rem;
        border-radius: .25rem;
    }

    .cardBG {
        background: #303030;
        border-radius: .75rem;
        padding: 0.5rem;
    }
</style>