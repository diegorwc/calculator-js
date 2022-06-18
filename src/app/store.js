import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import calculatorReducer from '../features/calculator/calculatorSlice'


export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
  middleware: [thunk]
});
