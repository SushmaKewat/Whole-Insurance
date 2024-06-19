import Image from '../assets/Images/5127314.jpg';
const CallTo = () => {
	return (
		<div className='bg-shade3/20  '>
			<div className='w-4/5 mx-auto flex flex-col lg:flex-row md:flex-col py-6 text-center items-center'>
				<div className='w-2/3'>
					<p className='font-bold text-2xl md:text-2xl lg:text-3xl px-4 mx-2 mb-4'>
						Get The Best Insurance Quote From Whole Insurance
					</p>
					<p className='text-xl md:text-2xl lg:text-2xl'>
						Call <span className='text-shade8 font-bold mb-4'>+1-6479630700</span> to
						speak to our advisors.
					</p>
					<button className='bg-shade9 text-white font-md px-6 py-4 my-4 rounded-md hover:bg-shade8'>
						<a href='/contact'>CONTACT US NOW</a>
					</button>
				</div>
				<div className='w-full md:w-1/3 lg:w-1/3'>
					<img src={Image} alt='Customer care' />
				</div>
			</div>
		</div>
	);
};

export default CallTo;
