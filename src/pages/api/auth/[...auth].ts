import type { APIRoute } from 'astro';
import { auth } from '../../../lib/auth';

export const GET: APIRoute = async ({ request }) => {
  return await auth.handleRequest(request);
};

export const POST: APIRoute = async ({ request }) => {
  return await auth.handleRequest(request);
};