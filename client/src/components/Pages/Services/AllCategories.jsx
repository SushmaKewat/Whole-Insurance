/* eslint-disable react/no-unescaped-entities */
import Layout from '../../Layout.jsx';
import { AllServices } from '../../../assets/Data/services.js';
import CallTo from '../../CallTo.jsx';

import Image from '../../../assets/Images/rrsp.jpg';

const AllCategories = () => {
	return (
		<Layout title={'Services'}>
			<div className=' flex flex-col w-full items-center'>
				<div className=' items-center text-center my-6'>
					<div className='w-full mx-auto py-6 px-4 font-bold text-3xl md:text-4xl lg:text-5xl'>
						Whole Insurance Services
					</div>

					<div className='bg-shade3/20 w-full flex flex-col md:flex-row lg:flex-row'>
						<div>
							<div className='font-bold text-2xl md:text-3xl lg:text-4xl text-shade9 text-center my-4'>
								Insurance Services Offered by Us
							</div>
							<div className='w-4/5 mx-auto my-8 flex flex-wrap flex-row justify-around md:flex-col lg:flex-row items-center'>
								{AllServices.map((insurance) => (
									<div
										className='font-bold bg-white shadow-xl text-lg md:text-xl lg:text-xl text-justify items-center m-2 md:m-2 lg:m-4 p-4 md:p-4 lg:p-6'
										key={insurance.name}>
										<a href={`/services/${insurance.path}`}>{insurance.name}</a>
									</div>
								))}
							</div>
						</div>
						<div className='w-full my-6'>
							<img src={Image} alt='Insurance Image' />
						</div>
					</div>
				</div>
				<div className='w-4/5 mx-auto my-8'>
					<h3 className='font-bold text-3xl text-shade8 mb-3'>
						Welcome to Whole Insurance Your Trusted Insurance Partner
					</h3>
					<p className='text-lg text-justify'>
						At Whole Insurance we understand the importance of protecting what matters
						most to you: your health, your loved ones, and your peace of mind. As a
						leading provider of insurance solutions, we specialize in three key areas:
						super visa insurance, travel insurance, and life insurance.
					</p>
				</div>
				<div className='w-4/5 mx-auto my-8'>
					<h3 className='font-bold text-2xl'>Super Visa Insurance</h3>
					<p className='text-lg text-justify'>
						For families looking to reunite with their loved ones in Canada, our super
						visa insurance offers comprehensive coverage tailored to the unique needs of
						parents and grandparents. Our policies provide peace of mind by ensuring
						that your family members are protected with reliable healthcare coverage
						while visiting Canada.
					</p>
				</div>

				<div className='w-4/5 mx-auto my-8'>
					<h3 className='font-bold text-2xl'>Travel Insurance</h3>
					<p className='text-lg text-justify'>
						Whether you're embarking on a once-in-a-lifetime adventure or a routine
						business trip, our travel insurance plans are designed to safeguard you
						against unexpected emergencies abroad. From medical expenses to trip
						cancellations, we've got you covered, so you can explore the world with
						confidence.
					</p>
				</div>
				<div className='w-4/5 mx-auto my-8'>
					<h3 className='font-bold text-2xl'>Life Insurance</h3>
					<p className='text-lg text-justify'>
						Planning for the future is essential, and our life insurance policies
						provide financial security and protection for your loved ones. With
						customizable coverage options and competitive rates, we're committed to
						helping you build a solid foundation for your family's future, no matter
						what life may bring.
					</p>
				</div>
				<div className='bg-shade2/30'>
					<div className='w-4/5 mx-auto flex flex-col md:flex-row lg:flex-row lg:space-x-8'>
						<div className=' my-8'>
							<p className='text-xl md:text-2xl lg:text-3xl lg:text-justify font-bold text-shade10'>
								At Whole Insurance we're more than just an insurance provider –
								we're your trusted partner in protection. With years of experience
								and a dedication to excellence, we've earned a reputation for
								reliability, integrity, and exceptional customer service. Our
								mission is simple: to provide comprehensive insurance solutions that
								meet your needs and exceed your expectations.
							</p>
						</div>
						<div className='my-8'>
							<p className='text-xl lg:text-justify'>
								As a company founded on values of honesty, transparency, and
								compassion, we're committed to building lasting relationships with
								our clients based on trust and mutual respect. When you choose Whole
								Insurance, you're choosing a partner you can rely on, every step of
								the way.
							</p>
							<p className='text-xl text-justify'>
								Contact us today to learn more about our insurance products and how
								we can help you protect what matters most. Your peace of mind is our
								priority.
							</p>
						</div>
					</div>
				</div>
				<CallTo />
			</div>
		</Layout>
	);
};

export default AllCategories;
