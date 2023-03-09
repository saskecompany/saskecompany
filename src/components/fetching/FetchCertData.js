import { Fragment } from 'react';
function FectchCertData(data) {
	return (
		data.map((mapping) => {
			return (
				<Fragment key={mapping.i}>
					<span style={{ '--i': mapping.i}}> <a href={mapping.img} target="_blank" rel="noreferrer"><img src={mapping.img} alt='' /></a> </span>
					<span style={{ '--i': mapping.i, '--s': mapping.i}}><a href={mapping.img} target="_blank" rel="noreferrer"><h6 className='certtext'>{mapping.des}</h6></a></span>
				</Fragment>
			);
		})
	);
}

export default FectchCertData;