/**
 * Type Definitions
 * 
 * Central location for shared TypeScript types used across the application.
 * These types ensure consistency in data handling and proper type safety.
 */

/**
 * Represents a financial transaction in the system.
 * Used in both frontend state and database operations.
 */
export interface Shogun {
    id: number;
    name: string;
    amount: number;
    category: string | null;
    note: string | null;
    created_at: string;
    updated_at: string;
    date: string;  // Make consistent with shogunSlice
}

// Add typed response for Supabase
export interface SupabaseResponse<T> {
    data: T[] | null;
    error: {
        message: string;
        details: string;
        hint: string;
        code: string;
    } | null;
}