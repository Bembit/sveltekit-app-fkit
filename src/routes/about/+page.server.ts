import type { PageServerLoad } from './$types';

export const load = (async () => {
    
    // always server side render

        let products = null;
        const res = await fetch("https://fakestoreapi.com/products?limit=1")
        products = await res.json();
        return { products }
    ;
}) satisfies PageServerLoad;