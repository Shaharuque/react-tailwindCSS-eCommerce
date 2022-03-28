import React, { useState } from 'react';
import Link from '../link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', link: '/home' },
        { id: 2, name: 'About', link: '/about' },
        { id: 3, name: 'Products', link: '/products' },
        { id: 4, name: 'Contract', link: '/contracts' },
    ]
    return (
       <nav className='bg-indigo-500'>
        <div onClick={()=>setOpen(!open)} className="h-5 w-5  md:hidden">
            {open?<XIcon></XIcon>:<MenuIcon></MenuIcon>}
        </div>
      
        <ul className={`md:flex justify-end rounded-md p-3 md:static absolute duration-500 ease-in bg-indigo-500 w-50 text-white  ${open?'top-6':'top-[-120px]'}`}>
            {
                routes.map(route=><Link key={route.id} route={route}></Link>)
            }
        </ul>
       </nav>
    );
};

export default Navbar;