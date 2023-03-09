import React from 'react';
import bg from '../../../media/teamscreenimages/bg.jpg';
import '../EN/screens/style/team.css';

function Employee (props) {
	return (
		<div id='programmer' style={props.name && props.role && props.dep && props.address && props.tel ? {border:'green 2px dashed'} : {border:'red 2px dashed'}}>
			<img id="prog-img" src={props.img ? props.img : bg} alt='img' />
			<h3 style={props.name ? { color: 'green' } : { color: 'red' }} > {props.name ? props.name : 'name'} </h3>
			<h4 style={props.role ? { color: 'white' } : { color: 'red' }} >{props.role ? props.role : 'role'}</h4>
			<h5 style={props.address ? { color: 'white' } : { color: 'red' }} >{props.address ? props.address : 'address'}</h5>
			<h5 style={props.dep ? { color: 'white' } : { color: 'red' }} >{props.dep ? props.dep : 'department'}</h5>
			<h6 style={props.tel ? { color: 'white' } : { color: 'red' }} >{props.tel ? props.tel : 'phone'}</h6>
		</div>
	);
}

export default Employee;