import React from 'react'
import ServiceSlider from './ServiceSlider';

const Artist = () => {
    const Artist = [
        {
    
    img: "https://variety.com/wp-content/uploads/2017/11/kendrick-lamar-variety-hitmakers.jpg?w=1000&h=562&crop=1",
   },
  {
    
    img: "https://media.npr.org/assets/img/2021/11/16/gettyimages-1235223332_sq-e88ad790d447bd7dfcb0c1571047db26d39a8ee0.jpg?s=1100&c=50&f=jpeg",
   },
  {
     
    img: "https://cdn.britannica.com/34/258834-050-9E9EF435/rapper-drake-performs-on-stage-during-lil-baby-and-friends-birthday-celebration-2022.jpg",
   },
  {
   
    img: "https://i.insider.com/5e8300482d654f5e765aa4e3?width=700",
    
  },
  {
     
    img: "https://i8.amplience.net/i/naras/Hanumankind_Press_Photo_2024_Tanay_Shetty",
   
  },
  
];
  return (
   <div className='bg-white p-12 w-screen h-[140vh]'>
    <h1 className='text-7xl font-extrabold uppercase left-0 top-0 p-10'>we get best artist<br></br> from the Globe </h1>
    <ServiceSlider services={Artist}/>
     
   </div>
  )
}

export default Artist