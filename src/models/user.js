import mongoose from 'mongoose'
import { Boogaloo } from 'next/font/google'

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    isAdmin:Boolean,
})

const User =mongoose.models.User || mongoose.model('User',userSchema)


export default User
