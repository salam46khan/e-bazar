import { IoCart} from 'react-icons/io5';
import banngerPic from '../assets/img/banner.png'
import { PiUsersThree } from 'react-icons/pi';
import { GrDeliver } from 'react-icons/gr';
import { BsCartPlus } from 'react-icons/bs';
const Banner = () => {
    return (
        <div className="container min-h-screen relative z-10 mx-auto flex flex-col md:flex-row items-center justify-center p-3">
            <div className="w-full md:w-1/2">
                <h1 className='text-4xl my-font md:text-6xl font-bold w-full max-w-2xl md:leading-16'>
                <span className='font-extrabold text-lime-400'>E-Bazar</span> - Your Everyday Online Marketplace
                </h1>
                <p className='py-3 md:py-5 text-xl w-full max-w-xl text-gray-300 md:text-2xl'>
                    Shop the latest products, best prices, and quick delivery right at your fingertips.
                </p>
                <button className="flex items-center cursor-pointer justify-center gap-2 bg-lime-400/20 text-lime-400 backdrop-blur py-2 px-4 rounded hover:bg-lime-400/5 transition-all duration-300 text-xl">
                    <IoCart className='text-2xl'/>
                    Start Shopping
                </button>
            </div>
            <div className="w-full md:w-1/2 relative">

                <div className='absolute z-20 top-1/4 text-lime-300  translate-y-10 right-1 md:right-1/6 bg-lime-600/10 flex items-center gap-2 backdrop-blur-xl py-2 px-4 rounded'>
                    <div>
                        <PiUsersThree className='text-4xl'/>
                    </div>
                    <div>
                        <p><span className='font-semibold'>100k+</span> <br /> Happy client</p>
                    </div>
                </div>

                <div className='absolute top-1/2 translate-y-10 text-lime-300 z-20 left-1 bg-lime-600/10 flex items-center gap-4 backdrop-blur-xl py-2 px-4 rounded'>
                    <div>
                        <GrDeliver className='text-3xl'/>
                    </div>
                    <p>Fast <br /> Delivery</p>
                </div>

                <div className='absolute z-20 md:bottom-10 -bottom-5 md:-translate-x-1/2 text-lime-300 right-1/4 bg-lime-600/10 flex items-center gap-2 backdrop-blur-xl py-2 px-4 rounded'>
                    <div>
                        <BsCartPlus className='text-4xl'/>
                    </div>
                    <div>
                        <p> <span className='font-semibold'>100+</span> <br /> Products</p>
                    </div>
                </div>

                <img className='w-full banner-drop-shadow' src={banngerPic} alt="a girl who sitting with some shoping bag" />
            </div>
        </div>
    );
};

export default Banner;