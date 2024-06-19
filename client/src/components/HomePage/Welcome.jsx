/* eslint-disable react/no-unescaped-entities */

import Image from '../../assets/Images/Best-Life-Insurance-Company-1.jpg';

const Welcome = () => {
	return (
		<div className='h-full mx-auto w-4/5 py-8 flex flex-col md:flex-col lg:flex-row'>
			<div className='text-md md:text-lg lg:text-lg'>
				<h3 className='font-bold text-xl text-shade8'>Welcome to WHOLE INSURANCE</h3>
				<h2 className='font-bold text-3xl'>
					Your Trusted Insurance Partner | Whole Insurance
				</h2>
				<p className='my-4 text-md md:text-lg lg:text-lg text-justify'>
					At Whole Insurance we understand the importance of protecting what matters most
					to you: your health, your loved ones, and your peace of mind. As a leading
					provider of insurance solutions, we specialize in three key areas: super visa
					insurance, travel insurance, and life insurance.
				</p>
				<p className='my-4 text-md md:text-lg lg:text-lg text-justify'>
					At Whole Insurance we're more than just an insurance provider – we're your
					trusted partner in protection. With years of experience and a dedication to
					excellence, we've earned a reputation for reliability, integrity, and
					exceptional customer service. Our mission is simple: to provide comprehensive
					insurance solutions that meet your needs and exceed your expectations.
				</p>
				<p className='my-4 text-md md:text-lg lg:text-lg text-justify'>
					As a company founded on values of honesty, transparency, and compassion, we're
					committed to building lasting relationships with our clients based on trust and
					mutual respect. When you choose Whole Insurance, you're choosing a partner you
					can rely on, every step of the way.
				</p>
				<p className='my-4 text-md md:text-lg lg:text-lg text-justify'>
					Contact us today to learn more about our insurance products and how we can help
					you protect what matters most. Your peace of mind is our priority.
				</p>
				<p className='my-4 font-bold text-xl md:text-3xl lg:text-3xl text-shade10 '>
					Whole Insurance – Protecting Your Future, Today.
				</p>
			</div>
			<div className='w-full ml-4 my-auto'>
				<img src={Image} alt='Insurance Image' />
			</div>
		</div>
	);
};

export default Welcome;
