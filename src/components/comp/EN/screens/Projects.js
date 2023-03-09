import React, { useEffect } from 'react';
import '../../../comp/common/style/flipster.min.css';
import Cont from '../../common/Cont';
import Title from '../../common/Title';
import { lang } from '../../common/Dispatching';
import { useDispatch } from 'react-redux';
import Nav from '../../common/Nav';
import FetchProData from '../../../fetching/FetchproData';
import { prodata } from '../data/ProData';
import '../../common/style/pro.css';

function ProjectsShow() {
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
		<div>
			<Title 
				title={
					<>
						<h1 className="title-txt">SASKE</h1>
						<h1 onClick={()=>{lang(dispatch);}} className="title-txt" title="أضغط لتغير اللغه إلي العربيه">
							<i className="bi bi-arrow-right-circle-fill"></i>
						</h1>
						<h1 className="title-txt">Projects</h1>
					</>
				}
			/>
			<Cont content={
				<div className='flipbox'>	
					<div className="my-flipster mt-3">
						<ul >
							{FetchProData(prodata)}
						</ul>
					</div>
				</div>
			}
			/>
			<Nav />
		</div>
	);
}

export default ProjectsShow;
