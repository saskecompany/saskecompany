import React, {useEffect} from 'react';
import Title from '../../common/Title';
import { lang } from '../../common/Dispatching';
import { useDispatch } from 'react-redux';
import Nav from '../../common/Nav';
import Cont from '../../common/Cont';
import FetchingTeamData from '../../../fetching/FetchTeamData';
import { person } from '../data/programmerInfo';
import { sultan } from '../../../images/images';
import Employee from '../../common/Employee';
function Team() {
	const dispatch = useDispatch();
	useEffect(() => {
		const board = document.querySelector('.bi-file-earmark-person');
		board.style.color = 'black';
	});
	const own = {id: 1, 	name: 'sultan abdelkareem',   		role: 'CEO & Web Developer & Software Developer',			address: 'minia', 	 tel: '01060950140', 		 dep:'saske', 	 img:sultan};
	return (
		<div className='m-0'>
			<Title
				title={
					<>
						<h1 className="title-txt">SASKE</h1>
						<h1 onClick={()=>{lang(dispatch);}} className="title-txt" title="أضغط لتغير اللغه إلي العربيه">
							<i className="bi bi-arrow-right-circle-fill"></i>
						</h1>
						<h1 className="title-txt">Team</h1>
					</>
				}
			/>
			<Cont
				content={
					<>
						<div className='own'>
							<Employee
								name={own.name}
								role={own.role}
								address={own.address}
								tel={own.tel}
								dep={own.dep}
								img={own.img}
							/>
						</div>
						<div className="row mx-auto">
							{FetchingTeamData(person)}
						</div>
					</>
				}
			/>
			<Nav />
		</div>
	);
}

export default Team;