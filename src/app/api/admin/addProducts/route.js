import Products from "@/src/models/product";
import Joi from Joi;

const addNewProductSchema=Joi.object({
    name:Joi.string().required(),
    price:Joi.number().required(),
    desc:Joi.string().required(),
    category:Joi.string().required(),
    DInfo:Joi.string().required(),
    pDrop:Joi.string().required(),
    image:Joi.string().required(),
})

export const dynamic = "force-dynmaic";


export async function POST(req){
    

  try{

    await connectionDb();

    if(user==='admin'){

    }else{
        return NextResponse.json({
            success: false,
            message: ` not authorized`,
          });
    }
    const extractData=await req.json();
    const{image,name,price,desc,category,DInfo,pDrop}=extractData;

    const error=addNewProductSchema.validate({image,name,price,desc,category,DInfo,pDrop})

    if(error){
      return NextResponse.json({
      success: false,
      message: ` heres ${error.details[0].message}`,
    });
  }
  
  const newProduct=await Products.create(extractData)

  if(newProduct){
  return NextResponse.json({
      success: true,
      message: ` added successfully`,
    });
  }
  else{
  return NextResponse.json({
      success: false,
      message: ` Failed to add procust || the error is  ${error.details[0].message}`,
    });
  }

  }catch(e){
    return NextResponse.json({
      success: false,
      message: ` the error is  ${error.details[0].message}`,
    });
  }
}

    
