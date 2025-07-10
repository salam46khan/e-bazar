import { IoCart } from "react-icons/io5";
import { TbCurrencyTaka } from "react-icons/tb";
import { useParams } from "react-router";
import { useGetSingleProductQuery } from "../redux/api/baseApi";
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/feature/cart/cartSlice";

const ProductDetails = () => {
    const {id} = useParams<{ id: string }>()

    const {data: product, isLoading} = useGetSingleProductQuery(id!)
    // console.log(product);
    const dispatch = useAppDispatch();
    
    if(isLoading){
        return <p>loading.....</p>
    }
    return (
        <div className="container p-3 mx-auto">
            <div className="min-h-[40vh] flex items-center justify-center flex-col text-center">
                <h2 className="text-4xl">Product Details</h2>
            </div>
            <div className="pb-10 w-full max-w-5xl mx-auto flex flex-col items-stretch gap-5 justify-center md:flex-row">
                <div className="w-full md:w-1/2 bg-lime-400/10 rounded relative">
                    <div className="absolute h-[70%] w-[70%] top-1/2 left-1/2 -translate-1/2 rounded-full backdrop-blur-3xl bg-lime-400 card-effect"></div>
                    <img className="w-full relative z-20" src={product.data.photo_url} alt="" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col">
                    <p className="font-bold text-3xl">{product.data.title}</p>
                    <p className="text-5xl flex font-thin py-2 text-lime-400">
                        {product.data.price}
                        <TbCurrencyTaka />
                    </p>
                    <hr/>
                    <p className="text-xl py-2 flex-1 text-gray-400">{product.data.description}</p>

                    <button onClick={() => dispatch(addToCart(product.data))} className="flex items-center cursor-pointer justify-center gap-2 bg-lime-400/20 text-lime-400 backdrop-blur py-2 px-4 rounded hover:bg-lime-400/5 transition-all duration-300 text-xl ">
                        <IoCart className='text-2xl'/>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;