import React, { useState } from 'react';
import Image from 'next/image';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="relative">
            <Image 
                src="menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="inline-block cursor-pointer lg:hidden ml-2"
                onClick={toggleDropdown}
            />
            {isOpen && (
                <div className="dropdown-menu bg-white rounded shadow-lg py-2 absolute right-0 mt-2 max-w-screen overflow-hidden">
                    <a href="#hero" className="block px-4 py-2 text-green-500 hover:bg-green-500 hover:text-white" onClick={toggleDropdown}>Home</a>
                    <a href="#camp" className="block px-4 py-2 text-green-500 hover:bg-green-500 hover:text-white" onClick={toggleDropdown}>Camp</a>
                    <a href="#guide" className="block px-4 py-2 text-green-500 hover:bg-green-500 hover:text-white" onClick={toggleDropdown}>Guide</a>
                    <a href="#features" className="block px-4 py-2 text-green-500 hover:bg-green-500 hover:text-white" onClick={toggleDropdown}>Features</a>
                    <a href="#getapp" className="block px-4 py-2 text-green-500 hover:bg-green-500 hover:text-white" onClick={toggleDropdown}>GetApp</a>
                </div>
            )}
        </nav>
    );
};

export default Dropdown;