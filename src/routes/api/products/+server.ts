import { json } from '@sveltejs/kit';
import type { RequestEvent, RequestHandler } from './$types';

export const GET: RequestHandler = async (e: RequestEvent) => {
    e.cookies;
    e.params;
    e.request.body;
    // fetch from backend, inherits client headers
    e.fetch('someurl')
    return new Response();
};

export const POST: RequestHandler = async (e: RequestEvent) => {
    return json({ message: 'Hello world'});
}

