import { configureStore } from '@reduxjs/toolkit';
import LangSlice from './slices/LangSlice';


const Store = configureStore({
	reducer:{'language':LangSlice}
});

export default Store;