import { useContext } from "react";
import { ShoppingCartContext } from "../contextx";
import { PlusIcon } from "@heroicons/react/16/solid";
import {CheckCircleIcon} from "@heroicons/react/16/solid"
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
    const context = useContext(ShoppingCartContext);
    const navigate = useNavigate();

    const { 
        setProductShow, 
        OpenProductDetail,
        OpenCheckoutSideMenu,
        CloseProductDetail,
        setCount,
        setCart
    } = context;

    const handleAddToCart = (e, data) => {
        e.stopPropagation();
        if (!data || !data.id) return;
        
        const productToAdd = {
            id: data.id,
            title: data.title,
            price: data.price,
            category: data.category,
            images: data.images,
            description: data.description
        };
        
        setCount(prev => prev + 1);
        setCart(prev => [...prev, productToAdd]);
        setProductShow(productToAdd);
        context.CloseProductDetail();
        context.OpenCheckoutSideMenu();
    };

    const handleCardClick = (event,data) => {
        event.stopPropagation();
        setProductShow(data);
        context.OpenProductDetail();
    };

    const renderIcon = (id) => {
        const isInCart = context.cart.some(product => product.id === id);
        if(isInCart){
        return (
            <div 
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2'
                >
                    <CheckCircleIcon className="h-6 w-6 text-green-600" />
            </div>
        )
        }
        return (
                <div 
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2'
                    onClick={(e)=>handleAddToCart(e, data)}
                >
                    <PlusIcon className="h-6 w-6 text-black" />
            </div>
        )
    };
    return (
        <div 
            className='bg-white cursor-pointer w-56 h-60'
            onClick={(e)=>handleCardClick(e,data)}
        >
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black px-3 py-1 text-xs m-2'>
                    {data.category?.name}
                </span>
                <img 
                    src={data.images?.[0]}
                    className='w-full h-full object-cover rounded-lg' 
                    alt={data.title} 
                />
                {renderIcon(data.id)}
            </figure>
            <p className='flex justify-between items-center p-2'>
                <span className='text-sm font-light'>{data.title}</span>
                <span className='text-lg font-medium'>${data.price}</span>
            </p>
        </div>
    );
};

export default Card;