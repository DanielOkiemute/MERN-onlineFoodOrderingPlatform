import {  createContext, useState } from "react";
import { products } from "../assets/assets";


export const MenuContext = createContext();

 export function  MenuContextProvider({children}){

    const [product,setProduct] = useState(products)

    return (
        <MenuContext.Provider value={{product}}>{children} </MenuContext.Provider>
    ) 
}

