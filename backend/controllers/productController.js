import {v2 as cloudinary} from 'cloudinary'
import productModels from '../models/productModels.js'
// function for adding product 
const addProduct=async(req,res)=>{

    try {
        
        const{name,description,price,category,subCategory,sizes,bestSeller}=req.body

        const image1=req.files.image1 && req.files.image1[0]
        const image2=req.files.image2 && req.files.image2[0]
        const image3=req.files.image3 && req.files.image3[0]
        const image4=req.files.image4 && req.files.image4[0]

        const images=[image1,image2,image3,image4].filter((item)=>item!==undefined)

        let imagesUrl=await Promise.all(
            images.map(async(item)=>{
                let result=await cloudinary.uploader.upload(item.path,{resource_type:'image'});
                return result.secure_url
            })
        )


        // console.log(name,description,price,category,subCategory,sizes,bestSeller);
        // console.log(imagesUrl);

        const productdata={
            name,
            description,
            category,
            price:Number(price),
            subCategory,
            bestSeller:bestSeller==='true'?true:false,
            sizes:JSON.parse(sizes),
            image:imagesUrl,
            date:Date.now()
        }

        console.log(productdata);

        const product=new productModels(productdata);
        await product.save()
        
        res.json({success:true,message:"product added"})
        
        

    } catch (error) {
        console.log(error);
        
        res.json({success:false,message:error.message})
    }
}

// function for list product 
const listProduct=async(req,res)=>{
    
}

// function for removing product 
const removeProduct=async(req,res)=>{
    
}

// function for single product 
const singleProduct=async(req,res)=>{
    
}

export{addProduct,listProduct,removeProduct,singleProduct};