//import React from 'react';
//import Hero from '../Hero';
import HomeSection from '../HomePage/HomeSection.jsx';
import InsurancePlans from '../HomePage/InsurancePlans.jsx';
import Welcome from '../HomePage/Welcome.jsx';
import Qualities from '../HomePage/Qualities.jsx';
import Steps from '../HomePage/Steps.jsx';
import Layout from '../Layout.jsx';
import ContactForm from '../Forms/ContactForm.jsx';

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
