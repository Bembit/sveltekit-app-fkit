<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<p>contact hover prefetches the api</p>
<a data-sveltekit-preload-data="hover" href="/contact">Contact</a>
<p>try hover about, will see error cause of ssr if set to hover. now it's reload</p>
<a data-sveltekit-reload href="/about">About</a>
<br>
<a href="/help">Help</a>