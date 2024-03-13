import React from 'react';
import { IoMdHome } from "react-icons/io";
import { Link } from 'react-router-dom';

const NavbarMenu = () => (
  <div className='bg-gradient-to-r from-secondary to-secondary/90 text-white container py-2 flex justify-between items-center gap-4' data-aos='fade-down' data-aos-once='true'>
    <Link to='/' className='font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 ml-5 tracking-wider font-cursive'>Lakuna</Link>
    <Link to='/'>
      <button className='bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-3'>
        Beranda
        <IoMdHome className='text-xl cursor-pointer' />
      </button>
    </Link>
  </div>
);

export default NavbarMenu;
