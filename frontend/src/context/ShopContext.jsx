import { createContext, useEffect, useState } from "react"
// import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios'


 export const ShopContext=createContext();

const ShopContextProvider=(props)=>{

    const currency='$';
    const delivery_fee=10;
    const backendUrl=import.meta.env.VITE_BACKEND_URL
    const [search,setSearch]=useState(' ');
    const [showSearch,setShowSearch]=useState(false);
    const [cartItems,setCartItem]=useState({});
    const [products,setProducts]=useState([]);
    const navigate=useNavigate();



    console.log(backendUrl);
    console.log(import.meta.env.VITE_BACKEND_URL);

    const addToCart=async(itemId,size)=>{
        if(!size){
            console.log("erroe");
            
            toast.error('select product size')
            return;
        }
        else{ 
        let cartData=structuredClone(cartItems);

        if (cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size]+=1;
            }
            else{
                cartData[itemId][size]=1;
            }
        }
        else{
            cartData[itemId]={};
            cartData[itemId][size]=1;
        }
        setCartItem(cartData)
    }
}

    const getCartCount=()=>{
        let totalCount=0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item]>0){
                        totalCount+=cartItems[items][item];
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalCount;
    }

    const updateQuantity=async(itemId,size,quantity)=>{
        let cartData=structuredClone(cartItems);

        cartData[itemId][size]=quantity;
        setCartItem(cartData);
    }
    
    const getCartAmount=()=>{
        let totalAmount=0;
        for(const items in cartItems){
            let itemInfo=products.find((product)=>product._id===items);
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item]>0){
                        totalAmount+=itemInfo.price * cartItems[items][item];

                    }
                } catch (error) {
                    
                }
            }
        }
        return totalAmount;
    }

        const getProductsData=async()=>{
            try {
                const response=await axios.get(backendUrl + "/api/product/list")
               if(response.data.success){
                setProducts(response.data.products)
               }else{
                toast.error(response.data.message)
               }
                
            } catch (error) {
                console.log(error);
                toast.error(error.message)
                
                
            }
        }

        useEffect(()=>{
            getProductsData()
        },[])


    const value={
        products,currency,delivery_fee,
        search,setSearch,showSearch,setShowSearch,
        cartItems,addToCart,
        getCartCount,updateQuantity,
        getCartAmount,
        navigate,
        backendUrl
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider
