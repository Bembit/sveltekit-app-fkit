<script lang="ts">
    import UserLink from '$lib/components/UserLink.svelte';
    // import { userData } from '$lib/firebase';
    
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<svelte:head>

    <!-- if I refresh, the app has no idea who the user is -->
    <!-- internal server error, aka I fucked up -->

    <!-- null coalescence ? cause of SSR and auth?  -->

    <!-- there are a bunch of meta tags -->
    <title>Stuff of @{data.username}</title>
    <meta name="description" content="{data.bio}">

</svelte:head>

<main class="text-center mx-auto mt-8">

    <div class="bg-neutral">
    <div class="w-48 h-48 mx-auto my-8 rounded-full" style="
      background-image: url({data.photoURL ?? "/user.png"});
      background-position: center center;
      background-size: 300px auto;
      width: 250px;
      height: 250px;
    ">
    </div>

    <h1 class="text-7xl mb-8">
      @{data.username}
    </h1>
    </div>
    <!-- <p>/login/edit renders the links</p>
    <p>does it consider /login as a [user] ? /[login]/edit</p>
    <br>
    <p>what if I register a user named login</p>
    <p>original error was /Bence/bio that kept putting me to the login screen</p>
    <p>can be caching, or string routing </p>
    <p>done: add firebase-admin</p>
    <p>solved: yeah cause I reverted back to client side branch - missing dotenv and firebase config still I can register and add stuff to the db?</p>
    <p>cookie spam fixed</p> -->

    <a href="/login/photo" class="btn btn-primary">change photo</a>
    <a href="{data.username}/bio" class="btn btn-secondary">change bio</a>

  
    <p class="text-xl my-8">Bio: {data.bio ?? "no bio yet..."}</p>

    <!-- {$userData.username} broke it, so it's either data.username or $userData?.username -->
    <!-- look into this google auth refresh userdata -->
    <a href="{data.username}/edit" class="btn btn-primary">add / edit</a>

    <ul class="list-none flex-col mx-auto w-full text-center">
      {#each data.links as item}
      <li>
      <!-- debug auto consol logs the data -->
        <UserLink {...item} />
      </li>
      {/each}
    </ul>
  
</main>