import { useGetProductQuery } from "../redux/api/baseApi";
import ProductCard from "./ProductCard";
import type { IProduct } from "../types/types";

const Products = () => {
    const {data: products , isLoading} = useGetProductQuery({
        pollingInterval: 3000,
    })

    // console.log(product.message);
    if(isLoading){
        return <div>loading.....</div>
    }
    return (
        <div className="container mx-auto p-3 py-12">
            <div className="flex flex-col items-center">
                <h2 className="text-2xl md:text-3xl font-bold text-center">Explore Top Products</h2>
                <p className="w-full max-w-xl text-xl text-center py-4 text-gray-400">Browse our latest collection of fashion, gadgets, and lifestyle products handpicked for your needs.</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-2 justify-center items-stretch">
                {/* <ProductCard /> */}
                {
                    !isLoading && products.data.map((product: IProduct) => <ProductCard product={product} key={product._id}/>)
                }

                {/* {
                    isLoading ? (<p>Loading products...</p>) : (
                        products.data.map((product: IProduct) => <ProductCard key={product._id} product={product} />)
                    )
                } */}
            </div>
        </div>
    );
};

export default Products;