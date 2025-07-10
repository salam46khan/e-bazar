import { FaMinus, FaPlus } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import type { ICardItem } from "../types/types";
import { useAppDispatch } from "../redux/hooks";
import { decreaseQuantity, increaseQuantity } from "../redux/feature/cart/cartSlice";

interface ProductCardProps {
    product: ICardItem;
}

const CartProduct = ({product}: ProductCardProps ) => {
    const dispatch = useAppDispatch()
    return (
        <div className="flex items-center gap-2 bg-black/70 rounded p-3">
            <div className="w-16">
                <img className="w-full" src={product.photo_url} alt="cart product image here" />
            </div>
            <p className="flex-1 text-xl">{product.title}</p>
            <p className="text-xl text-lime-500">{product.price}<TbCurrencyTaka className="inline-block" /> </p>
            <div className="flex gap-1 items-center">
                <button onClick={()=>dispatch(increaseQuantity(product._id!))} className="flex items-center cursor-pointer justify-center gap-2 bg-lime-400/20 text-lime-400 backdrop-blur p-2 rounded hover:bg-lime-400/5 transition-all duration-300 w-full"> <FaPlus  /> </button>
                <span className="text-2xl">{product.quantity}</span>
                <button onClick={()=>dispatch(decreaseQuantity(product._id!))} className="flex items-center cursor-pointer justify-center gap-2 bg-lime-400/20 text-lime-400 backdrop-blur p-2 rounded hover:bg-lime-400/5 transition-all duration-300 w-full"> <FaMinus /> </button>
            </div>
        </div>
    );
};

export default CartProduct;