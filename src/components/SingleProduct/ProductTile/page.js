'use client'
import './ProductTile.css'
const ProductTile = ({item}) => {
  return (
    <div>
        <div className="TileFirst">
            <img src={item.image} alt="product image" className='imageTile' />
        </div>
        <div className="priceAndName">
            <div className="priceTile">
                <p className="paraPriceTile">
               {`$ ${item.price}`}
                </p>
            </div>
            <h3 className="nameTile">
                {item.name}
            </h3>
        </div>
    </div>
  )
}

export default ProductTile