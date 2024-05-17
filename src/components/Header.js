import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const Header = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleSubMenuToggle = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const handleSubMenuClose = () => {
    setIsSubMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold"><img src='src/images/logo.png.webp' alt='logo'/></div>
        <nav className="relative flex-1">
          <ul className="flex justify-center space-x-8">
            <li><a href="#" className="hover:text-[#633863]">Home</a></li>
            <li 
              className="relative group"
              onMouseEnter={handleSubMenuToggle}
              onMouseLeave={handleSubMenuClose}
            >
              <a href="#" className="hover:text-[#633863]">Bands & Entertainment</a>
              <div 
                className={`fixed left-0 right-0 top-16 bg-white shadow-md ${isSubMenuOpen ? 'block' : 'hidden'}`}
              >
                <div className="container mx-auto p-4">
                  <div className="flex justify-center">
                    <div className="grid grid-cols-2 gap-x-12 text-center">
                      {/* Heading for Bands */}
                      <div className="col-span-2 font-semibold text-lg mb-4 text-left">Bands</div>
                      {/* Submenu Items for Bands */}
                      <div>Submenu 1 Item 1</div>
                      <div>Submenu 1 Item 2</div>
                      <div>Submenu 1 Item 3</div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-12 text-center">
                      {/* Heading for Entertainment */}
                      <div className="col-span-2 font-semibold text-lg mb-4 text-left">Entertainment</div>
                      {/* Submenu Items for Entertainment */}
                      <div>Submenu 2 Item 1</div>
                      <div>Submenu 2 Item 2</div>
                      <div>Submenu 2 Item 3</div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li><a href="#" className="hover:text-[#633863]">About</a></li>
            <li><a href="#" className="hover:text-[#633863]">Contact Us</a></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="bg-[#633863] text-white px-4 py-2 rounded">Enquire</button>
          <button>
            <FiSearch size={24} className="hover:text-[#633863]" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
