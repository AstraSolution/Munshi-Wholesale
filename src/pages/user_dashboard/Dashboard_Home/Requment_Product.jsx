import React from 'react'
import useAllProduct from '../../../Hooks/useAllProduct';
import { Link } from 'react-router-dom';


export default function Requment_Product() {
    const products = useAllProduct();
    console.log(products);


    // Randomize and select 3 products
    const randomProducts = products?.products?.sort(() => Math.random() - 0.5).slice(0, 3);
    console.log(randomProducts);

    return (
        <>

            <div className="bg-white rounded-md shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Recommended Products</h2>
                <ul className="divide-y divide-gray-200">
                    {randomProducts?.map((product) => (
                        <Link to={`/products/${product._id}`}>
                            <ul className="py-2 flex items-center justify-between" key={product._id}>
                                <li>{product?.title}</li>
                                <li>
                                    <p> ${product?.price}</p>
                                </li>
                            </ul>
                        </Link>

                    ))}
                </ul>
            </div >
        </>
    )
}
