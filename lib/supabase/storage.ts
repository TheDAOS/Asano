import { createClient } from '../../utils/supabase/client';

// Upload file to a bucket
export async function uploadFile(bucket: string, path: string, file: File) {
  const supabase = createClient();
  const { data, error } = await supabase.storage.from(bucket).upload(path, file);
  return { data, error };
}

// Download file from a bucket
export async function downloadFile(bucket: string, path: string) {
  const supabase = createClient();
  const { data, error } = await supabase.storage.from(bucket).download(path);
  return { data, error };
}

// List files in a bucket
export async function listFiles(bucket: string, path: string = '') {
  const supabase = createClient();
  const { data, error } = await supabase.storage.from(bucket).list(path);
  return { data, error };
}

// Delete file from a bucket
export async function deleteFile(bucket: string, path: string) {
  const supabase = createClient();
  const { data, error } = await supabase.storage.from(bucket).remove([path]);
  return { data, error };
}
