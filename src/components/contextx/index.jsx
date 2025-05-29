import { use } from "react";
import { createContext, useState } from "react";
export const ShoppingCartContext = createContext();

export const ShoppingCartProvider =({children}) => {
    const [count, setCount] = useState(0)
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)

    const OpenProductDetail = () => setIsProductDetailOpen (true)
    const CloseProductDetail = () => setIsProductDetailOpen (false)


    const[ProductShow, setProductShow] = useState({})

    return(
        <ShoppingCartContext.Provider value={{
            count, 
            setCount, 
            OpenProductDetail,
            CloseProductDetail,
            setIsProductDetailOpen,
            isProductDetailOpen,
            ProductShow, 
            setProductShow

        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}