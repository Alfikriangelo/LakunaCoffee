import React from 'react'
import AppStoreImg from '../../assets/app_store.png';
import PlayStoreImg from '../../assets/play_store.png';
import BgPng from '../../assets/coffee-appstore.jpg';

const backgroundStyle = {
    backgroundImage: `url(${BgPng})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
}

const Appstore = () => {
  return (
    <>
        <div className='py-14' style={backgroundStyle}>
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
                    <div data-aos="fade-up" className='space-y-6 max-w-xl mx-auto'>
                        <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold pl-3 text-white/90'>
                            Aplikasi Lakuna Coffee telah tersedia di Playstore dan Appstore
                        </h1>
                        <div className='flex flex-wrap justify-center sm:justify-start items-center'>
                            <a href="#">
                                <img src={AppStoreImg} alt="" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"/>
                            </a>
                            <a href="#">
                                <img src={PlayStoreImg} alt="" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Appstore