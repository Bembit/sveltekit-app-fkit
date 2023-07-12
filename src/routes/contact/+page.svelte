<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<h1>Contact</h1>
<p>initial ssr then client side fetching</p>
{#each data.products as product}
    <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
    </div>
{/each}