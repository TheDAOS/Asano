/**
 * Shogun (Transaction) Slice
 * 
 * Redux slice for managing financial transactions.
 * Implements full CRUD operations with proper loading/error states.
 * 
 * State Shape:
 * {
 *   data: Shogun[];      // List of transactions
 *   loading: boolean;    // Loading state
 *   error: string|null;  // Error message if any
 * }
 * 
 * Actions:
 * - setShoguns: Set full transaction list
 * - addShogun: Add new transaction
 * - updateShogun: Update existing transaction
 * - removeShogun: Delete transaction
 * - setLoading: Update loading state
 * - setError: Set error message
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Shogun } from '@/utils/type';

interface ShogunState {
    data: Shogun[];
    loading: boolean;
    error: string | null;
}

const initialState: ShogunState = {
    data: [],
    loading: false,
    error: null
};

const shogunSlice = createSlice({
    name: 'shogun',
    initialState,
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
            state.error = null;
        },
        setError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        addShogun(state, action: PayloadAction<Shogun>) {
            state.data.push(action.payload);
            state.error = null;
        },
        updateShogun(state, action: PayloadAction<Shogun>) {
            const index = state.data.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.data[index] = action.payload;
                state.error = null;
            }
        },
        removeShogun(state, action: PayloadAction<number>) {
            state.data = state.data.filter(item => item.id !== action.payload);
            state.error = null;
        },
        setShoguns(state, action: PayloadAction<Shogun[]>) {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
    },
});

export const { 
    addShogun, 
    updateShogun, 
    removeShogun, 
    setShoguns,
    setLoading,
    setError 
} = shogunSlice.actions;
export default shogunSlice.reducer;