import { defineMiddleware } from 'astro:middleware';
import { auth } from './lib/auth';

export const onRequest = defineMiddleware(async (context, next) => {
  const session = await auth.validateRequest(context.request);
  
  if (!session && context.url.pathname.startsWith('/dashboard')) {
    return context.redirect('/login');
  }
  
  const response = await next();
  return response;
});