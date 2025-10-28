import { createClient } from '../../utils/supabase/client';

// Generic select from table
export async function selectFromTable<T = any>(table: string, columns: string = '*') {
  const supabase = createClient();
  const { data, error } = await supabase.from(table).select(columns) as { data: T[] | null, error: any };
  return { data, error };
}

// Insert into table
export async function insertIntoTable<T = any>(table: string, values: T) {
  const supabase = createClient();
  const { data, error } = await supabase.from(table).insert(values).select() as { data: T[] | null, error: any };
  return { data, error };
}

// Update table
export async function updateTable<T = any>(table: string, values: Partial<T>, match: Partial<T>) {
  const supabase = createClient();
  const { data, error } = await supabase.from(table).update(values).match(match).select() as { data: T[] | null, error: any };
  return { data, error };
}

// Delete from table
export async function deleteFromTable<T = any>(table: string, match: Partial<T>) {
  const supabase = createClient();
  const { data, error } = await supabase.from(table).delete().match(match).select() as { data: T[] | null, error: any };
  return { data, error };
}
