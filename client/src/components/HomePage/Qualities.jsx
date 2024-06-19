/* eslint-disable react/no-unescaped-entities */
import { RiCustomerServiceLine } from 'react-icons/ri';
import { AiOutlineFileProtect } from 'react-icons/ai';
import { MdMiscellaneousServices } from 'react-icons/md';
import { LuFileBadge } from 'react-icons/lu';

const Qualities = () => {
	return (
		<div className='bg-shade6/20 text-black'>
			<div className='w-4/5 mx-auto py-8 flex flex-col md:flex-col lg:flex-row '>
				<div>
					<p className='text-black text-4xl my-4'>Why People Choose Us?</p>
					<p className='text-3xl md:text-4xl lg:text-5xl my-6'>
						At Whole Insurance we're more than just an insurance provider – we're your
						trusted partner in protection.
					</p>
					<button className='bg-shade10 text-white px-6 py-2 rounded-md hover:bg-shade8'>
						<a href='/about'>Learn More</a>
					</button>
				</div>
				<div className='my-6 mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0'>
					<div className=' bg-shade8 text-white p-4 px-6 py-4 md:py-6 lg:py-8'>
						<p className='font-bold text-xl flex flex-row'>
							<span className='mr-2 text-2xl'>
								<RiCustomerServiceLine />
							</span>
							Affordable Premiums
						</p>
						<p>
							Our insurance plans are competitively priced, making quality coverage
							accessible.
						</p>
					</div>
					<div className=' px-4 py-4 md:py-6 lg:py-8'>
						<p className='font-bold text-xl flex flex-row'>
							<span className='mr-2 text-2xl'>
								<AiOutlineFileProtect />
							</span>
							24/7 Support
						</p>
						<p>
							Our customer support team is available around the clock to assist you
							with any queries or claims.
						</p>
					</div>
					<div className=' px-4 py-4 md:py-6 lg:py-8 bg-shade8 text-white md:text-black md:bg-transparent lg:text-black lg:bg-transparent'>
						<p className='font-bold text-xl flex flex-row'>
							<span className='mr-2 text-2xl'>
								<MdMiscellaneousServices />
							</span>
							Financial Protection
						</p>
						<p>
							In the event of your death, your term insurance policy provides your
							beneficiaries with a lump-sum payment.
						</p>
					</div>
					<div className=' lg:bg-shade8 lg:text-white md:bg-shade8 md:text-white px-4 py-4 md:py-6 lg:py-8'>
						<p className='font-bold text-xl flex flex-row'>
							<span className='mr-2 text-2xl'>
								<LuFileBadge />
							</span>
							Expert Guidance
						</p>
						<p>
							Our team of experienced insurance professionals is dedicated to helping
							you navigate the complexities of insurance and find the right term
							policy for your unique circumstances.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Qualities;
