import { useContext } from "react";
import { ShoppingCartContext } from "../contextx";
import { PlusIcon } from "@heroicons/react/16/solid";

const Card = (data) => {
    const context = useContext(ShoppingCartContext);
    
    const handleClick = () => {
        context.setProductShow(data.data); // Pasamos el producto completo
        context.OpenProductDetail();
    };
    
    return(
        <div 
            className='bg-white cursor-pointer w-56 h-60'
            onClick={handleClick} >
            <figure className='relative mb-2 w-full h-4/5 '>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black px-3 py-1 text-xs m-2'>
                    {data.data.category.name}
                </span>
                <img src={data.data.images[0]} className='w-full h-full object-cover rounded-lg' alt={data.data.title} />
                <div 
                    className='absolute top-0 right-0 flex justify-center align-middle items-center bg-white w-6 h-6 rounded-full m-2' 
                    onClick={(e) => {
                        e.stopPropagation(); // Evita que el clic se propague al contenedor
                        context.setCount(context.count + 1);
                    }}>
                    <PlusIcon className="h-6 w-6 text-black" />
                </div>
            </figure>
            <p className='flex justify-between items-center'>
                <span className='text-sm font-light'>
                    {data.data.title}
                </span>
                <span className='text-lg font-medium'>
                    ${data.data.price}
                </span>
            </p>
        </div>
    );
};

export default Card;