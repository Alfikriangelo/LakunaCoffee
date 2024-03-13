import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import FooterBg from '../../assets/coffee-footer.jpg';

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const bgImage = {
  backgroundImage: `url(${FooterBg})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Footer = () => {
  return (
    <div style={bgImage} className='text-white relative'>
      <div className='bg-black/40 min-h-[400px]'>
        <div className='container grid md:grid-cols-3 pb-20 pt-5 relative'>
          <div className='py-8 px-4'>
            <a href="#" className='font-semibold tracking-widest text-2xl sm:text-3xl font-cursive'>
              Lakuna
            </a>
            <p className='pt-4'>
                Where Coffee Dreams Come True
            </p>
            <div className='mt-5'>
              <a href="#" className='inline-block bg-[#3d2517] py-2 px-4 text-sm rounded-full' target='_blank'>
                Kunjungi Youtube kami
              </a>
            </div>
          </div>

          <div className='md:absolute md:top-0 md:right-0 md:mt-8 md:mr-4 md:mt-8 md:text-right'>
            <div className='py-8 px-4'>
              <h1 className='text-xl font-semibold mb-3'>
                Address
              </h1>
              <div>
                <p className='mb-3'>
                  Bandung, Indonesia
                </p>
                <p>
                  +62 812 xxxx xxx
                </p>
                <div className='space-x-3 mt-6'>
                  <a href="#">
                    <FaFacebook className='text-3xl inline-block hover:scale-105 duration-200' />
                  </a>
                  <a href="#">
                    <FaLinkedin className='text-3xl inline-block hover:scale-105 duration-200' />
                  </a>
                  <a href="#">
                    <FaInstagram className='text-3xl inline-block hover:scale-105 duration-200' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
