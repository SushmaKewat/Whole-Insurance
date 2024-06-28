import { Footer } from 'flowbite-react';
import { BsFacebook, BsPinterest, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';

import Logo from '../assets/Images/14 cropped.png';
//import { MdLocationPin } from 'react-icons/md';

const FooterPage = () => {
	return (
		<Footer container className='w-full bg-shade10 rounded-none bottom-0'>
			<div className='mx-auto w-full lg:px-10'>
				<div className=' mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:gap-4'>
					<div className='mb-6 col-span-2 md:col-span-1 lg:col-span-1 text-white'>
						<Footer.Brand
							href=''
							src={Logo}
							alt='Whole Insurance'
							name='Whole Insurance'
							className='w-60 h-30 mb-4 bg-blue-gray-50'
						/>

						<div className='lg:mt-4 flex space-x-6 justify-start sm:mt-0 ml-0'>
							<Footer.Icon
								href='#'
								icon={BsFacebook}
								className='text-white text-lg'
							/>
							<Footer.Icon
								href='#'
								icon={BsInstagram}
								className='text-white text-lg'
							/>
							<Footer.Icon href='#' icon={BsTwitter} className='text-white text-lg' />
							<Footer.Icon
								href='#'
								icon={BsLinkedin}
								className='text-white text-lg'
							/>
							<Footer.Icon
								href='#'
								icon={BsPinterest}
								className='text-white text-lg'
							/>
						</div>
						<div className='mr-20 mt-6'>
							<p className='font-bold'>Contact Details</p>
							<p className='mb-8'>
								Main Address : 1670 North Service Rd E, Unit -107 Oakville ON L6H
								7G3, Canada
							</p>
							<p>Call Us : +1-6479630700</p>
							{/* <p>E-mail : info@insurance.com</p> */}
						</div>
					</div>
					<div>
						<Footer.Title title='Company' className='font-bold text-white mb-6' />
						<Footer.LinkGroup col>
							<Footer.Link href='/about' className='text-white text-lg'>
								About
							</Footer.Link>

							<Footer.Link href='/contact' className='text-white text-lg'>
								Contact
							</Footer.Link>
							<Footer.Link href='/privacy-policy' className='text-white text-lg'>
								Privacy Policy
							</Footer.Link>
							<Footer.Link href='/terms-of-service' className='text-white text-lg'>
								Terms of Service
							</Footer.Link>
						</Footer.LinkGroup>
					</div>
					<div>
						<Footer.Title title='Get Insurance' className='font-bold text-white' />
						<Footer.LinkGroup col>
							<Footer.Link
								href='/services/term-life-insurance'
								className='text-white text-lg'>
								Term Life Insurance
							</Footer.Link>

							<Footer.Link
								href='/services/disability-insurance'
								className='text-white text-lg'>
								Disablility Insurance
							</Footer.Link>
							<Footer.Link
								href='/services/mortgage-insurance'
								className='text-white text-lg'>
								Mortgage Insurance
							</Footer.Link>
							<Footer.Link
								href='/services/whole-life-insurance'
								className='text-white text-lg'>
								Whole Life Insurance
							</Footer.Link>
							<Footer.Link href='/services/super-visa' className='text-white text-lg'>
								Super Visa Insurance
							</Footer.Link>
						</Footer.LinkGroup>
					</div>
				</div>
				<Footer.Divider />
				<div className='w-full flex flex-col items-center sm:flex sm:items-center sm:justify-between m-2 font-bold'>
					<Footer.Copyright
						href='#'
						by='Whole Insurance. All Rights Reserved'
						year={2024}
						className='text-white'
					/>
				</div>
			</div>
		</Footer>
	);
};

export default FooterPage;
