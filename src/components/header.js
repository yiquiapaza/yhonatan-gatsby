import React, { useState } from 'react';
import { Link } from 'gatsby';

const Header = () => {
	const [open, setOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6 fixed w-full z-10 pin-t">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <Link
          className="no-underline hover:text-white hover:no-underline"
          to="/"
        >
          <span className="text-2x1 pl-2">
            <i className="em em-grinning"></i>Yhonatan Iquiapaza
          </span>
        </Link>
      </div>
      <div className="block lg:hidden md:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-grey border-grey-dark hover:text-white hover:border-white" onClick={() => setOpen(!open)}>
          <svg className='fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg'>
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0">
        <ul className="list-reset lg:flex justify-end flex-1 items-center">
          <li className="mr-3">
            <Link
              className="inline-block py-2 px-4 text-white no-underline"
              to="/"
            >
              <span>Home</span>
            </Link>
          </li>
          <li className="mr-3">
            <Link
              className="inline-block py-2 px-4 text-white no-underline"
              to="/research"
            >
              <span>Research</span>
            </Link>
          </li>
          <li>
            <Link
              className="inline-block py-2 px-4 text-white no-underline"
              to="/about"
            >
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link
              className="inline-block py-2 px-4 text-white no-underline"
              to="/social"
            >
              <span>Social</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
