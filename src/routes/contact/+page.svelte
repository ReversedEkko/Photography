<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<body>
    <header class="title">Contact</header>

    <h1>don't contact me</h1>
</body>

<style>
    body {
        min-height: 100vh;
        padding: 1rem;
    }

    header {
        display: flex;
        justify-content: center;
        font-size: 5rem;
        padding: 3rem;
    }

    h1 {
        display: flex;
        justify-content: center;
        font-size: 10rem;
        margin: 5rem;
    }
</style>