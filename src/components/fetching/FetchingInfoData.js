import { Fragment } from 'react';

export const main = (maindata) =>
{
	return (
		<div>
			<h1>{maindata.tit}</h1>
			<div>
				<div className="mainsection">
					{maindata.img}
					{maindata.des}
				</div>
			</div>
		</div>
	);
};
export const viewstackimg = (e) => {
	const viewdimg = document.querySelector('.viewd');
	const stackimgr = document.querySelector('.stackimgr');
	const stackimgl = document.querySelector('.stackimgl');
	// const stackimgs = document.querySelectorAll('.viewd');
	if (e.target.classList.value.includes('stackimgr')) {
		let rimg = stackimgr.attributes.src.value;
		let vimg = viewdimg.attributes.src.value;
		stackimgr.src = vimg;
		viewdimg.src = rimg;
	}
	if (e.target.classList.value.includes('stackimgl')) {
		let rimg = stackimgl.attributes.src.value;
		let vimg = viewdimg.attributes.src.value;
		stackimgl.src = vimg;
		viewdimg.src = rimg;
	}
};
const FetchData = data =>
	data.map(arr => {
		return (
			<Fragment key={arr.id}>
				<li><h3>{arr.tit}</h3></li>
				<div className="contus">
					{arr.p}
				</div>
				{arr.moti}
			</Fragment>
		);
	});

export default FetchData;
