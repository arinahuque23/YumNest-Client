import  { useState } from 'react';
import {  Link  } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800">YumNest</Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link 
              to="/" 
              exact
              className="text-gray-600 hover:text-gray-800 py-2 px-3 rounded"
              activeClassName="bg-orange-500 text-white"
            >
              Home
            </Link>
            <Link 
              to="/order" 
              className="text-gray-600 hover:text-gray-800 py-2 px-3 rounded"
              activeClassName="bg-orange-500 text-white"
            >
              Order
            </Link>
            <Link 
              to="/login" 
              className="text-gray-600 hover:text-gray-800 py-2 px-3 rounded"
              activeClassName="bg-orange-500 text-white"
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="text-gray-600 hover:text-gray-800 py-2 px-3 rounded"
              activeClassName="bg-orange-500 text-white"
            >
              Registration
            </Link>
            <Link 
              to="/profile" 
              className="text-gray-600 hover:text-gray-800 py-2 px-3 rounded"
              activeClassName="bg-orange-500 text-white"
            >
              Profile
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-800 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <Link 
            to="/" 
            exact
            className="block py-2 px-4 text-gray-600 hover:bg-gray-100"
            activeClassName="bg-orange-500 text-white"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/order" 
            className="block py-2 px-4 text-gray-600 hover:bg-gray-100"
            activeClassName="bg-orange-500 text-white"
            onClick={() => setIsOpen(false)}
          >
            Order
          </Link>
          <Link 
            to="/login" 
            className="block py-2 px-4 text-gray-600 hover:bg-gray-100"
            activeClassName="bg-orange-500 text-white"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          <Link 
            to="/register" 
            className="block py-2 px-4 text-gray-600 hover:bg-gray-100"
            activeClassName="bg-orange-500 text-white"
            onClick={() => setIsOpen(false)}
          >
            Registration
          </Link>
          <Link 
            to="/profile" 
            className="block py-2 px-4 text-gray-600 hover:bg-gray-100"
            activeClassName="bg-orange-500 text-white"
            onClick={() => setIsOpen(false)}
          >
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
