import React, { useEffect } from 'react';
import '../../../comp/common/style/flipster.min.css';
import Cont from '../../common/Cont';
import Title from '../../common/Title';
import { lang } from '../../common/Dispatching';
import { useDispatch } from 'react-redux';
import Nav from '../../common/Nav';
import FetchProData from '../../../fetching/FetchproData';
import { prodataAr } from '../dataAr/ProData';
import '../../common/style/pro.css';

function ProjectsShowAr() {
	const dispatch = useDispatch();
	useEffect(() => {
		const board = document.querySelector('.bi-lightbulb-fill');
		board.style.color = 'yellow';
		// eslint-disable-next-line no-undef
		$('.my-flipster').flipster({
			loop:true,
		});
	}, []);
	
	return (
		<div dir="rtl">
			<Title 
				title={
					<>
						<h1 className="title-txt">مشاريع</h1>
						<h1 onClick={()=>{lang(dispatch);}} className="title-txt" title="click for english language">
							<i className="bi bi-arrow-left-circle-fill"></i>
						</h1>
						<h1 className="title-txt">ساسك</h1>
					</>
				}
			/>
			<Cont content={
				<div className='flipbox'>
					<div dir='ltr' className="my-flipster mt-3">
						<ul>
							{FetchProData(prodataAr)}
						</ul>
					</div>	
				</div>
			}
			/>
			<Nav />
		</div>
	);
}

export default ProjectsShowAr;
