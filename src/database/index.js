import mongoose from 'mongoose'

const configOPtions={
    useNewUrlParser:true,
    useunifiedTopology:true
}
const connectionDb=async()=>{
    const DbUrl='mongodb+srv://root:root@ecommerce.9g4mnlg.mongodb.net/'
    mongoose.connect(DbUrl,configOPtions).then(()=>{
        console.log("connected to server")
    }).catch((e)=>{
        console.log(`errrorrr ${e.message}`)
    })
}

export default connectionDb