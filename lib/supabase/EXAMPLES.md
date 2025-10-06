# Supabase Usage Examples

## Authentication

```ts
import { signUp, signIn, signOut, getUser } from '@/lib/supabase/auth';

// Sign up
const { data, error } = await signUp('user@email.com', 'password');

// Sign in
const { data, error } = await signIn('user@email.com', 'password');

// Get current user
const { user, error } = await getUser();

// Sign out
const { error } = await signOut();
```

---

## Storage

```ts
import { uploadFile, downloadFile, listFiles, deleteFile } from '@/lib/supabase/storage';

// Upload
const { data, error } = await uploadFile('avatars', 'user1/avatar.png', file);

// Download
const { data, error } = await downloadFile('avatars', 'user1/avatar.png');

// List
const { data, error } = await listFiles('avatars');

// Delete
const { data, error } = await deleteFile('avatars', 'user1/avatar.png');
```

---

## Database

```ts
import { selectFromTable, insertIntoTable, updateTable, deleteFromTable } from '@/lib/supabase/database';

// Select
const { data, error } = await selectFromTable('profiles');

// Insert
const { data, error } = await insertIntoTable('profiles', { name: 'John' });

// Update
const { data, error } = await updateTable('profiles', { name: 'Jane' }, { id: 1 });

// Delete
const { data, error } = await deleteFromTable('profiles', { id: 1 });
```

---

## Notes
- All functions return `{ data, error }` (or `{ user, error }` for `getUser`).
- For advanced queries, use the Supabase client directly from `utils/supabase/client.ts`.
- See [Supabase JS docs](https://supabase.com/docs/reference/javascript/introduction) for more.
