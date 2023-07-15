<script lang="ts">

    import { auth } from "$lib/firebase";

    import { user } from "$lib/firebase";

    import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

    async function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        // added custom param to always allow to select account
        provider.setCustomParameters({ prompt: "select_account" });
        const user = await signInWithPopup(auth, provider);
        console.log(user);
    }

</script>

<h2>Sign in</h2>

{#if $user}

    <h2 class="card-title">Welcome, {$user.displayName}</h2>
    <button class="btn btn-danger" on:click={() => signOut(auth)}>Sign out</button>
    <p>or go and</p>
    <a href="/login/username" class="btn">Choose username</a>

{:else}

<!-- signinwithgoogle will remember the last google account and autosign in -->
<!-- this should be ok, except if I delib logout, maybe to change users -->
<button class="btn" on:click={signInWithGoogle}>Sign in with google</button>

{/if}