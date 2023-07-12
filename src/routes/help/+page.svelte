<script lang="ts">
    // need enhance from svelte to block full page reload on form submit
    import { enhance } from '$app/forms';
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<form method="post" action="?/rename" use:enhance>

    <h1>{data.biscuit}</h1>

    <input type="text" name="biscuit" />
    <button type="submit">Rename</button>
    <button formaction="?/capitalize">Uppercase</button>

</form>