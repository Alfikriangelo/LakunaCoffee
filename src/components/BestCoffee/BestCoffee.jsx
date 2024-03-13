import React from 'react';
import imageBanner from '../../../src/assets/best-coffee.png';
import bgTexture from '../../assets/coffee-texture.jpg';
import { MdWorkspacePremium } from "react-icons/md";
import { PiCoffeeFill } from "react-icons/pi";
import { FaCoffee } from "react-icons/fa";


const bgImage = {
    backgroundImage: `url(${bgTexture})`,
    backgroundColor: "#270c03",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%"
};
const BestCoffee = () => {
  return (
    <>
        <span id='terbaik'></span>
        <div style={bgImage}>
            <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0">
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    <div data-aos="zoom-in">
                        <img src={imageBanner} alt="" className='max-w-[450px] w-full mx-auto spin drop-shadow-xl'/>
                    </div>
                    <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                        <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold font-cursive'>
                            Lombok Lava Flow
                        </h1>
                        <p data-aos="fade-up" className='text-sm text-gray-500 tracking-wide leading-5'>
                        Dipengaruhi oleh keindahan pulau Lombok, Lava Flow adalah persembahan espresso yang menghadirkan kekayaan dan kegairahan kopi. Ditanam di lereng gunung yang subur, biji kopi pilihan ini menyuguhkan cita rasa penuh tubuh dengan sentuhan cokelat, diimbangi dengan kelembutan buah-buahan tropis. Setiap tegukan menghadirkan perpaduan sempurna antara kekuatan dan kelezatan, mengalir seperti lava yang menyusuri lereng gunung, menciptakan pengalaman kopi yang mendalam dan tak terlupakan. Sajikan kehangatan Lombok di setiap cangkir, dan biarkan Lava Flow memompa semangat Anda.
                        </p>
                        <div className='grid grid-cols-2 gap-6'>
                            <div className='space-y-5'>
                                <div data-aos="fade-up" className='flex items-center gap-3'>
                                    <MdWorkspacePremium className='text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100'/>
                                    <span>Kopi Premium</span>
                                </div>
                                <div data-aos="fade-up" data-aos-delay="300" className='flex items-center gap-3'>
                                    <PiCoffeeFill className='text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100'/>
                                    <span>Panas</span>
                                </div>
                                <div data-aos="fade-up" data-aos-delay="500" data-aos-offset="0" className='flex items-center gap-3'>
                                    <FaCoffee className='text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100'/>
                                    <span>Dingin</span>
                                </div>
                            </div>
                            <div data-aos="slide-left" className='border-l-4 border-primary/50 pl-6 space-y-3'>
                                <h1 className='text-2xl font-semibold font-cursive'>Coffee Lover</h1>
                                <p className='text-gray-500 text-sm'>
                                Untuk Anda, pecinta kopi yang mencari petualangan rasa, hadirkan kegairahan pulau Lombok dalam setiap tegukan Lava Flow kami. Dengan sentuhan cokelat dan kelembutan buah tropis, nikmati pengalaman kopi yang tak terlupakan. Jangan lewatkan kekuatan dan kelezatan yang mengalir begitu intens. Segera hadirkan semangat baru dalam setiap cangkir!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default BestCoffee