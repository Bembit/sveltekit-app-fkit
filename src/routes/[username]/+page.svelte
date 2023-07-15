<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<svelte:head>

    <!-- there are a bunch of meta tags -->
    <title>@{data.username} Links</title>
    <meta name="description" content="{data.bio}">

</svelte:head>

<main class="text-center mx-auto mt-8">

    <h1 class="text-7xl text-purple-500">
      @{data.username}
    </h1>
  
    <img
      src={data.photoURL ?? "/user.png"}
      alt="photoURL"
      width="256"
      class="mx-auto my-8 rounded-xl"
    />
  
    <p class="text-xl my-8">{data.bio ?? "no bio yet..."}</p>
    <ul class="list-none">
      {#each data.links as item}
      <!-- debug auto consol logs the data -->
        {@debug item}
      {/each}
    </ul>
  
  </main>