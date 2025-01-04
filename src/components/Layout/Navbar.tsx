import React from 'react';
import { Link } from 'react-router-dom';
import { ModeToggle } from '../mode-toggle';

const Navbar = () => {
    return (
        <div>
            <nav className='max-w-7xl mx-auto h-16 flex items-center gap-3 px-5 '>
                <div className='flex items-center '>
                    <img src="https://i.ibb.co.com/jMzqX86/pngtree-stylish-task-list-app-graphic-png-image-14420771-removebg-preview.png" className='w-[100%]  h-[50px]' alt="Logo" />   <span className='font-bold ml-2'>Task</span> Master
                </div>

                <Link to="/">Task</Link>
                <Link to="/users">Users</Link>
                <div className='ml-auto'>
                    <ModeToggle />
                </div>

            </nav>
        </div>
    );
};

export default Navbar;