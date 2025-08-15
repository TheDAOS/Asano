import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Shogun {
    id: number;
    amount: number;
    category: string | null;
    created_at: string;
    updated_at: string;
    name: string;
    date: string;
    note: string | null;
}

interface ShogunState {
    data: Shogun[];
}

const initialState: ShogunState = {
    data: [
        {
            id: 0,
            amount: 10,
            category: null,
            created_at: '2025-08-15T19:43:30+00:00',
            updated_at: '2025-08-16T01:13:33',
            name: 'init Cigarette',
            date: '2025-08-16T01:13:38',
            note: null,
        },
    ],
};

const shogunSlice = createSlice({
    name: 'shogun',
    initialState,
    reducers: {
        addShogun(state, action: PayloadAction<Shogun>) {
            state.data.push(action.payload);
        },
        updateShogun(state, action: PayloadAction<Shogun>) {
            const index = state.data.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.data[index] = action.payload;
            }
        },
        removeShogun(state, action: PayloadAction<number>) {
            state.data = state.data.filter(item => item.id !== action.payload);
        },
        setShoguns(state, action: PayloadAction<Shogun[]>) {
            state.data = action.payload;
        },
    },
});

export const { addShogun, updateShogun, removeShogun, setShoguns } = shogunSlice.actions;
export default shogunSlice.reducer;