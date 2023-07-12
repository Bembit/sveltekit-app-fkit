import type { PageLoad } from './$types';

export const load = (async ( {setHeaders} ) => {
    // initial ssr then client side
    let products = null;
        const res = await fetch("https://fakestoreapi.com/products?limit=3")
        products = await res.json();

        // caching
        setHeaders({ "Cache-Control": "max-age=20" });

        return { products }
    
}) satisfies PageLoad;