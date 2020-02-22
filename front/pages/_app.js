import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const App = ({ Component }) => {
	return (
		<>
			<Head>
				<title>anjoy's blog</title>
			</Head>
			<AppLayout>
				<Component />
			</AppLayout>
		</>
	);
};

App.propTypes = {
	
};

export default App;