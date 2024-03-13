import React from 'react'
import img1 from '../../assets/best-coffee.png'
import img2 from '../../assets/Sumatra-Sunrise-Espresso.png'
import img3 from '../../assets/Gula-Aren-Delight.png'
import img4 from '../../assets/Bali-Breeze-Brew.png'

import img5 from '../../assets/pie.png'
import img6 from '../../assets/croissant.png'
import img7 from '../../assets/cake.png'

const KopiData = [
    {
        id: 1,
        img: img1,
        name: "Lombok Lava Flow",
        description: "Kopi yang kaya dan lembut dengan sentuhan lumeran keju.",
        price: 45000,
        best: "Best Seller",
        aosDelay:"100",
    },
    {
        id: 2,
        img: img2,
        name: "Sumatra Sunrise Espresso",
        description: "Espresso khas Sumatra: pekat, rempah, sempurna untuk memulai hari Anda.",
        price: 29000,
        aosDelay:"100",
    },
    {
        id: 3,
        img: img3,
        name: "Gula Aren Delight",
        description: "Sensasi manis gula aren menciptakan kenikmatan yang lembut dan memikat.",
        price: 35000,
        aosDelay:"100",
    },
    {
        id: 4,
        img: img4,
        name: "Bali Breeze Brew",
        description: "Kopi berkualitas tinggi dengan sirup kelapa muda dan sentuhan jeruk Bali.",
        price: 32000,
        aosDelay:"100",
    },
]

const MakananData = [
    {
        id: 1,
        img: img5,
        name: "Pistachio Passion Pie",
        description: "Kesempurnaan rasa dengan kulit renyah dan isian buah yang manis.",
        price: 29000,
        best: "Best Seller",
        aosDelay:"100",
    },
    {
        id: 2,
        img: img6,
        name: "Croissant",
        description: "Croissant lembut dengan rasa butter melimpah.",
        price: 35000,
        aosDelay:"100",
    },
    {
        id: 3,
        img: img7,
        name: "Chocolate Cake",
        description: "Cake sponge lembut dengan krim vanilla dan potongan strawberry segar.",
        price: 32000,
        aosDelay:"100",
    },
]


const ListMenu = () => {
  return (
    <>
        <div className="container">
            <div className="text-center mb-20">
                <h1 className="text-4xl font-bold font-cursive text-gray-800 mt-10">
                    Menu
                </h1>
            </div>

            <div className="">
                <h1 className="text-4xl font-bold font-cursive text-gray-800 mt-10 text-center mb-20">
                    Kopi
                </h1>
            </div>

            
            <div data-aos="fade-up" className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
                {KopiData.map((menu, index) => (
                    <div key={index.id} className='rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px] group relative mb-12 mt-5'>
                        <div className='h-[122px]'>
                            <img src={menu.img} alt="" className='max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300' />
                        </div>
                        <div className='p-4 text-center'>
                            <h1 className='text-xl font-bold'>{menu.name}</h1>
                            <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{menu.description}</p>
                        </div>
                        <div className='grid grid-cols-2 mb-4'>
                            <div className=''>
                                <a href="" className='ml-4 font-semibold tracking-widest text-xl sm:text-xl font-cursive text-gold'>
                                {menu.best}
                                </a>
                            </div>
                            <div className='text-right mr-4'>
                                <p className='text-xl font-bold text-primary group-hover:text-white duration-300'>
                                Rp.{menu.price}
                                </p>
                            </div>
                        </div>
            
                    </div>
                ))}
            </div>

            <div className="">
                <h1 className="text-4xl font-bold font-cursive text-gray-800 mt-10 text-center mb-20">
                    Makanan
                </h1>
            </div>


            <div data-aos="fade-up" className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
                {MakananData.map((menu, index) => (
                    <div key={index.id} className='rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px] group relative mb-12 mt-10'>
                        <div className='h-[122px]'>
                            <img src={menu.img} alt="" className='max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300' />
                        </div>
                        <div className='p-4 text-center'>
                            <h1 className='text-xl font-bold'>{menu.name}</h1>
                            <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{menu.description}</p>
                        </div>
                        <div className='grid grid-cols-2 mb-4'>
                            <div className=''>
                                <a href="" className='ml-4 font-semibold tracking-widest text-xl sm:text-xl font-cursive text-gold'>
                                {menu.best}
                                </a>
                            </div>
                            <div className='text-right mr-4'>
                                <p className='text-xl font-bold text-primary group-hover:text-white duration-300'>
                                Rp.{menu.price}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default ListMenu