import { Carousel } from 'react-bootstrap';
import { viewstackimg } from '../../../fetching/FetchingInfoData';
import { sacody, sacody1, sacody2, sacody3, sacody4, saske, staaw, staaw1, staaw2, staaw3, segog, segog1, segog2,sinkrow, sinkrow1, sinkrow2 } from '../../../images/images';


export const maininfodata = {
	'id': 0,
	'tit': 'who are we ?',
	'des':<div>
		<h2>SASKE Company for software & Computer Services</h2>
		<p>
		the pioneer company locally in software design from scratch field the mother company of 4 companies every company is specialized and prepared to work on providing one service of computer services to help you manage your businesses and gain more profit
		</p>
	</div>,
	'img': <img className='mainimg' src={saske} alt="" />,
};
const InfoData = [
	{
		'id': 1,
		
		'tit': 'SACODY for Software',
		
		'p': <>
			<Carousel
				className="indict"
				style={{float: 'right'}}
				controls={false}
				variant="dark"
			>
				<Carousel.Item>
					<img
						className='infoimgsscreen'
						src={sacody1}
						alt=""
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='infoimgsscreen'
						src={sacody}
						alt=""
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='infoimgsscreen'
						src={sacody2}
						alt=""
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='infoimgsscreen'
						src={sacody3}
						alt=""
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='infoimgsscreen'
						src={sacody4}
						alt=""
					/>
				</Carousel.Item>
			</Carousel>
			<p>
				<h2 className='text-center'>&ldquo;we provide first-time tech management service for our clients&rdquo;</h2>
				<b>
				the main part of the company
				</b>
				<br />
                it is the specialized part for software designing from scratch and providing workly solutions for most social problems 
                and big companies or medium or small or any buisnessman and the startup projects
				<br />
                SASKE Company provides the best engineers to provide the best modern solutions with good quality 
				consideration quality of product and the precision in the implenentation by using the modern technologies
				in all our levels and steps of designs and developing apps which we are design depend on our design algorisms for solving your problems 
				which facing your companies and clients projects ...
			</p>
		</>
		,


		'moti':
			<>
				<div className='clearfloat'></div>
				<h3 className="sacodymoti">
					<span>"</span>
					<span className="sacodymotides">
						we promise to give you our best and always get your admiration and appreciation
					</span>
					<span>"</span>
				</h3>
			</>
		
	},
	{
		'id': 2,
		
		'tit': 'STaaW for computer\'s accessoires',
		
		'p': <>
			<Carousel
				className="indict"
				style={{ float: 'left' }}
				controls={false}
				variant="dark"
				fade
			>
				<Carousel.Item>
					<img
						className='infoimgsscreen'
						src={staaw3}
						alt=""
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='infoimgsscreen'
						src={staaw1}
						alt=""
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='infoimgsscreen'
						src={staaw}
						alt=""
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='infoimgsscreen'
						src={staaw2}
						alt=""
					/>
				</Carousel.Item>
			</Carousel>
			<p>
				<b>the second sub company</b>
				<br />
				it is the specialized part to provide computer and laptop accessories
				from source to the user directly so we provided all accessories and computers devices
				at very competitive costs 
				<br />
				we deal with the strongest and most famous international companies in the manufacture of computer accessories
				, computers, and laptops so we guarantee to provide the best quality to all our customers with outstanding performance and the best price in the market.
				we also offer a fair return policy for damaged or defective products.
				we also offer a guarantee on all our products.
				monthly offers and competitions are announced to get the best products with discounts of up to 50% or completely free.
			</p>
		</>
		,


		'moti':
			<>
				<div className='clearfloat'></div>
				<h3 className="sacodymoti">
					<span>"</span>
					<span className="sacodymotides">
					with us you and your money ... are safe
					</span>
					<span>"</span>
				</h3>
			</>
		
	},
	{
		'id': 3,
		
		'tit': 'SEgOg for maintenance',
		
		'p': <>
			<div className="triimagebox" style={{float:'right'}}>
				<img
					className='infoimgsscreen'
					id="triimg"
					src={segog}
					alt=""
				/>
				<div>
					<img
						className='infoimgsscreen'
						id="triimg"
						src={segog1}
						alt=""
					/>
					<img
						className='infoimgsscreen'
						id="triimg"
						src={segog2}
						alt=""
					/>
				</div>
			</div>
			<p>
				<b>the third sub company </b>
				<br />
					as you know we probide all computer services
				<br />
					therefore, we can't neglect the main and examination of computers and laptops
				<br /><br />
					therefore, using the latest technologies and devices , <br /> we provide maintenance services for computers,
				<br />
					laptops and all electronic devices
				<br /><br />
					we have a highly experienced team of engineers 
				<br />
					and the were retrained within the company to ensure <br /> the quality and accuracy of maintenance operations
			</p>
		</>
		,


		'moti':
			<>
				<div className='clearfloat'></div>
				<h3 className="sacodymoti">
					<span>"</span>
					<span className="sacodymotides">
						our goal is your satisfaction
					</span>
					<span>"</span>
				</h3>
			</>
	},
	{
		'id': 4,
		
		'tit': 'SINKROW for netowrk designing',
		
		'p': <>
			<div className="stackimgbox" style={{float:'left'}}>
				<img
					onClick={(e)=>{viewstackimg(e);}}
					className="viewd triinfoimgsscreen infoimgsscreen"
					src={sinkrow}
					alt=""
				/>
				<div className='stackindictor'>
					<img
						onClick={(e)=>{viewstackimg(e);}}
						className="stackimgr"
						src={sinkrow1}
						alt=""
					/>
					<img
						onClick={(e)=>{viewstackimg(e);}}
						className="stackimgl"
						src={sinkrow2}
						alt=""
					/>
				</div>
			</div>
			<p>
				<b>the fourth sub company  </b>
				<br />
					it is concerned with designing companies and government organisations 
				<br />
					to connect all devices of the system to each other and transfer data easily 
				<br />
					between all devices and ensure the unification of the data of all employees of the company or insititution according to your system
			</p>
		</>
		,


		'moti':
			<>
				<div className='clearfloat'></div>
				<h3 className="sacodymoti">
					<br/>
					<span>"</span>
					<span className="sacodymotides">
					we provide all useful
					</span>
					<span>"</span>
				</h3>
			</>
	},
	{
		'id': 5,
		
		'tit': 'othe sub companies',
		
		'p':
	<div className="mergeus">
		<Carousel
			interval = {2000}
			id="caru"
			indicators={false}
			variant="dark"
			fade
			pause={false}
			controls={false}
		>
			<Carousel.Item>
				<img
					src={saske}
					alt=""
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					src={sacody}
					alt=""
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					src={segog}
					alt=""
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					src={staaw}
					alt=""
				/>
			</Carousel.Item>
		</Carousel>
	
		<div className='other'>
			<p className="carudes">
				we hope to introduce SERAK and SACAD soon
			</p>
			<h3 className="sacodymoti carudesdown">
				<span>"</span>
				<span className="sacodymotides ">
				there are others ... but none like us !!
				</span>
				<span>"</span>
			</h3>
		</div>
	</div>



	},


];

export default InfoData;