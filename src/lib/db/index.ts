import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

// Database connection
const connectionString = import.meta.env.DATABASE_URL;
const client = postgres(connectionString);
export const db = drizzle(client, { schema });