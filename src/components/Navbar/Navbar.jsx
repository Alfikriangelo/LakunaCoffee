import React from 'react';
import { FaCoffee } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Menus = [
  {
    id: 1,
    name: 'Beranda',
    link: '/#',
  },
  {
    id: 2,
    name: 'Rekomendasi',
    link: '/#rekomendasi',
  },
  {
    id: 3,
    name: 'Terbaik',
    link: '/#terbaik',
  },
];

const Navbar = () => {
  return (
    <div className='bg-gradient-to-r from-secondary to-secondary/90 text-white'>
      <div className='container py-2'>
        <div className='flex justify-between items-center gap-4'>
          <div data-aos='fade-down' data-aos-once='true'>
            <a to='#' className='font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 ml-5 tracking-wider font-cursive'>
              Lakuna
            </a>
          </div>

          <div data-aos='fade-down' data-aos-once='true' data-aos-delay='300' className='flex justify-between items-center gap-4'>
            <ul className='hidden sm:flex items-center gap-4'>
              {Menus.map((data, index) => {
                return (
                  <li key={index}>
                    <a href={data.link} className='inline-box text-base py-4 px-4 text-white/70 hover:text-white duration-200'>
                        {data.name}
                    </a>
                  </li>
                );
              })}
            </ul>
            <Link to='/menu'>
              <button className='bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-3'>
                Menu
                <FaCoffee className='text-xl cursor-pointer' />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
