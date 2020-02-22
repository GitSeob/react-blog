import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';

const dummy = {
	id: 0,
	nickname: 'test',
	isLoggedIn: false
}

const Back = styled.div `
	width: 1rem;
	height: 1rem;
	display: flex;
	background-color: white;
	flex-direction: row,
	outline-style: none;
`;

const Aside = styled.aside `
	background-color: #363636;
	width: 0.2rem;
	height: 1rem;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	color: white;
`;

const Mainicon = styled.a `
	position: relative;
	width: 1rem;
	top: 50px;
	left: 50px;
	color: inherit;
`;

const Icondiv = styled.div `
	display: flex;
	flex-direction: row;
	color: inherit;
`;

const AppLayout = ({ children }) => {
	return (
		<>
			<Back>
				<Aside>
					<Mainicon herf="/">
						<Icondiv>
							icon
						</Icondiv>
					</Mainicon>
					<ul style={{color: 'inherit'}}>
						<Link></Link>
					</ul>
				</Aside>
			</Back>
		</>
	);
};

AppLayout.propTypes = {
	
};

export default AppLayout;