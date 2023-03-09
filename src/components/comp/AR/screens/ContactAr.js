import React, {useEffect} from 'react';
import '../../EN/screens/style/mainscreen.css';
import Title from '../../common/Title';
import Cont from '../../common/Cont';
import Btns from '../../common/Btns';
import Nav from '../../common/Nav';
import { lang } from '../../common/Dispatching';
import { useDispatch } from 'react-redux';
import { Carousel } from 'react-bootstrap';
import FetchContactData from '../../../fetching/FetchContactData';
import data from '../dataAr/ContactDataAr';
import '../../common/style/contact.css';

function ContactAr() {
	useEffect(() => {
		const board = document.querySelector('.bi-telephone-fill');
		board.style.color = 'black';
		const prevG = document.querySelector('.carousel-control-prev');
		const nextG = document.querySelector('.carousel-control-next');
		prevG.className="carousel-control-next";
		nextG.className="carousel-control-prev";
	});
	const dispatch = useDispatch();
	return (
		<div dir="rtl">
			<Title
				title={
					<>
						<h1 className="title-txt">للتواصل </h1>
						<h1
							onClick={() => {
								lang(dispatch);
							}}
							className="title-txt"
							title="click for english language"
						>
							<i className="bi bi-arrow-left-circle-fill"></i>
						</h1>
						<h1 className="title-txt">معنا</h1>
					</>
				}
			/>
			<Cont
				content={
					<>
						<Carousel
							nextIcon={
								<button className="btn-ar-l ">
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
							{FetchContactData(data)}
						</Carousel>
					</>
				}
			/>
			<Btns />
			<Nav />
		</div>
	);
}

export default ContactAr;
