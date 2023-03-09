import { createSlice } from '@reduxjs/toolkit';
const lang = window.localStorage.getItem('lang');
const initialState = {
	'Lang':lang
};


const LangSlice = createSlice({
	name: 'current language',
	initialState,
	reducers: {
		ChangeLang: (state, action) => {
			if (state.Lang === 'eng' && window.localStorage.getItem('lang') === 'eng') {
				state.Lang = 'ar';
				window.localStorage.setItem('lang', 'ar');
			}
			else {
				state.Lang = 'eng';
				window.localStorage.setItem('lang', 'eng');
			}
		}
	}
});

export const { ChangeLang } = LangSlice.actions;
export default LangSlice.reducer;
