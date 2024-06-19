import React from 'react';
import { Carousel } from '@material-tailwind/react';
import logo from '../../assets/Images/pngwing.com.png';

const Testimonials = () => {
	return (
		<div className=' bg-shade3/20'>
			<div className='w-4/5 mx-auto py-8 flex flex-col md:flex-col lg:flex-col'>
				<div className='flex flex-col md:flex-row lg:flex-row items-center justify-between'>
					<p className='font-bold text-6xl text-shade9 mx-4 my-4'>5/5</p>
					<img
						src={logo}
						alt='Google Reviews'
						className='w-4/5 md:w-2/5 lg:w-1/5 mx-4 my-4'
					/>
					<p className='font-bold text-lg mx-4 w-4/5 lg:w-1/5 my-4'>
						100% of customers recommend us! The Best Insurance Advisor!
					</p>
				</div>
				<div className='w-3/5 mx-auto my-8'>
					<Carousel className='rounded-xl '>
						<div className='w-full h-80 bg-shade10'>hello</div>
						<div className='w-full h-80  bg-shade10'>hello</div>
						<div className='w-full h-80  bg-shade10'>hello</div>
						<div className='w-full h-80  bg-shade10'>hello</div>
					</Carousel>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
