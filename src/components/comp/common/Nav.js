import React from 'react';
import { Link } from 'react-router-dom';
import './style/Nav.css';
function Nav() {
	return (
		<nav>
			<div id="nav-box">
				<ul className='navul'>
					<li className="boardli">
						<Link to="/">
							<i className="bi bi-easel3-fill"></i>
						</Link>
					</li>
					<li className="usli">
						<Link to="/us">
							<i className="bi bi-person-circle"></i>
						</Link>
					</li>
					<li className="proli">
						<Link to="/pro">
							<i className="bi bi-lightbulb-fill"></i>
						</Link>
					</li>
					<li className="crewli">
						<Link to="/crew">
							<i className="bi bi-file-earmark-person"></i>
						</Link>
					</li>
					<li className="certli">
						<Link to="/certificates">
							<i className="bi bi-stars"></i>
						</Link>
					</li>
					<li className="">
						<Link to="/contact">
							<i className="bi bi-telephone-fill"></i>
						</Link>
					</li>

				</ul>
			</div>
		</nav>
	);
}

export default Nav;
