import React, { useEffect } from 'react';
import Nav from '../../common/Nav';
import Title from '../../common/Title';
import Cont from '../../common/Cont';
import '../../common/style/Cert.css';
import FectchCertData from '../../../fetching/FetchCertData';
import { CertData } from '../data/CertsData';
import { lang } from '../../common/Dispatching';
import { useDispatch } from 'react-redux';


function Cert() {
	useEffect(() => {
		const board = document.querySelector('.bi-stars');
		board.style.color = 'yellow';

	});
	const dispatch = useDispatch();
	return (
		<div id="certbox">
			<Title
				title={
					<>
						<h1 className="title-txt">SASKE</h1>
						<h1 onClick={()=>{lang(dispatch);}} className="title-txt" title="أضغط لتغير اللغه إلي العربيه">
							<i className="bi bi-arrow-right-circle-fill"></i>
						</h1>
						<h1 className="title-txt">Certificates</h1>
					</>
				}
			/>
			<Cont
				content={
					<div style={{"display":"flex"}} id="certs" className='certstudio'>
						<div className='certimages'>
							{FectchCertData(CertData)}
						</div>
					</div>
				}
			/>
			<Nav />
		</div>
	);
}

export default Cert;