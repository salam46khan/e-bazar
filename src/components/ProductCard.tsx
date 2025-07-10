import { FaSearchPlus } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router";
import type { IProduct } from "../types/types";
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/feature/cart/cartSlice";

interface ProductCardProps {
    product: IProduct;
}

const ProductCard = ({product}: ProductCardProps) => {
    // console.log(product);
    const dispatch = useAppDispatch();
    
    return (
        <div className="bg-lime-600/25 overflow-hidden w-[200px] p-2 rounded-xl group transition-all duration-200 flex flex-col">
            <div className="h-[180px] relative">
                <div className="absolute h-[70%] w-[70%] top-1/2 left-1/2 -translate-1/2 rounded-full backdrop-blur-3xl bg-lime-400 card-effect"></div>
                <img className="h-[90%] relative z-10 w-[90%] object-cover group-hover:rotate-6 group-hover:scale-105 duration-300" src={product.photo_url} alt="product image here" />
            </div>
            <div className="py-3 flex-1">
                <p className="text-xl font-bold text-lime-400">{product.title}</p>
                <p className="text-2xl flex items-center"> <span>{product.price}</span><TbCurrencyTaka className="text-2xl"/></p>
            </div>
            <div className="flex justify-center items-center gap-2">
                <button onClick={() => dispatch(addToCart(product))} className="flex items-center cursor-pointer justify-center gap-2 bg-lime-400/20 text-lime-400 backdrop-blur py-2 px-4 rounded hover:bg-lime-400/5 transition-all duration-300 text-xl w-1/2">
                    <IoCart className='text-2xl'/>
                </button>
                <Link className="w-1/2" to={`/product/${product._id}`}>
                    <button className="flex items-center cursor-pointer justify-center gap-2 bg-lime-400/20 text-lime-400 backdrop-blur py-2 px-4 rounded hover:bg-lime-400/5 transition-all duration-300 text-xl w-full">
                        <FaSearchPlus  className='text-2xl'/>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;