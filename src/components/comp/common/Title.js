import React from 'react';
import './style/Title.css';
function Title(props) {
	return (
		<div id="tit">
			<div id="title-box">
				{props.title}
			</div>
		</div>
	);
}
 
export default Title;