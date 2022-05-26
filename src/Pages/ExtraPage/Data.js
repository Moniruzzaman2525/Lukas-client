import React from 'react';

const Bannar = () => {
    return (
        <div class="carousel bg-slate-700 md:h-screen w-full">
            <div id="slide1" class="carousel-item  relative w-full">

                <div className='md:flex items-center mx-auto'>
                    <div className='order-2'>
                        <img className='w-2/4 mb-10 md:w-2/3 mt-10 mx-auto' src="https://htmldemo.net/lukas/lukas/assets/img/slider/slider-2-2.png" alt="" />
                    </div>
                    <div className='order-1 text-justify text-white mt-10'>
                        <h2 className='text-xl md:text-3xl text-center'>New technology $ build</h2>
                        <h2 className='text-2xl md:text-6xl text-center font-extrabold'>WHEELES $ FIRES <br />COLLECTION</h2>
                    </div>

                </div>
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
                <div className='md:flex items-center mx-auto'>
                    <div className='order-2'>
                        <img className='w-2/4 mb-10 md:w-2/3 mt-10 mx-auto' src="https://htmldemo.net/lukas/lukas/assets/img/slider/slider-2-1.png" alt="" />
                    </div>
                    <div className=' order-1 text-justify text-white mt-10'>
                        <h2 className='text-xl md:text-3xl text-center'>New technology $ build</h2>
                        <h2 className='text-2xl md:text-5xl font-extrabold text-center'>WHEELES & FIRES<br />COLLECTION</h2>
                    </div>

                </div>
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
            </div>
            {/* <div id="slide3" class="carousel-item relative w-full">
                <img src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6" class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <a href="#slide4" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" class="carousel-item relative w-full">
                <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" class="btn btn-circle">❮</a>
                    <a href="#slide1" class="btn btn-circle">❯</a>
                </div>
            </div> */}
        </div>
    );
};

export default Bannar;