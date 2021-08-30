import React from "react";
import Header from "../components/header";
import { Helmet } from 'react-helmet';
const About = () => {
	return (
		<main>
			<Helmet >
        <meta charSet='utf-8'/>
        <title>About|Yhonatan</title>
        <link rel='canonical' ref='https://yhonatanjesus.com/about'/>
			</Helmet>
			<Header>

			</Header>
			<h1>Hello About</h1>
		</main>		
	);
};

export default About;