import { HashRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Mainscreen from './components/comp/EN/screens/MainscreenEn';
import MainscreenAr from './components/comp/AR/screens/MainscreenAr';
import Infoscreen from './components/comp/EN/screens/Infoscreen';
import InfoscreenAr from './components/comp/AR/screens/InfoscreenAr';
import Team from './components/comp/EN/screens/Team';
import TeamAr from './components/comp/AR/screens/TeamAr';
import Cert from './components/comp/EN/screens/Cert';
import CertAr from './components/comp/AR/screens/CertAr';
import ProjectsShow from './components/comp/EN/screens/Projects';
import ProjectsShowAr from './components/comp/AR/screens/ProjectsAr';
import Contact from './components/comp/EN/screens/Contact';
import ContactAr from './components/comp/AR/screens/ContactAr';


function App() {
	const container = useSelector((state) => state);
	const lang = window.localStorage.getItem('lang');
	return (
		<div>
			<HashRouter>
				{container.language.Lang === 'eng' && lang === 'eng' ? (
					<Routes>
						<Route exact={true} path="/" element={<Mainscreen />} />
						<Route exact={true} path="/us" element={<Infoscreen />} />
						<Route exact={true} path="/crew" element={<Team />} />
						<Route exact={true} path="/certificates" element={<Cert />} />
						<Route exact={true} path="/pro" element={<ProjectsShow />} />
						<Route exact={true} path="/contact" element={<Contact />} />
					</Routes>
				) : (
					<Routes>
						<Route exact={true} path="/" element={<MainscreenAr />} />
						<Route exact={true} path="/us" element={<InfoscreenAr />} />
						<Route exact={true} path="/crew" element={<TeamAr />} />
						<Route exact={true} path="/certificates" element={<CertAr />} />
						<Route exact={true} path="/pro" element={<ProjectsShowAr />} />
						<Route exact={true} path="/contact" element={<ContactAr />} />
					</Routes>
				)}
			</HashRouter>
		</div>
	);
}
export default App;
