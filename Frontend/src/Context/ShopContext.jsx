import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product"; /* All product has been imported. From here we are getting all_product data. Using context we will use it in different components. */

export const ShopContext = createContext(null);             /* Created ShopContext using creatContext. Created one context and in it lies with null */

const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props)=>{             /* Created a function, ShopContextProvider, where there is props.  */
    
    const [cartItems,setCartItems] = useState(getDefaultCart());    /* Here we will get an empty cart. It's size will be all_product.length. */
    

    const addToCart = (itemId) =>{                       /* Create add to cart function. Using that we can add the products in our cart. Here we will pass itemId. */
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))                /* Adding the spred operator and sending the previous (prev) and itemId and there value (prev). In the function we will use the spred operator. prev[itemId] will provide the value for that key. */
        console.log(cartItems);
    }
    
    const removeFromCart = (itemId) =>{                       /*  */
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))                /*  */
    }

    const getTotalCartAmount = () => {                          /* Insert cart total value. */
        let totalAmount = 0;
        for(const item in cartItems)                            /* To pass cartItems from carts. */
        {
            if(cartItems[item]>0)                                            /* Check the quantity of that item.  */
            {
                let itemInfo = all_product.find((product)=>product.id===Number(item))   /* If we will add cartItem, If quantity is greater than zero then it will add let and create a variable itemInfo equal to all_product and find the product using find. Check if product.id is equal to item. Item is a string so to convert it we use Number. If product.id is equal to item then we will get that product. */
                totalAmount += itemInfo.new_price * cartItems[item];                    /* If we run this function we will get totalAmount. */
            }
        }
        return  totalAmount;
    }
    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem+= cartItems[item];
            }
        }
        return  totalItem
        }

    const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};        /* Sending the functions and data. Created contextValue variable where there is stored the data and functions, where you are going to access using context. Using this context we can access the cartItems data in any component. */
    return (                                            /* Added ShopContext.Provider in return and passed the value, contextValue. Then we have rapped props.children. */
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;