import { useEffect, useState } from "react";
import { createContext } from "react";
export const ShoppingCartContext = createContext();

export const ShoppingCartProvider =({children}) => {
    const [count, setCount] = useState(0)
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)

    const OpenProductDetail = () => setIsProductDetailOpen (true)
    const CloseProductDetail = () => setIsProductDetailOpen (false)

    const OpenCheckoutSideMenu = () => setIsCheckoutSideMenuOpen (true)
    const CloseCheckoutSideMenu = () => setIsCheckoutSideMenuOpen (false)


    const [ProductShow, setProductShow] = useState({})
    const [cart, setCart] = useState([])
    const [order, setOrder] = useState([])
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)
    const [searchByTitle, setSearchByTitle] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState(null)

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
        .then(res => res.json())
        .then(data => {
            setItems(data)
        })
        .catch(error => console.log(error))
    }, [])

    const filterItemsByTitle = (items, searchByTitle) => {
        if (!items || !searchByTitle) return [];
        return items.filter(item => 
            item?.title?.toLowerCase().includes(searchByTitle.toLowerCase())
        );
    }

    const filterItemsByCategory = (items, category) => {
        if (!items || !category) return [];
        const filtered = items.filter(item => {
            const matches = item?.category?.name === category;
            return matches;
        });
        return filtered;
    }

    const filterBySearchOrCategory = (searchByType, searchByTitle, items, selectedCategory) => {
        if(searchByType === 'title'){
            return filterItemsByTitle(items, searchByTitle)
        } 
        
        if(searchByType === 'category'){
            return filterItemsByCategory(items, selectedCategory)
        }
        
        if(searchByType === 'title_and_category'){
            return filterItemsByCategory(items, selectedCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
        
        if(!searchByType){
            return items
        }
    }

    useEffect(() => {
        let result;
        if (searchByTitle && selectedCategory) {
            result = filterBySearchOrCategory('title_and_category', searchByTitle, items, selectedCategory);
        } else if (selectedCategory) {
            result = filterBySearchOrCategory('category', null, items, selectedCategory);
        } else if (searchByTitle) {
            result = filterBySearchOrCategory('title', searchByTitle, items, null);
        } else {
            result = items;
        }

        setFilteredItems(result);
    }, [items, searchByTitle, selectedCategory])

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
            order,
            setOrder,
            items,
            filteredItems,
            setFilteredItems,
            searchByTitle,
            setSearchByTitle,
            selectedCategory,
            setSelectedCategory,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}