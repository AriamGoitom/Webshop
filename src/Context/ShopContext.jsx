import React, { createContext } from "react";
import all_product from "../Components/Assets/all_product"; /* All product has been imported. From here we are getting all_product data. Using context we will use it in different components. */


export const ShopContext = createContext(null);             /* Created ShopContext using creatContext. Created one context and in it lies with null */

const ShopContextProvider = (props)=>{             /* Created a function, ShopContextProvider, where there is props.  */
    
    const contextValue = {all_product}              /* Created contextValue variable where there is stored the data and functions, where you are going to access using context. */

    return (                                            /* Added ShopContext.Provider in return and passed the value, contextValue. Then we have rapped props.children. */
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;