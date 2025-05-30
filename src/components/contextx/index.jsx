import { use } from "react";
import { createContext, useState } from "react";
export const ShoppingCartContext = createContext();

export const ShoppingCartProvider =({children}) => {
    const [count, setCount] = useState(0)
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)

    const OpenProductDetail = () => setIsProductDetailOpen (true)
    const CloseProductDetail = () => setIsProductDetailOpen (false)

    const OpenCheckoutSideMenu = () => setIsCheckoutSideMenuOpen (true)
    const CloseCheckoutSideMenu = () => setIsCheckoutSideMenuOpen (false)


    const[ProductShow, setProductShow] = useState({})
    const [cart, setCart] = useState([])


    return(
        <ShoppingCartContext.Provider value={{
            count, 
            setCount, 
            OpenProductDetail,
            CloseProductDetail,
            setIsProductDetailOpen,
            isProductDetailOpen,
            ProductShow, 
            setProductShow,
            cart,
            setCart,
            OpenCheckoutSideMenu,
            CloseCheckoutSideMenu,
            isCheckoutSideMenuOpen,

        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}