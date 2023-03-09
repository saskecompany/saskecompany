import { Carousel } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const datacontff = content => content.map((data) => {
	const container = useSelector((state) => state);
	const lang = window.localStorage.getItem('lang');
	let img;
	let vid;
	if (data.img) {
		img =   <img id="cont-img" style={{ float: container.language.Lang === 'ar' && lang === 'ar' ? 'left' : 'right' }} src = {data.img} alt="" />;
	}
	if (data.video) {
		vid = 	<video id="cont-img" autoPlay loop muted style={{float: container.language.Lang === 'ar' && lang === 'ar' ? 'left' : 'right', 'pointerEvents': 'none' }}>
			<source autoPlay src={ data.video }></source>
		</video>;
	}
	return (
		<Carousel.Item key={data.id}>
			<div id="cont-box" className="mt-3">
				<div className="cont-text">
					<h1 className="mb-3 tit-head">{data.tit}</h1>
					<div className="des-img-cont">
						<div className="cont-img-box">
							{img}
							{vid}
						</div>
						{data.p}
					</div>
				</div>
			</div>
		</Carousel.Item>
	);
}
);
  
export default datacontff;