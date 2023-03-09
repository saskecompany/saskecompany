import React, {useEffect} from 'react';
import Title from '../../common/Title';
import { lang } from '../../common/Dispatching';
import { useDispatch } from 'react-redux';
import Nav from '../../common/Nav';
import Cont from '../../common/Cont';
import FetchingTeamData from '../../../fetching/FetchTeamData';
import { person } from '../dataAr/programmerInfoAr';
import { sultan } from '../../../images/images';
import Employee from '../../common/Employee';
function Team() {
	useEffect(() => {
		const board = document.querySelector('.bi-file-earmark-person');
		board.style.color = 'black';
	});
	const own = {id: 1, 	name: 'سلطان عبد الكريم',   		role: 'المدير التنفيذى & مطور ويب & مطور برمجيات',			address: 'المنيا', 	 tel: '01060950140', 		 dep:'ساسكي', 	 img:sultan};
	const dispatch = useDispatch();
	return (
		<div className='m-0' dir="rtl">
			<Title
				title={
					<>
						<h1 className="title-txt">فريق</h1>
						<h1 onClick={()=>{lang(dispatch);}} className="title-txt" title="click for english language">
							<i className="bi bi-arrow-left-circle-fill"></i>
						</h1>
						<h1 className="title-txt">ساسك</h1>
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