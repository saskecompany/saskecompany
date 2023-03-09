import React, {useEffect} from 'react';
import Title from '../../common/Title';
import { lang } from '../../common/Dispatching';
import { useDispatch } from 'react-redux';
import Nav from '../../common/Nav';
import Cont from '../../common/Cont';
import '../../common/style/info.css';
import FetchData from '../../../fetching/FetchingInfoData';
import { main } from '../../../fetching/FetchingInfoData';
import InfoData, { maininfodata } from '../data/InfoData';
function Infoscreen() {
	const dispatch = useDispatch();
	useEffect(() => {
		const board = document.querySelector('.bi-person-circle');
		board.style.color = 'black';
	});
	return (
		<div className='m-0'>
			<Title
				title={
					<>
						<h1 className="title-txt">SASKE</h1>
						<h1 onClick={()=>{lang(dispatch);}} className="title-txt" title="أضغط لتغير اللغه إلي العربيه">
							<i className="bi bi-arrow-right-circle-fill"></i>
						</h1>
						<h1 className="title-txt">Company</h1>
					</>
				}
			/>
			<Cont
				content={
					<>
						{main(maininfodata)}
						<ol style={{padding:'0% 3%'}}>
							{FetchData(InfoData)}
						</ol>
					</>
				}
			/>
			<Nav />
		</div>
	);
}

export default Infoscreen;