import React, {useEffect} from 'react';
import Title from '../../common/Title';
import { lang } from '../../common/Dispatching';
import { useDispatch } from 'react-redux';
import Nav from '../../common/Nav';
import Cont from '../../common/Cont';
import '../../common/style/info.css';
import FetchData from '../../../fetching/FetchingInfoData';
import { main } from '../../../fetching/FetchingInfoData';
import InfoData, { maininfodata } from '../dataAr/InfoDataAr';
function InfoscreenAr() {
	const dispatch = useDispatch();
	useEffect(() => {
		const board = document.querySelector('.bi-person-circle');
		board.style.color = 'black';
	});
	return (
		<div dir="rtl">
			<Title
				title={
					<>
						<h1 className="title-txt">شركة </h1>
						<h1
							onClick={() => {
								lang(dispatch);
							}}
							className="title-txt"
							title="click for english language"
						>
							<i className="bi bi-arrow-left-circle-fill"></i>
						</h1>
						<h1 className="title-txt">ساسك</h1>
					</>
				}
			/>
			<Cont
				content={
					<>
						{main(maininfodata)}
						<br/>
						<ol>
							{FetchData(InfoData)}
						</ol>
					</>
				}
			/>
			<Nav />
		</div>
	);
}

export default InfoscreenAr;
