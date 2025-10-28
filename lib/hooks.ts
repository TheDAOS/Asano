/**
 * Custom Redux Hooks
 * 
 * Pre-typed versions of useDispatch and useSelector for use throughout the app.
 * These hooks ensure proper typing of Redux operations without repetitive type casting.
 * 
 * Usage:
 * ```typescript
 * const dispatch = useAppDispatch();
 * const data = useAppSelector(state => state.someSlice.data);
 * ```
 * 
 * Benefits:
 * - Type-safe dispatch and selectors
 * - Proper TypeScript inference
 * - Consistent usage across components
 */

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default useAppSelector
