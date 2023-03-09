import React, { useEffect } from 'react';
import '../../EN/screens/style/mainscreen.css';
import Title from '../../common/Title';
import Cont from '../../common/Cont';
import datacontff from '../../../fetching/FetchContData';
import ContData from '../dataAr/ContDataAr';
import Btns from '../../common/Btns';
import Nav from '../../common/Nav';
import { lang } from '../../common/Dispatching';
import { useDispatch } from 'react-redux';
import { Carousel } from 'react-bootstrap';

function MainscreenAr() {
	const dispatch = useDispatch();
	useEffect(() => {
		const board = document.querySelector('.bi-easel3-fill');
		const img = document.querySelectorAll('#cont-img');
		board.style.color = 'green';
		for (let i = 0; i < img.length; i++){
			img[i].style.float = 'left';
		}
		const prevG = document.querySelector('.carousel-control-prev');
		const nextG = document.querySelector('.carousel-control-next');
		prevG.className="carousel-control-next";
		nextG.className="carousel-control-prev";
	});
	return (
		<div dir="rtl">
			<Title
				title={
					<>
						<h1 className="title-txt">الفكره </h1>
						<h1
							onClick={() => {
								lang(dispatch);
							}}
							className="title-txt"
							title="click for english language"
						>
							<i className="bi bi-arrow-left-circle-fill"></i>
						</h1>
						<h1 className="title-txt">المنتج</h1>
					</>
				}
			/>
			<Cont
				content={
					<div>
						<Carousel
							nextIcon={
								<button className="btn-ar-l">
									<i className="bi bi-caret-left-fill"></i>
								</button>
							}
							prevIcon={
								<button className="btn-ar-r">
									<i className="bi bi-caret-right-fill"></i>
								</button>
							}
							variant="dark"
							dir="rtl"
						>
							{datacontff(ContData)}
						</Carousel>
					</div>
				}
			/>
			<Btns />
			<Nav />
		</div>
	);
}

export default MainscreenAr;
