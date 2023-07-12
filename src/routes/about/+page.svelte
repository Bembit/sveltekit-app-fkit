<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<h1>About</h1>
<p>always server side render</p>
{#each data.products as product}
    <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
    </div>
{/each}