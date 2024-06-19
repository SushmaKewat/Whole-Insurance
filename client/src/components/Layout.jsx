import React from 'react';

import { Helmet } from 'react-helmet';
import Hero from './Hero';
import FooterPage from './FooterPage';

const Layout = ({ children, title, description, keywords, author }) => {
	return (
		<div>
			<Helmet>
				<meta charSet='utf-8' />
				<meta name='description' content={description} />
				<meta name='keywords' content={keywords} />
				<meta name='author' content={author} />
				<title>{title}</title>
			</Helmet>
			<Hero />
			<main style={{ minHeight: '75vh' }}>{children}</main>
			<FooterPage />
		</div>
	);
};

Layout.defaultProps = {
	title: 'Insurance',
	description: 'Insurance website',
	keywords: 'insurance, life insurance',
	author: 'Sushma',
};

export default Layout;
