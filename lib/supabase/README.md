# Supabase Integration Docs

This folder provides utility functions for authentication, storage, and database queries using Supabase in your Next.js app.

## Setup

1. Ensure your `.env.local` contains:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```
2. The Supabase client is initialized in `utils/supabase/client.ts`.

## Authentication (`auth.ts`)
- `signUp(email, password)`: Register a new user.
- `signIn(email, password)`: Log in a user.
- `signOut()`: Log out the current user.
- `getUser()`: Get the current authenticated user.

## Storage (`storage.ts`)
- `uploadFile(bucket, path, file)`: Upload a file to a bucket.
- `downloadFile(bucket, path)`: Download a file from a bucket.
- `listFiles(bucket, path?)`: List files in a bucket (optionally in a folder).
- `deleteFile(bucket, path)`: Delete a file from a bucket.

## Database (`database.ts`)
- `selectFromTable(table, columns?)`: Select rows from a table.
- `insertIntoTable(table, values)`: Insert a row into a table.
- `updateTable(table, values, match)`: Update rows in a table.
- `deleteFromTable(table, match)`: Delete rows from a table.

## Usage Example

```ts
import { signUp, signIn, getUser } from '@/lib/supabase/auth';
import { uploadFile, listFiles } from '@/lib/supabase/storage';
import { selectFromTable, insertIntoTable } from '@/lib/supabase/database';

// Auth
await signUp('test@email.com', 'password');
const { user } = await getUser();

// Storage
await uploadFile('avatars', 'user1/avatar.png', file);
const { data: files } = await listFiles('avatars');

// Database
const { data: rows } = await selectFromTable('profiles');
await insertIntoTable('profiles', { name: 'John' });
```

## Notes
- All functions return `{ data, error }`.
- For advanced queries, use the Supabase client directly from `utils/supabase/client.ts`.

---

For more, see [Supabase JS docs](https://supabase.com/docs/reference/javascript/introduction).
