import type { PageLoad } from './$types';

export const load = (async () => {
    // initial ssr then client side
    let products = null;
        const res = await fetch("https://fakestoreapi.com/products?limit=3")
        products = await res.json();
        return { products }
    
}) satisfies PageLoad;