<script lang="ts">

    import AuthCheckMiddleware from "$lib/components/AuthCheckMiddleware.svelte";
    import { user, userData, storage, db } from "$lib/firebase";
    import { doc, updateDoc } from "firebase/firestore";
    import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

    let previewURL: string;
    let uploading = false;
    $: href = `/${$userData?.username}/edit`;

    // set firebase storage rules to allow write if user is logged in
    async function upload(e: any) {
        uploading = true;
        const file = e.target.files[0];
        previewURL = URL.createObjectURL(file);

        const storageRef = ref(storage, `users/${$user.uid}/profile.png`);
        const result = await uploadBytes(storageRef, file);
        const url = await getDownloadURL(result.ref);

        await updateDoc(doc(db, "users", $user!.uid), { photoURL: url });
        uploading = false;
    }

</script>

<AuthCheckMiddleware>
    <h2>Upload a photo, or leave the google default</h2>

    <form class="">

        <div class="">
            <!-- from preview, aready saved, google base we fall back to a static img -->
            <img src={previewURL ?? $userData?.photoURL ?? $user.photoURL ?? "/user.png"}
            alt="photoURL"
            width="200"
            height="200"
            class="mx-auto rounded-xl"
            />
            <label for="photoURL" class="label">
                <span class="">Pick a photo</span>
            </label>
            <!-- rewrite this to button click upload -->
            <input 
                on:change={upload}
                name="photoURL"
                type="file"
                class=""
                accept="image/png, image/jpeg, image/gif, image/webp, image/avif"
            />
            {#if uploading}
                <p>Uploading...</p>
                <progress class="progress progress-info w-56 mt6" />
            {/if}

        </div>

    </form>

    <a {href} class="btn btn-primary">Finish</a>

</AuthCheckMiddleware>
