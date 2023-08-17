"use client";
import Image from 'next/image';
import {useParams} from 'next/navigation'
import image5 from '../../../public/image5.jpeg'
import List from '@/app/components/List/List';
import { useState } from 'react';
import './AllP.css'
const Products = () => {
  const [maxPrice,setMaxPrice]=useState(500)
  const [sort,setSort]=useState(null)

  const catId=parseInt(useParams().id)

  return (
    <div className="products_all">
      {/* <h1>all products</h1> */}
      <div className="left_products">
        <div className="filterItems"> 
          <h2>Product Category</h2> 
          <div className="inputItem"> 
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Tees</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">Cargos</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="4" value={4} />
            <label htmlFor="4">Accessories</label>
          </div>
        </div>
        <div className="filterItems">
          <h2>Filter by Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItems">
          <h2>Sort By</h2>
          <div className="inputItem">
            <input type="radio" value="asc" name="price" id="asc" onChange={e=>setSort("asc")} />
            <label htmlFor="asc">Price [Lowest First]</label>
          </div>
          <div className="inputItem">
            <input type="radio" value="des" name="price" id="des"  onChange={e=>setSort("des")}/>
            <label htmlFor="des">Price [Highest First]</label>
          </div>
        </div>
      </div>
      <div className="right_products">
        <Image className="catImg" src={image5}/>
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};
export default Products;
