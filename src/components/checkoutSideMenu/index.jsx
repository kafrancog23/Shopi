import './index.css';
import { XMarkIcon } from '@heroicons/react/16/solid';
import { useContext } from 'react';
import { ShoppingCartContext } from '../contextx';
import OrderCard from '../OrderCard';


const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);

    const handleDeleteProduct = (id) => {
        const filteredProducts = context.cart.filter(product => product.id !== id);
        context.setCart(filteredProducts);
    }

    return(
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white w-96 h-[calc(100vh-68px)]`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>
                    My Order
                </h2>
                <div 
                    className='cursor-pointer'
                    onClick={context.CloseCheckoutSideMenu}>
                    <XMarkIcon className='h-6 w-6 text-black'/>
                </div>
            </div>

            <div className='px-6 overflow-y-scroll h-[calc(100vh-168px)]'>
            {
                context.cart.map(product => (
                    <OrderCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        imageUrl={product.images?.[0]}
                        handleDeleteProduct={handleDeleteProduct}
                    />
                ))
            }
            </div>
        </aside>
    );
};

export default CheckoutSideMenu