import { TbCurrencyTaka } from "react-icons/tb";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import type { RootState } from "../redux/store";
import CartProduct from "./CartProduct";
import { clearCart } from "../redux/feature/cart/cartSlice";

const SideBar = () => {
    const items = useAppSelector((state: RootState) => state.cart.cartItems);

    const totalAmount = items.reduce((accumulator, item) => accumulator + item.price * item.quantity, 0);
    const dispatch = useAppDispatch()
    
    const handleCheckOut = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(clearCart())
        const dialog = document.getElementById("my_modal_3") as HTMLDialogElement;
        dialog.close();
    }

    const handleCheckOutBack = () => {
        const dialog = document.getElementById("my_modal_3") as HTMLDialogElement;
        dialog.close();
    }

    return (
        <div className="w-full p-3 bg-white/20 shadow-md backdrop-blur ">
            <p className="text-center text-white text-3xl font-bold">Product Summary</p>
            <div className="flex flex-col gap-3 mt-6">
                {
                    items.length === 0 ? <p className="mt-4 text-center text-xl">Cart is empty</p> : items.map( item => <CartProduct key={item._id} product={item} />) 
                }
            </div>
            <div className="mt-5">
                <p className="text-2xl font-bold">Totol Price: <span className="text-lime-500">{totalAmount}</span><TbCurrencyTaka className="inline-block" /> </p>

                <div>
                    <button onClick={()=>(document.getElementById('my_modal_3') as HTMLDialogElement).showModal()} className={`flex items-center cursor-pointer justify-center gap-2 bg-black/70 text-lime-400 backdrop-blur py-2 px-4 rounded hover:bg-lime-400/5 transition-all duration-300 text-xl w-full mt-4`} >Chekout</button>

                    <dialog id="my_modal_3" className=" modal">
                        <div className="modal-box relative bg-lime-800/50">
                            <button onClick={handleCheckOutBack} className="absolute right-2 top-2 text-lime-400 backdrop-blur py-2 rounded hover:bg-lime-400/5 bg-lime-400/20 h-10 w-10 transition-all duration-300 text-xl cursor-pointer">X</button>
                            <form className="mt-5" onSubmit={handleCheckOut}>
                                <div>
                                    <label>Name</label>
                                    <input type="text" className="w-full bg-black/40 p-3 rounded" placeholder="Name" name="name" />
                                </div>
                                <div className="py-4">
                                    <label className="flex justify-between items-center">Email <span>*</span></label>
                                    <input type="email" className="w-full bg-black/40 p-3 rounded" placeholder="Email" name="email" required />
                                </div>
                                <div>
                                    <label className="flex justify-between items-center">Address <span>*</span></label>
                                    <input type="text" className="w-full bg-black/40 p-3 rounded" placeholder="Address" name="address" required />
                                </div>
                                <button className="flex items-center cursor-pointer justify-center gap-2 bg-black/70 text-lime-400 backdrop-blur py-2 px-4 rounded hover:bg-lime-400/5 transition-all duration-300 text-xl w-full mt-5" type="submit">Submit</button>
                            </form>
                        </div>
                    </dialog>
                </div>


            </div>
        </div>
    );
};

export default SideBar;