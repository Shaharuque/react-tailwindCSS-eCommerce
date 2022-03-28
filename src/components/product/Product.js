import React from 'react';
import ProductBenefits from '../productBenefits/ProductBenefits';
import { ShoppingCartIcon } from '@heroicons/react/solid';
const Product = (props) => {
    console.log(props.product.id)
    const { name, price, img, benefits,id } = props.product
    return (
        <div className='bg-emerald-400  p-4 rounded flex flex-col items-center'>
            <img className='w-3/4 h-3/4' src={img} alt="" />
            <h1 className='font-bold'>product-name: {name}</h1>
            <p className='text-blue-800 font-bold'>Price: {price}</p>

            <div>
            <p className='text-xl font-bold text-left underline'>Benefits:</p>
            {
                benefits.map(benefit => <ProductBenefits key={id} benefit={benefit}></ProductBenefits>)
            }
        </div>
        <button className='font-bold bg-fuchsia-900 rounded p-2 text-white my-6 hover:text-rose-600 flex items-center duration-200 ease-in'>
            BUY<ShoppingCartIcon className='h-5 w-5 ml-2'></ShoppingCartIcon>
        </button>
        </div>
    );
};

export default Product;