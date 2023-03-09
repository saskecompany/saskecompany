import { ChangeLang } from '../../../container/slices/LangSlice';


// changelanguage Dispatch of site

export const lang = (dis) => {
	dis(ChangeLang());
};