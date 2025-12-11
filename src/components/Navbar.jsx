import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [activeItem, setActiveItem] = useState('home');
  const [activeSubItem, setActiveSubItem] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    setActiveSubItem('');
  };

  const handleSubItemClick = (subItemName) => {
    setActiveSubItem(subItemName);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchText);
    setShowSearch(false);
    setSearchText('');
  };

  return (
    <nav className="bg-white shadow-lg py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo Only */}
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/src/assets/images/logo.png" 
                alt="Logo" 
                className="h-13 w-auto mt-3"
              />
            </Link>
          </div>
          
          {/* Menu Items */}
          <div className="hidden md:flex space-x-8 relative">
            {/* Home Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('home')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`font-medium ${
                  activeItem === 'home' ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
                }`}
                onClick={() => handleItemClick('home')}
              >
                Home
              </button>
              {activeDropdown === 'home' && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48 z-10 border grid grid-cols-1">
                  <Link 
                    to="/"
                    className={`block px-4 py-2 text-sm ${
                      activeSubItem === 'home1' ? 'bg-orange-500 text-white' : 'hover:bg-gray-100'
                    }`}
                    onClick={() => handleSubItemClick('home1')}
                  >
                    Home Style 1
                  </Link>
                  <Link 
                    to="/home-style-2"
                    className={`block px-4 py-2 text-sm ${
                      activeSubItem === 'home2' ? 'bg-orange-500 text-white' : 'hover:bg-gray-100'
                    }`}
                    onClick={() => handleSubItemClick('home2')}
                  >
                    Home Style 2
                  </Link>
                  <Link 
                    to="/home-style-3"
                    className={`block px-4 py-2 text-sm ${
                      activeSubItem === 'home3' ? 'bg-orange-500 text-white' : 'hover:bg-gray-100'
                    }`}
                    onClick={() => handleSubItemClick('home3')}
                  >
                    Home Style 3
                  </Link>
                  
                  {/* Third Level */}
                  <div 
                    className="relative"
                    onMouseEnter={() => setActiveSubDropdown('thirdLevel')}
                    onMouseLeave={() => setActiveSubDropdown(null)}
                  >
                    <button 
                      className={`block w-full text-left px-4 py-2 text-sm flex justify-between items-center ${
                        activeSubItem.startsWith('third') ? 'bg-orange-500 text-white' : 'hover:bg-gray-100'
                      }`}
                    >
                      Third Level <span className="text-lg font-bold">›</span>
                    </button>
                    
                    {/* Third Level Sub Menu */}
                    {activeSubDropdown === 'thirdLevel' && (
                      <div className="absolute left-full top-0 bg-white shadow-lg rounded-lg py-2 w-48 z-20 border grid grid-cols-1">
                        <Link 
                          to="/level3-1"
                          className={`block px-4 py-2 text-sm ${
                            activeSubItem === 'level3-1' ? 'bg-orange-500 text-white' : 'hover:bg-gray-100'
                          }`}
                          onClick={() => handleSubItemClick('level3-1')}
                        >
                          Level 3
                        </Link>
                        <Link 
                          to="/level3-2"
                          className={`block px-4 py-2 text-sm ${
                            activeSubItem === 'level3-2' ? 'bg-orange-500 text-white' : 'hover:bg-gray-100'
                          }`}
                          onClick={() => handleSubItemClick('level3-2')}
                        >
                          Level 3
                        </Link>
                        <Link 
                          to="/level3-3"
                          className={`block px-4 py-2 text-sm ${
                            activeSubItem === 'level3-3' ? 'bg-orange-500 text-white' : 'hover:bg-gray-100'
                          }`}
                          onClick={() => handleSubItemClick('level3-3')}
                        >
                          Level 3
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* About */}
            <Link 
              to="/about" 
              className={`font-medium ${
                activeItem === 'about' ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
              }`}
              onClick={() => handleItemClick('about')}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`font-medium ${
                  activeItem === 'services' ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
                }`}
                onClick={() => handleItemClick('services')}
              >
                Services
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48 z-10 border grid grid-cols-1">
                  <Link 
                    to="/services" 
                    className={`block px-4 py-2 text-sm ${
                      activeSubItem === 'services-main' ? 'bg-orange-500 text-white' : 'hover:bg-gray-100'
                    }`}
                    onClick={() => handleSubItemClick('services-main')}
                  >
                    Services
                  </Link>
                  <Link 
                    to="/service-details" 
                    className={`block px-4 py-2 text-sm ${
                      activeSubItem === 'service-single' ? 'bg-orange-500 text-white' : 'hover:bg-gray-100'
                    }`}
                    onClick={() => handleSubItemClick('service-single')}
                  >
                    Service Single
                  </Link>
                </div>
              )}
            </div>

            {/* Pages Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('pages')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`font-medium ${
                  activeItem === 'pages' ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
                }`}
                onClick={() => handleItemClick('pages')}
              >
                Pages
              </button>
              {activeDropdown === 'pages' && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48 z-10 border grid grid-cols-1">
                  {['pricing', 'team', 'testimonials', '404'].map((page) => (
                    <Link 
                      key={page}
                      to={`/${page}`} 
                      className={`block px-4 py-2 text-sm capitalize ${
                        activeSubItem === page ? 'bg-orange-500 text-white' : 'hover:bg-gray-100'
                      }`}
                      onClick={() => handleSubItemClick(page)}
                    >
                      {page}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Blog Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('blog')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`font-medium ${
                  activeItem === 'blog' ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
                }`}
                onClick={() => handleItemClick('blog')}
              >
                Blog
              </button>
              {activeDropdown === 'blog' && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48 z-10 border grid grid-cols-1">
                  {['blog', 'blog-grid', 'blog-single'].map((blogItem) => (
                    <Link 
                      key={blogItem}
                      to={`/${blogItem}`} 
                      className={`block px-4 py-2 text-sm capitalize ${
                        activeSubItem === blogItem ? 'bg-orange-500 text-white' : 'hover:bg-gray-100'
                      }`}
                      onClick={() => handleSubItemClick(blogItem)}
                    >
                      {blogItem.replace('-', ' ')}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Contact */}
            <Link 
              to="/contact" 
              className={`font-medium ${
                activeItem === 'contact' ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
              }`}
              onClick={() => handleItemClick('contact')}
            >
              Contact
            </Link>
          </div>

          {/* Search Icon with Popup */}
          <div className="flex items-center relative">
            <button 
              className="text-gray-600 hover:text-orange-500 transition-colors"
              onClick={() => setShowSearch(!showSearch)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Search Popup */}
            {showSearch && (
              <div className="absolute top-full right-0 mt-2 w-80 bg-black rounded-lg shadow-xl z-50">
                <form onSubmit={handleSearchSubmit} className="flex">
                  <input
                    type="text"
                    placeholder="Search here..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="flex-1 bg-black text-white italic placeholder-gray-400 px-4 py-3 rounded-l-lg focus:outline-none"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-r-lg transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
