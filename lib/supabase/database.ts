/**
 * Supabase Database Operations
 * 
 * This module provides type-safe database operations using Supabase.
 * All functions are generic and can be used with any table/model.
 * 
 * Features:
 * - Type-safe database operations
 * - Consistent error handling
 * - Generic CRUD operations
 * - Proper TypeScript generics
 */

import { createClient } from '../../utils/supabase/client';
import { SupabaseResponse } from '@/utils/type';

/**
 * Select records from a table
 * @param table The table name to select from
 * @param columns The columns to select (default: '*')
 * @returns Promise with the selected data and any error
 */
export async function selectFromTable<T>(
    table: string,
    columns: string = '*'
): Promise<SupabaseResponse<T>> {
    const supabase = createClient();
    return await supabase.from(table).select(columns);
}

/**
 * Insert records into a table
 * @param table The table name to insert into
 * @param values The values to insert
 * @returns Promise with the inserted data and any error
 */
export async function insertIntoTable<T>(
    table: string,
    values: T
): Promise<SupabaseResponse<T>> {
    const supabase = createClient();
    return await supabase.from(table).insert(values).select();
}

/**
 * Update records in a table
 * @param table The table name to update
 * @param values The values to update
 * @param match The conditions to match for the update
 * @returns Promise with the updated data and any error
 */
export async function updateTable<T>(
    table: string,
    values: Partial<T>,
    match: Partial<T>
): Promise<SupabaseResponse<T>> {
    const supabase = createClient();
    return await supabase.from(table).update(values).match(match).select();
}

/**
 * Delete records from a table
 * @param table The table name to delete from
 * @param match The conditions to match for deletion
 * @returns Promise with the deleted data and any error
 */
export async function deleteFromTable<T>(
    table: string,
    match: Partial<T>
): Promise<SupabaseResponse<T>> {
    const supabase = createClient();
    return await supabase.from(table).delete().match(match).select();
}
