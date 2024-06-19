import Image1 from '../../assets/Images/Insurance Plans/Super-Visa-Insurance.png';
import Image2 from '../../assets/Images/Insurance Plans/Term-Life.png';
import Image3 from '../../assets/Images/Insurance Plans/Whole-Life-Insurance.png';
import Image4 from '../../assets/Images/Insurance Plans/Critical-Illness-Insurance.png';
import Image5 from '../../assets/Images/Insurance Plans/Mortgage-Insurance.png';
import Image6 from '../../assets/Images/Insurance Plans/Registered-Education.png';
import Image7 from '../../assets/Images/Insurance Plans/Registered-Retirement.png';
import Image8 from '../../assets/Images/Insurance Plans/Disability-Insurance.png';

const InsurancePlans = () => {
	return (
		<div className=' w-full mx-auto bg-shade2/30 py-10'>
			<div className=' w-4/5 mx-auto text-sm text-center flex flex-row flex-wrap md:flex-row lg:flex-row justify-around items-center mt-8'>
				<div className='m-1'>
					<a href='services/super-visa'>
						<div className='bg-shade3 p-2 mx-2 rounded-md flex flex-col items-center'>
							<img src={Image1} alt='Super Visa Insurance' />
						</div>
						<p> Super Visa Insurance</p>
					</a>
				</div>
				<div className='m-1'>
					<a href='services/term-life-insurance'>
						<div className='bg-shade3 p-2 mx-2 rounded-md flex flex-col items-center'>
							<img src={Image2} alt='' />
						</div>
						<p> Term Life Insurance</p>
					</a>
				</div>
				<div className='m-1'>
					<a href='services/whole-life-insurance'>
						<div className='bg-shade3 p-2 mx-2 rounded-md flex flex-col items-center'>
							<img src={Image3} alt='' />
						</div>
						<p>Whole Life Insurance</p>
					</a>
				</div>
				<div className='m-1'>
					<a href='services/critical-illness-insurance'>
						<div className='bg-shade3 p-2 mx-2 rounded-md flex flex-col items-center'>
							<img src={Image4} alt='' />
						</div>
						<p>Critical Illness Insurance</p>
					</a>
				</div>
				<div className='m-1'>
					<a href='services/mortgage-insurance'>
						<div className='bg-shade3 p-2 mx-2 rounded-md flex flex-col items-center'>
							<img src={Image5} alt='' />
						</div>
						<p>Mortagage Insurance</p>
					</a>
				</div>
				<div className='m-1'>
					<a href='services/resp'>
						<div className='bg-shade3 p-2 mx-2 rounded-md flex flex-col items-center'>
							<img src={Image6} alt='' />
						</div>
						<p>RESP</p>
					</a>
				</div>
				<div className='m-1'>
					<a href='services/rrsp'>
						<div className='bg-shade3 p-2 mx-2 rounded-md flex flex-col items-center'>
							<img src={Image7} alt='' />
						</div>
						<p>RRSP</p>
					</a>
				</div>
				<div className='m-1'>
					<a href='services/disability-insurance'>
						<div className='bg-shade3 p-2 mx-2 rounded-md flex flex-col items-center'>
							<img src={Image8} alt='' />
						</div>
						<p>Disability Insurance</p>
					</a>
				</div>
			</div>
		</div>
	);
};

export default InsurancePlans;
