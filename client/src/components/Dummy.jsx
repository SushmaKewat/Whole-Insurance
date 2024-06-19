/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Layout from './Layout';
import CallTo from './CallTo';
import Image from '../assets/Images/insurance.jpg';

const Dummy = ({ title, service, image }) => {
	return (
		<Layout title={title}>
			<h1 className='font-bold text-3xl md:text-5xl lg:text-6xl text-center my-6 p-4 mx-auto'>
				{title}
			</h1>
			<h2 className='font-bold text-lg md:text-xl lg:text-2xl text-shade9 text-center my-4 lg:my-6 p-4 mx-auto'>
				{service.subtitle}
			</h2>
			<div className='w-4/5 mx-auto text-justify flex flex-col md:flex-row lg:flex-row'>
				<div className='mr-6 space-y-6'>
					<p className='text-lg lg:text-xl'>{service.description.para1}</p>
					<p className='text-lg lg:text-xl'>{service.description.para2}</p>
				</div>
				<div className='flex items-center justify-center w-full p-2 text-white text-center md:ml-6 lg:ml-6'>
					<img src={image} alt='term life insurance' />
				</div>
			</div>
			<div className='bg-shade3/20'>
				<div className='text-lg w-4/5 my-6 py-6 mx-auto text-justify'>
					<h3 className='font-bold text-2xl mb-4 text-shade10'>{service.about.title}</h3>
					<div>
						{service.about.list.map((item) => (
							<div key={item.title}>
								<h3 className='font-bold text-xl '>{item.title}</h3>
								<p className='mb-4'>{item.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className='text-lg w-4/5 my-6 py-6 mx-auto text-justify items-center flex flex-col md:flex-col lg:flex-row'>
				<h3 className='font-bold md:text-6xl lg:text-6xl text-3xl text-wrap mb-4 mx-auto md:mr-10 lg:mr-10 md:w-2/3 lg:w-2/3 text-shade10'>
					{service.services.title}
				</h3>
				<div>
					{service.services.list.map((item) => (
						<div key={item.title}>
							<h3 className='font-bold text-xl '>{item.title}</h3>
							<p className='mb-4'>{item.description}</p>
						</div>
					))}
				</div>
			</div>
			<div className='w-full flex justify-center items-center text-white text-center py-8'>
				<img src={Image} alt='insurance' className='object-cover' />
			</div>
			<div className='bg-shade3/20  flex flex-col md:flex-col lg:flex-row'>
				<div className='w-4/5 mx-auto flex flex-col md:flex-row lg:flex-row'>
					<div className=' my-6 py-6 text-justify '>
						<div className='flex flex-col md:flex-row lg:flex-row md:space-x-10 lg:space-x-10'>
							<div className='md:w-2/3 lg:w-2/3'>
								<h3 className='font-bold text-3xl mb-4'>{service.contact.title}</h3>
								<p className='text-xl md:text-2xl lg:text-2xl mb-4'>
									{service.contact.description.para2}
								</p>
							</div>
							<p className='text-2xl md:text5xl lg:text-6xl font-bold text-shade10 md:ml-8 lg:ml-8'>
								{service.contact.description.para1}
							</p>
						</div>
					</div>
				</div>
			</div>
			<CallTo />
		</Layout>
	);
};

export default Dummy;
