import React from 'react'
import './List.css'
import image0 from '../../../public/image0.jpeg'
import image1 from '../../../public/image1.jpeg'
import image2 from '../../../public/image2.jpeg'
import image3 from '../../../public/image3.jpeg'
import image4 from '../../../public/image4.jpeg'
import image5 from '../../../public/image5.jpeg'
import Card from '../Card/Card'
const List = () => {
    const data = [
        {
          id: 1,
          img1:image0,
          img2:image1,
          // img1: "https://i.pinimg.com/736x/7e/05/e0/7e05e0d3c0e3151a9f8d25a6e5fac44a.jpg",
          // img2: "https://pbs.twimg.com/media/EYDlBD8XkAAqPSn.jpg",
          title: "Black hoodie",
          isNew: true,
          oldPrice: 19,
          newPrice: 20,
        },
        {
          id: 2,
          img1:image2,
          img2:image3,
          // img1: "https://i.pinimg.com/originals/fb/6d/34/fb6d3458fa64ba2f8ad176e761ae7fd9.jpg",
          // img2: "https://e1.pxfuel.com/desktop-wallpaper/110/350/desktop-wallpaper-oreki-houtarou-houtarou-oreki.jpg",
          title: "Cargo",
          isNew: true,
          oldPrice: 15,
          newPrice: 13,
        },
        {
          id: 3,
          // img1: "https://arthive.net/res/media/img/orig/work/506/7545965.jpg",
          // img2: "https://pbs.twimg.com/media/EYDlBD8XkAAqPSn.jpg",
          img1:image4,
          img2:image5,
          title: "Oversized Tees",
          isNew: false,
          oldPrice: 17,
          newPrice: 9,
        },
        {
          id: 4,
          // img1: "https://e1.pxfuel.com/desktop-wallpaper/110/350/desktop-wallpaper-oreki-houtarou-houtarou-oreki.jpg",
          // img2: "https://i.pinimg.com/736x/7e/05/e0/7e05e0d3c0e3151a9f8d25a6e5fac44a.jpg",
          img1:image0,
          img2:image1,
          title: "Nike Air Shoe",
          isNew: false,
          oldPrice: 12,
          newPrice: 6,
        },
      ];
  return (
    <div className='lists'>
         { 
            data.map(item=>(
               <Card item={item} key={item.id} /> 
            ))
         }
    </div>
  )
}

export default List