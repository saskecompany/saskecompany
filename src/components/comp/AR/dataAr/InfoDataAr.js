import { Carousel } from 'react-bootstrap';
import { viewstackimg } from '../../../fetching/FetchingInfoData';
import { sacody, sacody1, sacody2, sacody3, sacody4, saske, staaw, staaw1, staaw2, staaw3, segog, segog1, segog2, sinkrow, sinkrow1, sinkrow2 } from '../../../images/images';
export const maininfodata = {
	'id': 0,
	'tit': 'من نكون؟',
	'des':<div>
		<h2>شركة ساسك للبرمجيات و خدمات الكمبيوتر</h2>
		<p>
			الشركه الرائده محليا في مجال تصميم البرمجيات
			من الصفر الشركه الام ل 4 شركات كلاً منهما
			متخصص و مجهز للعمل علي توفير إحدي خدمات الكمبيوتر لمساعدتكم علي إدارة أعمالكم و جني المزيد من الأرباح
		</p>
	</div>,
	'img': <img className='mainimg' src={saske} alt="" />,
};

const InfoData = [
	{
		'id': 1,
		
		'tit': 'ساكودي للبرمجيات',
		
		'p': <>
			<Carousel
				className="indict"
				style={{ float:'left' }}
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
				<h2 className='text-center'>&ldquo;نقدم و لأول مره خدمة إدارة كافة الأعمال التقنيه لدي عملائنا الكرام&rdquo;</h2>
				<b>
				القسم الأساسي و الرئيسي بالشركه
				</b>
				<br />
				وهو القسم المختص بتصميم البرمجيات من
				الصفر و تقديم حلول عمليه ﻷغلب مشكلات
				المجتمع و الشركات الكبيره او
				المتوسطه او الصغيره او اياً من أصحاب
				الاعمال و المشاريع الناشئه
				<br />
				فالشركه توفر نخبه من أمهر المهندسين
				لتوفير أفضل الحلول البرمجيه العصريه
				مع مراعاة الجوده و الدقه في التنفيذ
				و التسليم بأستخدامنا ﻷحدث التقنيات
				في كل مراحل تصميم و تطوير التطبيقات
				التي نقوم بتصميمها علي خوارزميات
				مصممه خصيصاً لكي تقوم بحل المشكلات
				التي تعوق تقدم شركات و مشاريع
				عملائنا ...
			</p>
		</>
		,

		
		'moti':
			<>
				<div className='clearfloat'></div>
				<h3 className="sacodymoti">
					<span>"</span>
					<span className="sacodymotides">
						نعدكم بتقديم أفضل ما لدينا و أن نحصل
						علي إعجابكم و تقديركم دائماً
					</span>
					<span>"</span>
				</h3>
				<hr />
				<br/>
			</>
		
	},
	{
		'id': 2,
		
		'tit': 'ستاوو لمستلزمات الكمبيوتر',
		
		'p': <>
			<Carousel
				className="indict"
				style={{ float:'right' }}
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
				<b>القسم الفرعي الثاتي بالشركه</b>
				<br />
					وهو القسم المختص بتوفير مستلزمات
					الكمبيوتر و اللاب توب من المصدر الي
					المستخدم مباشرة ولذلك يتم توفير كافة
					مستلزمات و أجهزة الكمبيوتر بأسعار
					تنافسيه جداً
				<br />
					نتعامل مع أقوي و أشهر الشركات
					العالميه في تصنيع مستلزمات الكمبيوتر
					و أجهزة الكمبيوتر و اللاب توب ولذلك
					نضمن تقديم أفضل جوده لجميع عملائنا
					الكرام مع الأداء المتميز و كذلك أفضل
					سعر في السوق و أيضاً نقدم سياسة
					إسترجاع عادله للمنتجات المعطوبه او
					التالفه كما نقدم ضمان علي كافة
					منتجاتنا و يتم الإعلان عن عروض و
					مسابقات شهريه للحصول علي أفضل
					المنتجات بخصومات تصل ل 50% أو مجانيه
					تماماً
			</p>
		</>
		,


		'moti':
			<>
				<div className='clearfloat'></div>
				<h3 className="sacodymoti">
					<span>"</span>
					<span className="sacodymotides">
					معنا انت و مالك ... في أمان
					</span>
					<span>"</span>
				</h3>
				<hr />
				<br/>
			</>
		
	},
	{
		'id': 3,
		
		'tit': 'سيجوج للصيانه',
		
		'p': <>
			<div className="triimagebox" style={{float:'left'}}>
				<img
					className='infoimgsscreen'
					id="triimg"
					src={segog}
					alt=""
				/>
				<div className='basetri'>
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
				<b>القسم الفرعي الثالث بالشركه </b>
				<br />
					كما تعلمون نحن نقدم كافة خدمات
					الكمبيوتر
				<br />
					ولذلك لا يمكن ان نغفل جانب صيانه و
					فحص أجهزة الكمبيوتر و اللاب توب
				<br /><br />
					ولذلك و بإستخدام أحدث التقنيات و
					الأجهزه
				<br />
					نوفر خدمة صيانة الكمبيوتر و
					اللاب توب و كافة الأجهزه الإلكترونيه
				<br /><br />
					فلدينا فريق مهندسين علي درجة عاليه
					من الخبره
				<br />
					و تم إعادة تدريبهم داخل الشركه
					لنضمن جودة و دقة عمليات الصيانه
			</p>
		</>
		,


		'moti':
			<>
				<div className='clearfloat'></div>
				<h3 className="sacodymoti">
					<span>"</span>
					<span className="sacodymotides">
						هدفنا إرضائكم
					</span>
					<span>"</span>
				</h3>
				<hr />
				<br/>
			</>
	},
	{
		'id': 4,
		
		'tit': 'سينكرو لتصميم الشبكات',
		
		'p': <>
			<div className="stackimgbox" style={{float:'right'}}>
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
				<b>القسم الرابع الفرعي بالشركه </b>
				<br />
					يختص هذا القسم بتصميم الشبكات
					للشركات و المؤسسات الحكوميه
				<br />
					لربط جميع أجهزة المنظومه ببعضها
					البعض و نقل البيانات بسهوله و يسر
				<br />
					بين كافة الأجهزه و ضمان توحيد بيانات
					جميع موظفي الشركه او المؤسسه وفق
					السيستم الخاص بكم
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
					نقدم كل ما يفيدكم
					</span>
					<span>"</span>
				</h3>
				<hr />
				<br/>
			</>
		
	},
	{
		'id': 5,
		
		'tit': 'شركات فرعيه أخري',
		
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
			نطمح لتقديم شركتي سيراك و ساكاد
			قريباً
			</p>
			<h3 className="sacodymoti carudesdown">
				<span>"</span>
				<span className="sacodymotides ">
				يوجد غيرنا ... لكن لا يوجد مثلنا !!!
				</span>
				<span>"</span>
			</h3>
		</div>
	</div>



	},


];

export default InfoData;