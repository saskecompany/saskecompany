import React from 'react';
import Employee from '../comp/common/Employee';

const FetchingTeamData = (data) => {
	return (
		data.map(prog => {
			return (
				<div key={prog.id} className='col-md-4'>
					<Employee
						name={prog.name}
						role={prog.role}
						address={prog.address}
						tel={prog.tel}
						dep={prog.dep}
						img={prog.img}
					/>
				</div>
			);
		})
	);
};

export default FetchingTeamData;