import React from "react";
import { Link } from "gatsby"

const Header = () => {
	return (
		<nav className='bg-white py-2 md:py-4'>
			<div className='container px-4 mx-auto md:flex md:items-cente'>
				<div className='flex justify-between items-center'>
						<h1 className='font-bold uppercase text-xl'>
					<Link to="/">
							Yhonatan J. Iquiapaza
					</Link>
						</h1>
				</div>
				<div className='hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0'>
					<Link
						className='p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300'
						to='/'
					>
						<span>Home</span>
					</Link>
					<Link
						className='p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300'
						to='/research'
					>
						<span>Research</span>
					</Link>
					<Link
						className='p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300'
						to='/about'
					>
						<span>About</span>
					</Link>
					<Link
						className='p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300'
						to='/social'
					>
						<span>Social</span>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Header;