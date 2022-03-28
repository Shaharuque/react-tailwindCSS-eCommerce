import { CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';

const ProductBenefits = (props) => {
    //console.log(props)
    const {benefit}=props
    return (
        <p className='flex items-center font-mono font-bold'>
            <CheckCircleIcon className='w-5 h-5 mr-2 text-purple-800'>
            </CheckCircleIcon>
            {benefit}
        </p>
    );
};

export default ProductBenefits;