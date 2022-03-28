import React from 'react';
import Product from '../product/Product';

const Pricing = () => {
    const products=[
        {id:1, name:'pen', price:200,img:'https://static-01.daraz.com.bd/p/2b40c2a5e58aad50c89324819f98f9de.jpg',benefits:['Reliable','Long-lasting','Great Sound Quality','Great Deal']},

        {id:2,name:'tv', price:20000 ,img:'https://www.ryanscomputers.com/storage/products/medium/microlab-mogul-bluetooth-brown-11544330555.webp',benefits:['Reliable','Long-lasting','Great Sound Quality','Great Deal']},

        {id:3,name:'phone', price:25000,img:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80',benefits:['Reliable','Long-lasting','Great Sound Quality','Great Deal']},

        {id:4,name:'fridge', price:2000,img:'https://i01.appmifile.com/webfile/globalimg/products/pc/mi-tv-p1-32/pc-specs-header02.png',benefits:['Reliable','Long-lasting','Great Sound Quality','Great Deal']},
    ]
    return (
        <div className='grid md:grid-cols-3 gap-4 bg-indigo-400 my-4 p-4'>
            {
                products.map(product=><Product key={product.id} product={product}></Product>)
            }
        </div>
    );
};

export default Pricing;