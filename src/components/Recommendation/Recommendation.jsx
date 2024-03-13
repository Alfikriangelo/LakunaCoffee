import React from 'react';
import img1 from '../../../src/assets/Sumatra-Sunrise-Espresso.png'
import img2 from '../../../src/assets/Gula-Aren-Delight.png'
import img3 from '../../../src/assets/Bali-Breeze-Brew.png'

const ServicesData = [
    {
        id: 1,
        img: img1,
        name: "Sumatra Sunrise Espresso",
        description: "Espresso khas Sumatra: pekat, rempah, sempurna untuk memulai hari Anda.",
        aosDelay:"100",
    },
    {
        id: 2,
        img: img2,
        name: "Gula Aren Delight",
        description: "Sensasi manis gula aren menciptakan kenikmatan yang lembut dan memikat.",
        aosDelay:"100",
    },
    {
        id: 3,
        img: img3,
        name: "Bali Breeze Brew",
        description: "Kopi berkualitas tinggi dengan sirup kelapa muda dan sentuhan jeruk Bali.",
        aosDelay:"100",
    },
]
const Recommendation = () => {
  return (
    <>
        <span id='rekomendasi'></span>
        <div className="py-10">
            <div className="container">
                <div className="text-center mb-20">
                    <h1 className="text-4xl font-bold font-cursive text-gray-800">
                        Kopi Terbaik Untuk Mu
                    </h1>
                </div>

                <div data-aos="fade-up" className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
                    {ServicesData.map(service => {
                        return (
                        <div key={service.name} className='rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px] group relative'>
                            <div className='h-[122px]'>
                                <img src={service.img} alt="" className='max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300' />
                            </div>
                            <div className='p-4 text-center'>
                                <h1 className='text-xl font-bold'>{service.name}</h1>
                                <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{service.description}</p>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
  )
}

export default Recommendation