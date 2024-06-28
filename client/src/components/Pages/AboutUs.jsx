/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import Layout from '../Layout.jsx';
import CallTo from '../CallTo.jsx';
import Image from '../../assets/Images/rrsp.jpg';

const AboutUs = () => {
	return (
		<Layout title={'About Us'}>
			<div className=' mt-6'>
				<div className='w-4/5 mx-auto py-6 flex flex-col md:flex-col lg:flex-row'>
					<div className='lg:w-2/3 lg:pr-4'>
						<p className='text-shade9 text-2xl mb-3'>
							WELCOME to Whole Insurance. Your Trusted Insurance Partner
						</p>
						<p className='text-black text-3xl md:text-4xl lg:text-4xl font-bold mb-4'>
							WHY CHOOSE US
						</p>
						<div className='flex flex-col'>
							<p className=' text-2xl md:text-3xl lg:text-3xl mb-2'>MISSION</p>
							<p className='text-justify lg:text-xl mb-6'>
								At Whole Insurance we understand the importance of protecting what
								matters most to you: your health, your loved ones, and your peace of
								mind. As a leading provider of insurance solutions, we specialize in
								three key areas: super visa insurance, travel insurance, and life
								insurance.
							</p>
						</div>
						<div className='flex flex-col'>
							<p className='text-2xl md:text-3xl lg:text-3xl mb-2'>CONSISTENCY</p>
							<p className='text-justify lg:text-xl'>
								At Whole Insurance we're more than just an insurance provider. we're
								your trusted partner in protection. With years of experience //
								eslint-disable-next-line react/no-unescaped-entities and a
								dedication to excellence, we've earned a reputation for reliability,
								integrity, and exceptional customer service. Our mission is simple:
								to provide comprehensive insurance solutions that meet your needs
								and exceed your expectations.
							</p>
						</div>
					</div>
					<div className='md:w-1/3 lg:w-1/3 mx-4 my-6'>
						<div className='bg-shade6 text-shade2 rounded-md h-full w-full p-6 text-3xl flex flex-col items-center justify-center'>
							<img src={Image} alt='Image' />
						</div>
					</div>
				</div>
				{/* next section */}
				<div className='bg-shade3/20 my-6'>
					<div className='w-4/5 mx-auto'>
						<div className='my-6 py-6 lg:py-10'>
							<p className='text-2xl md:text-3xl lg:text-3xl font-bold'>
								CUSTOMER SERVICE
							</p>
							<p className='text-lg text-justify'>
								As a company founded on values of honesty, transparency, and
								compassion, we're committed to building lasting relationships with
								our clients based on trust and mutual respect. When you choose Whole
								Insurance, you're choosing a partner you can rely on, every step of
								the way.
							</p>
						</div>
						<div className='mb-6 pb-10'>
							<p className='text-2xl md:text-3xl lg:text-3xl font-bold'>
								INSURABILITY
							</p>
							<p className='text-lg text-justify'>
								Contact us today to learn more about our insurance products and how
								we can help you protect what matters most. Your peace of mind is our
								priority.
							</p>
						</div>
					</div>
				</div>

				{/* next sections */}
				<CallTo />

				{/*  next section */}
				{/* <Testimonials /> */}
				<div className='w-4/5 mx-auto my-8 py-8 text-justify flex flex-col items-center'>
					<p className='text-3xl font-bold mb-8'>
						Still Not Sure? Download Super Visa Insurance Guide For FREE
					</p>
					<button className='bg-shade9 text-white font-bold my-6 px-6 py-4 rounded-md mt-4 hover:bg-shade8'>
						CONTACT US
					</button>
				</div>
			</div>
		</Layout>
	);
};

export default AboutUs;
