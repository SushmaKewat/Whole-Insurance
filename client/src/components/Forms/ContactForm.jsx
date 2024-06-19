/* eslint-disable no-unused-vars */
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import Image from '../../assets/Images/insurance.jpg';

const ContactForm = () => {
	const validationSchema = Yup.object({
		name: Yup.string().required('Name is required'),
		email: Yup.string().email('Invalid email format').required('Email is required'),
		phone: Yup.string().matches(
			/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
			'Invalid phone number format'
		),
		message: Yup.string().required('Message is required'),
		acceptedTerms: Yup.boolean().oneOf([true], 'Please accept the privacy policy'),
	});

	const handleSubmit = async (values, { setSubmitting, setStatus }) => {
		try {
			console.log(values);
			setSubmitting(true);
			const response = await axios
				.post(
					'https://insurance-website-server.vercel.app/api/data/add-client-details',
					values
				)
				.then(setStatus({ success: true }));

			console.log('Form data submitted successfully', response.data);
		} catch (error) {
			console.error(error);
			setStatus({ success: false, message: error.message });
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<div className='flex flex-col md:flex-col lg:flex-row'>
			<div className='w-full md:w-full lg:w-full'>
				<img src={Image} alt='Life Insurance' />
			</div>
			<div className='p-4 flex flex-col md:fex-col lg:flex-col items-center justify-center mx-auto w-3/4'>
				<Formik
					initialValues={{
						name: '',
						email: '',
						phone: '',
						message: '',
						acceptedTerms: false,
					}}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}>
					{({ values, handleChange, handleBlur, errors, touched, isSubmitting }) => (
						<Form>
							<p className='text-3xl font-bold mx-4'>Have a question?</p>
							<p className='text-3xl font-bold mx-4'>Feel free to ask</p>
							<div className='form-group m-4'>
								<Field
									type='text'
									name='name'
									id='name'
									placeholder='Name'
									className='px-4 py-2 w-full lg:w-2/3 border-2 rounded-md border-shade3 focus:border-shade8'
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								{touched.name && errors.name && (
									<ErrorMessage
										name='name'
										component='div'
										className='error text-red-400'
									/>
								)}
							</div>
							<div className='form-group m-4'>
								<Field
									type='email'
									name='email'
									id='email'
									placeholder='Email'
									className='px-4 py-2 w-full lg:w-2/3 border-2 rounded-md border-shade3 focus:border-shade8'
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								{touched.email && errors.email && (
									<ErrorMessage
										name='email'
										component='div'
										className='error text-red-400'
									/>
								)}
							</div>
							<div className='form-group m-4'>
								<Field
									type='tel'
									name='phone'
									id='phone'
									placeholder='Phone Number'
									className='px-4 py-2 w-full lg:w-2/3 border-2 rounded-md border-shade3 focus:border-shade8'
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								{touched.phone && errors.phone && (
									<ErrorMessage
										name='phone'
										component='div'
										className='error text-red-400'
									/>
								)}
							</div>
							<div className='form-group m-4'>
								<Field
									as='textarea'
									name='message'
									id='message'
									placeholder='Message'
									className='px-4 py-2 w-full lg:w-2/3 border-2 rounded-md border-shade3 focus:border-shade8'
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								{touched.message && errors.message && (
									<ErrorMessage
										name='message'
										component='div'
										className='error text-red-400'
									/>
								)}
							</div>
							<div className='form-group checkbox m-4 lg:w-2/3'>
								<Field
									type='checkbox'
									name='acceptedTerms'
									id='acceptedTerms'
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								<label htmlFor='acceptedTerms' className='ml-2'>
									I agree that my submitted data is being collected and stored.
									For further details on handling user data, see our{' '}
									<span className='text-shade8'>Privacy Policy</span>.
								</label>
								{touched.acceptedTerms && errors.acceptedTerms && (
									<ErrorMessage
										name='acceptedTerms'
										component='div'
										className='error'
									/>
								)}
							</div>
							<button
								type='submit'
								disabled={isSubmitting}
								className='bg-shade9 hover:bg-shade8 px-6 py-3 text-center text-white rounded-md lg:w-1/4 mx-4'>
								{isSubmitting ? 'Sending...' : 'Send'}
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default ContactForm;
