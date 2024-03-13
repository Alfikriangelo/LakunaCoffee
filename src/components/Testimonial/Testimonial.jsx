import React from 'react'
import Slider from 'react-slick'


const TestimonialData = [
    {
      id: 1,
      name: "Pak Agus, Penggemar Kopi",
      text: "Lombok Lava Flow meledakkan cita rasa dengan sempurna! Kombinasi kopi pilihan dari Lombok dengan lava kelapa muda menciptakan minuman mengalir yang menyegarkan. Cocok dinikmati di pantai atau di bawah sinar matahari",
      img: "https://picsum.photos/101/101",
    },
    {
      id: 2,
      name: "Ibu Sari, Penikmat Kopi",
      text: "Bali Breeze Brew memukau dengan keunikannya! Kopi Bali berkualitas tinggi dipadukan dengan sirup kelapa muda dan serutan kulit jeruk Bali, menciptakan minuman eksotis yang menyegarkan. Pengalaman pulau Bali dalam setiap tegukan yang tak terlupakan",
      img: "https://picsum.photos/102/102",
    },
    {
      id: 3,
      name: "Maya, Mahasiswa",
      text: "Gula Aren Delight memanjakan lidah dengan sempurna! Rasa gula aren yang lembut menyatu dengan kopi pilihan, menciptakan harmoni rasa hangat di setiap tegukan. Sebuah pelukan manis yang tak terlupakan",
      img: "https://picsum.photos/104/104",
    },
    {
      id: 4,
      name: "Pak Dharma, Pecinta Espresso",
      text: "Sumatra Sunrise Espresso adalah kekuatan kopi Sumatra dalam satu cangkir espresso. Rasa yang kuat dan kaya dengan sentuhan coklat hitam yang lembut. Pengalaman kopi intens untuk pecinta espresso sejati!",
      img: "https://picsum.photos/103/103",
    },
  ];

const Testimonial = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
              breakpoint: 10000,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
              },
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
    };

  return (
    <div className='py-14 mb-10'>
        <div className='container'>
            <div data-aos="fade-up" className='text-center mb-10'>
                <h1 className='text-4xl font-bold font-cursive text-gray-800'>
                    Testimoni
                </h1>
            </div>

            <div data-aos="zoom-in">
                <Slider {...settings}>
                    {TestimonialData.map((data, index) => {
                        return(
                            <div className='my-6' key={data.id}>
                                <div className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative max-w-[400px] max--[300px]'>
                                    <div className='mb-4'>
                                        <img src={data.img} alt="" className='rounded-full w-20 h-20'/>
                                    </div>

                                    <div className='flex flex-col items-center gap-4'>
                                        <div className='space-y-3'>
                                            <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-5'>
                                                {data.text}
                                            </p>
                                            <h1 className='text-xl font-bold text-black/80 font-cursive pb-2'>
                                                {data.name}
                                            </h1>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Testimonial