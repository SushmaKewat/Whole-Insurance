//import React from 'react';
//import Hero from '../Hero';
import HomeSection from '../HomePage/HomeSection';
import InsurancePlans from '../HomePage/InsurancePlans';
import Welcome from '../HomePage/Welcome';
import Qualities from '../HomePage/Qualities';
import Steps from '../HomePage/Steps';
import Layout from '../Layout';
import ContactForm from '../Forms/ContactForm';

const LandingPage = () => {
	return (
		<Layout title={'Insurance | Home'}>
			<HomeSection />
			<InsurancePlans />
			<Welcome />
			<Qualities />
			<Steps />
			{/* <Testimonials /> */}
			<ContactForm />
		</Layout>
	);
};

export default LandingPage;
