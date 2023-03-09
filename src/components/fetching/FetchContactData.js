import { Carousel } from 'react-bootstrap';

const FetchContactData = (contdata) => contdata.map((data) => {
	return (
		<Carousel.Item key={data.id}>
			<div id="cont-box"  className="contact-box container">
				<h2>{data.sochial}</h2>
				<hr />
				<div className='contact-cont'>
					<div>
						<p>{data.des}</p>
						{data.btn}
					</div>
					<div>{data.logo}</div>
				</div>
			</div>
		</Carousel.Item>
	);
});

export default FetchContactData;