import mongoose from 'mongoose'
 
// const configOPtions={
//     useNewUrlParser:true,
//     useunifiedTopology:true
// }
const connectionDb=async()=>{

    console.log("hii")

    const DbUrl='mongodb+srv://root:root@ecommerce.9g4mnlg.mongodb.net/'
    // const DbUrl='mongodb://localhost:27017/users'
    mongoose.connect(DbUrl).then(()=>{
        console.log("connected to database")
        return;
    }).catch((e)=>{
        console.log( `errrorrr ${e.message}`) 
        return;
    })
}
 module.exports={connectionDb} 