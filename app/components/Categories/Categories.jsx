"use client";
import "./Categories.css";
import image0 from '../../../public/image0.jpeg'
import image1 from '../../../public/image1.jpeg'
import image2 from '../../../public/image2.jpeg'
import image3 from '../../../public/image3.jpeg'
import image4 from '../../../public/image4.jpeg'
import image5 from '../../../public/image5.jpeg'
import Link from "next/link";
import Image from "next/image";
const Categories = () => {
  return ( 
    <div className="categories">
      <div className="col">
        <div className="row">
            <Image src={image0} alt="" />
            <button>
                <Link className="link" href='/products/men'>
                    Mens
                </Link>
            </button>
        </div>
        <div className="row">
        <Image src={image1} alt="" />
            <button>
                <Link className="link" href='/products/men'>
                    Casual
                </Link>
            </button>
        </div>
      </div>
      <div className="col"> 
        <div className="row">
        <Image src={image2} alt="" />
            <button>
                <Link className="link" href='/products/men'>
                    Cargo
                </Link>
            </button>
        </div>
      </div>
      <div className="col col-big"> 
        <div className="row">
          <div className="col">
            <div className="row">
            <Image src={image3} alt="" />
            <button>
                <Link className="link" href='/products/men'>
                    Tees
                </Link>
            </button>
            </div> 
          </div>
          <div className="col">
            <div className="row">
            <Image src={image4} alt="" />
            <button>
                <Link className="link" href='/products/men'>
                    Accessories
                </Link>
            </button>
            </div>
          </div>
        </div>
        <div className="row">
        <Image src={image5} alt="" />
            <button>
                <Link className="link" href='/products/men'>
                    Shoes
                </Link>
            </button>
        </div>
      </div>
    </div>
  );
};
export default Categories;
