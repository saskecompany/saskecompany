import React, {useEffect} from 'react';
import Nav from '../../common/Nav';
import Title from '../../common/Title';
import Cont from '../../common/Cont';
import '../../common/style/Cert.css';
import FectchCertData from '../../../fetching/FetchCertData';
import { CertDataAr } from '../dataAr/CertsDataAr';
import { lang } from '../../common/Dispatching';
import { useDispatch } from 'react-redux';
function Cert() {
	const dispatch = useDispatch();
	useEffect(() => {
		const board = document.querySelector('.bi-stars');
		board.style.color = 'yellow';
		
	});
	return (
		<div id="certbox" dir="rtl">
			<Title
				title={
					<>
						<h1 className="title-txt">شهادات</h1>
						<h1 onClick={()=>{lang(dispatch);}} className="title-txt" title="click for english language">
							<i className="bi bi-arrow-left-circle-fill"></i>
						</h1>
						<h1 className="title-txt">ساسك</h1>
					</>
				}
			/>
			<Cont
				content={
					<div style={{textAlign:"center"}} id='certs' className='certstudio'>
						<div className='certimages'>
							{FectchCertData(CertDataAr)}
						</div>
					</div>
				}
			/>
			<Nav />
		</div>
	);
}

export default Cert;