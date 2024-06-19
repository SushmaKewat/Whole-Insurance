/* eslint-disable react/no-unescaped-entities */
import { Carousel } from 'flowbite-react';
import { VscWorkspaceTrusted } from 'react-icons/vsc';
import { BsLightning } from 'react-icons/bs';

import SuperVisa from '../../assets/Images/super-visa insurance.jpg';
import TermLife from '../../assets/Images/term life insurance.jpg';
import WholeLife from '../../assets/Images/whole-life insurance.jpg';
import RRSP from '../../assets/Images/rrsp.jpg';
import Mortgage from '../../assets/Images/mortgage insurance.jpg';

const HomeSection = () => {
	return (
		<div className='mx-auto w-4/5 h-[50vh] flex flex-col lg:flex-row md:flex-col justify-around'>
			<div className='flex flex-col lg:flex-col md:flex-col text-4xl p-4 w-3/4'>
				<p>Let's Find You</p>
				<p className='font-bold'>The Best Insurance</p>
				<p className=' py-6 text-lg flex flex-col md:flex-col lg:flex-row text-shade8'>
					<span className='flex flex-row pr-4 mb-4'>
						<span className='text-2xl mr-2'>
							<VscWorkspaceTrusted />
						</span>
						Your Trusted Insurance Partner
					</span>
					<span className='flex flex-row pr-4'>
						<span className='text-2xl mr-2'>
							<BsLightning />
						</span>
						Protecting Your Future, Today.
					</span>
				</p>
				<div className='h-1/2 w-full overflow-hidden text-3xl'>
					<Carousel>
						<div>
							Super Visa Insurance
							<p className='text-shade6 font-bold'> Tailored Coverage</p>
						</div>
						<div>
							Term Insurance
							<p className='text-shade6 font-bold'> Customizable Coverage</p>
						</div>
						<div>
							Whole Life Insurance
							<p className='text-shade6 font-bold'> Cash Value Accumulation</p>
						</div>
						<div>
							Critical Illness Insurance{' '}
							<p className='text-shade6 font-bold'> Financial Security</p>
						</div>
						<div>
							Mortgage Insurance
							<p className='text-shade6 font-bold'> Preserve Equity</p>
						</div>
						<div>
							RESP Service{' '}
							<p className='text-shade6 font-bold'> Education and Support</p>
						</div>
						<div>
							RRSP Service{' '}
							<p className='text-shade6 font-bold'>
								{' '}
								Transparent and Honest Communication
							</p>
						</div>
						<div>
							Disability Insurance{' '}
							<p className='text-shade6 font-bold'>Income Protection</p>
						</div>
					</Carousel>
				</div>
			</div>

			<div className='w-1/2 overflow-hidden my-8'>
				<Carousel>
					<img src={SuperVisa} alt='...' className='w-full object-cover h-auto' />
					<img src={TermLife} alt='...' className='w-full object-cover h-auto' />
					<img src={WholeLife} alt='...' className='w-full object-cover h-auto' />
					<img src={RRSP} alt='...' className='w-full object-cover h-auto' />
					<img src={Mortgage} alt='...' className='w-full object-cover h-auto' />
				</Carousel>
			</div>
		</div>
	);
};

export default HomeSection;
