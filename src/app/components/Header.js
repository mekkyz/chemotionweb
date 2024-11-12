"use client";

import { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

const Header = ({ onSearch }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
    setSearchTerm('');
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#ecedee] py-2 shadow-md z-50">
      <div className="container mx-auto max-w-7xl flex items-center justify-between px-10">
        <div className="flex items-center">
          <Image
            src="Chemotion-ELN-V11.svg"
            alt="Logo"
            width={70}
            height={70}
            className="mr-8"
          />
          <nav className="flex space-x-6">
            <a href="#plan" className="text-gray-800 hover:text-gray-600 transition-colors">Plan</a>
            <a href="#collectnstore" className="text-gray-800 hover:text-gray-600 transition-colors">Collect & Store</a>
            <a href="#analyse" className="text-gray-800 hover:text-gray-600 transition-colors">Analyse</a>
            <a href="#publish" className="text-gray-800 hover:text-gray-600 transition-colors">Publish</a>
          </nav>
        </div>
        <div className="flex items-center space-x-6">
          <nav className="flex space-x-6">
            <a href="#demo" className="text-gray-800 hover:text-gray-600 transition-colors">Demo</a>
            <a href="#start" className="text-gray-800 hover:text-gray-600 transition-colors">Get Started</a>
            <a href="#help" className="text-gray-800 hover:text-gray-600 transition-colors">Helpdesk</a>
            <a href="#about" className="text-gray-800 hover:text-gray-600 transition-colors">Who we are</a>
          </nav>
          <div className="relative">
            <div
              onClick={!isSearchVisible ? toggleSearch : undefined}
              className={classNames(
                "flex items-center justify-center transition-all duration-300 ease-in-out rounded-lg shadow-md text-sm",
                isSearchVisible
                  ? "w-48 p-2 bg-white border border-gray-300 text-gray-800 focus-within:ring-2 focus-within:ring-blue"
                  : "w-20 p-2 bg-[#BBBFB6] text-white font-bold text-[16px] cursor-pointer hover:bg-gray-400"
              )}
            >
              {isSearchVisible ? (
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearch}
                  onBlur={() => setIsSearchVisible(false)}
                  autoFocus
                  placeholder="Search..."
                  className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-800"
                />
              ) : (
                "Search"
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
