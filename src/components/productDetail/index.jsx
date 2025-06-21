import './index.css';
import { XMarkIcon } from '@heroicons/react/16/solid';
import { useContext } from 'react';
import { ShoppingCartContext } from '../contextx';


const ProductDetail = () => {
    const context = useContext(ShoppingCartContext);
    
    return(
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white w-96 h-[calc(100vh-68px)]`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>
                    Detail
                </h2>
                <div 
                    className='cursor-pointer'
                    onClick={context.CloseProductDetail}>
                    <XMarkIcon className='h-6 w-6 text-black'/>
                </div>
            </div>
            
            {context.ProductShow && (
                <div className='px-6 overflow-y-auto'>
                    <figure className='mb-4'>
                        <img 
                            src={context.ProductShow.images?.[0]} 
                            alt={context.ProductShow.title} 
                            className='w-full h-64 object-cover rounded-lg'
                        />
                    </figure>
                    <p className='flex flex-col gap-2'>
                        <span className='text-xl font-semibold'>
                            {context.ProductShow.title}
                        </span>
                        <span className='text-2xl font-medium text-green-600'>
                            ${context.ProductShow.price}
                        </span>
                        <span className='text-sm text-gray-500'>
                            {context.ProductShow.description}
                        </span>
                        <span className='text-sm font-medium'>
                            Category: {context.ProductShow.category}
                        </span>
                    </p>
                </div>
            )}
        </aside>
    );
};

export default ProductDetail;