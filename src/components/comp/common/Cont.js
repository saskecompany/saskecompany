import React from 'react';
import './style/Cont.css';
import './style/Btn.css';
function Cont(props) {

	return (
		<div className="cont">
      
			{props.content}
      
		</div>
	);
}
export default Cont;
