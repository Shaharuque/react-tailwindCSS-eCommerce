import React from 'react';
import Navbar from '../navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="md:text-4xl font-mono text-center ">Welcome to Tailwind eShop</h1>
        </div>
    );
};

export default Header;