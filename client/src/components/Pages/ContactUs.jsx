import Layout from '../Layout';
import ContactForm from '../Forms/ContactForm';
import CallTo from '../CallTo.jsx';

import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosTime } from 'react-icons/io';

const ContactUs = () => {
	return (
		<Layout title={'Contact Us'}>
			<h2 className='font-bold text-3xl mb-4 w-full bg-shade9 text-white text-center p-6'>
				Contact Details
			</h2>
			<div className='flex flex-col md:flex-row lg:flex-row  mx-auto my-8 justify-around'>
				<div className='flex flex-col md:flex-row lg:flex-row md:mx-6 lg:mx-6 md:px-4 lg:px-4 justify-around'>
					<div>
						<ContactForm />
					</div>
					<div className='mx-4 px-4 mt-8 md:mt-0 lg:mt-0'>
						<div className='mb-4'>
							<p className='font-bold text-xl flex flex-row text-shade9'>
								<FaPhoneAlt />
								<span className='ml-2'>Telephone</span>
							</p>
							<p className='text-lg'>+1 905-582-0178</p>
						</div>
						{/* <div className='mb-4'>
						<p className='font-bold text-xl flex flex-row text-shade9'>
							<MdEmail />
							<span className='ml-2'>Email</span>
						</p>
						<p className='text-lg'>whole@insurance.com</p>
					</div> */}
						<div className='mb-4'>
							<p className='font-bold text-xl flex flex-row text-shade9'>
								<FaLocationDot />
								<span className='ml-2'>Location</span>
							</p>
							<p className='text-lg'>
								1670 North Service Rd E, Unit -107 Oakville ON L6H 7G3, Canada
							</p>
						</div>
						<div className='mb-4'>
							<p className='font-bold text-xl flex flex-row text-shade9'>
								<IoIosTime />
								<span className='ml-2'>Our Services</span>
							</p>
							<p className='text-lg'>1. Super Visa Insurance</p>
							<p className='text-lg'>2. Term Life Insurance </p>
							<p className='text-lg'>3. Whole Life Insurance</p>
							<p className='text-lg'>4. Critical Illness Insurance </p>
							<p className='text-lg'>5. Mortgage Insurance </p>
							<p className='text-lg'>7. RRSP </p>
							<p className='text-lg'>8. Disability Insurance </p>
						</div>
					</div>
				</div>
			</div>
			<CallTo />
		</Layout>
	);
};

export default ContactUs;
