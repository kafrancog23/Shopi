import {XMarkIcon} from "@heroicons/react/16/solid"

const OrderCard = props => {
    const {id, title, price, imageUrl, handleDeleteProduct} = props;
    return(
        <div className='flex justify-between items-center mb-4' key={id} >
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img src={imageUrl} alt={title} className="w-full h-full object-cover rounded-lg"/>
                </figure>
                <p className="text-xs font-light">{title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-sm font-medium">${price}</p>
                <XMarkIcon className="h-6 w-6 text-black cursor-pointer" onClick={() => handleDeleteProduct(id)}/>
            </div>
        </div>
    )
}

export default OrderCard
