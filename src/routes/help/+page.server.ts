import type { PageServerLoad, Actions } from './$types';

export const load = (async ( { cookies } ) => {
    
    const biscuit = cookies.get('biscuit');

    return {
        biscuit
    };

}) satisfies PageServerLoad;

export const actions = {
    
    rename: async ({ request, cookies }) => {
        const formData = await request.formData();
        const biscuit = formData.get('biscuit') as string;

        cookies.set('biscuit', biscuit);
    },
    capitalize: async ({ cookies }) => {
        const biscuit = cookies.get('biscuit') as string;
        cookies.set('biscuit', biscuit?.toUpperCase());
    },
} satisfies Actions;