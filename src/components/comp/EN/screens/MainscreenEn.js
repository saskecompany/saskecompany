import React, { useEffect } from 'react';
import './style/mainscreen.css';
import Title from '../../common/Title';
import Cont from '../../common/Cont';
import Btns from '../../common/Btns';
import Nav from '../../common/Nav';
import datacontff from '../../../fetching/FetchContData';
import ContData from '../data/ContData';
import { lang } from '../../common/Dispatching';
import { useDispatch } from 'react-redux';
import { Carousel } from 'react-bootstrap';

function Mainscreen() {
	const dispatch = useDispatch();
	useEffect(() => {
		const board = document.querySelector('.bi-easel3-fill');
		const indicator = document.querySelector('.carousel-indicators');
		indicator.style.right = '-15%';
		indicator.style.bottom = '0%';
		indicator.style.top = '0%';
		indicator.style.left = '80%';
		board.style.color = 'green';
	},[]);
	return (            
		<div>
			<Title title={
				<>
					<h1 className='title-txt'>idea</h1>
					<h1 onClick={()=>{lang(dispatch);}} className='title-txt' title="أضغط لتغير اللغه إلي العربيه"><i className='bi bi-arrow-right-circle-fill'></i></h1>
					<h1 className='title-txt'>product</h1>
				</>
			}/>
			<Cont content={
				<>
					<Carousel prevIcon={<button className="btn-ar-l">     <i className="bi bi-caret-left-fill"></i>   </button>} nextIcon={<button className="btn-ar-r">     <i className="bi bi-caret-right-fill"></i>   </button>} variant="dark">
						{datacontff(ContData)}
					</Carousel>
				</>
			} />
			<Btns />
			<Nav />
		</div>

	);
}

export default Mainscreen;