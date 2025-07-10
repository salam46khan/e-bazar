import { Link } from "react-router";

const Footer = () => {
    return (
        <div className="container mx-auto p-3 py-10">
            <hr className=""/>
            <div className="flex flex-col md:flex-row justify-center mt-10 ">
                <div className="w-full md:w-2/5 p-3">
                    <p className="font-bold text-3xl text-lime-400">E-Bazar</p>
                    <p className="text-xl mt-4 text-gray-300">
                        E-Bazar is your trusted online marketplace, offering a wide range of products at the best prices. We aim to deliver a seamless shopping experience with fast delivery and secure payment options.
                    </p>
                </div>
                <div className="w-full md:w-1/5 p-3">
                    <p className="font-bold text-xl mb-2">Quick Links</p>
                    <ul className="flex flex-col text-xl text-gray-400">
                        <li>
                            <Link to={'/'}>About Us</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Contact</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Terms & Conditions</Link>
                        </li>
                        <li>
                            <Link to={'/'}>FAQs</Link>
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-1/5 p-3 b">
                    <p className="font-bold text-xl mb-2">Customer Service</p>
                    <ul className="flex flex-col text-xl text-gray-400">
                        <li>
                            <Link to={'/'}>Shipping & Delivery</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Return & Refund Policy</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Order Tracking</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Payment Methods</Link>
                        </li>
                    </ul>
                </div>
                
                <div className="w-full md:w-1/5 p-3">
                    <p className="font-bold text-xl mb-2">Contact Us</p>
                    <p><span className="font-bold">Address:</span> Dhaka, Bangladesh</p>
                    <p><span className="font-bold">Phone:</span> +8801234-567890</p>
                    <p><span className="font-bold">Email:</span> support@ebazar.com</p>
                </div>
            </div>
           
            <div>
                <p className="text-center pt-5">© 2025 E-Bazar. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;