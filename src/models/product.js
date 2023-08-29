import mongoose from 'mongoose'
 
const ProductSchema=new mongoose.Schema({
    name:String,
    price:Number,
    desc:String,
    category:String,
    DInfo:String,
    pDrop:String,
    image:String,
})

const Products=mongoose.models.Products ||mongoose.model('Products',ProductSchema)

export default Products