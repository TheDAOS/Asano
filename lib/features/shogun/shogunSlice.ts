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
    data: [],
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