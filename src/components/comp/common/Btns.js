import React, {useEffect} from 'react';
import './style/Btn.css';
function Btns() {
	useEffect(() => {
		const cursB = document.getElementById('curs-box');
		const prevG = document.querySelector('.carousel-control-prev');
		const nextG = document.querySelector('.carousel-control-next');
		cursB.appendChild(nextG);
		cursB.appendChild(prevG);
	});
	return (
	<div id="curs-box" className="mt-3" dir="rtl">
		<i className="bi bi-caret-right-fill hide"></i>
		<i className="bi bi-caret-left-fill hide"></i>
	</div>
	);

}

export default Btns;