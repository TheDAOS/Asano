/**
 * Redux Store Configuration
 * 
 * This file sets up the Redux store using Redux Toolkit's configureStore.
 * It follows Next.js 13+ best practices for client-side state management.
 * 
 * Key features:
 * - Type-safe store configuration
 * - Proper state typing with RootState and AppDispatch
 * - Integration with Next.js App Router
 */

import { configureStore } from '@reduxjs/toolkit'
import shogunSlice from './features/shogun/shogunSlice'

/**
 * Creates a new Redux store instance.
 * Used by StoreProvider to ensure proper store initialization in Next.js.
 */
export const makeStore = () => {
    // Configure store with all reducers

    return configureStore({
        reducer: {
            shogun: shogunSlice
        }
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']