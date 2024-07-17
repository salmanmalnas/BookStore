import React from 'react';
import list from  "../../public/list.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';

function Freebook() {


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="md:px-20 px-4 dark:bg-slate-900 dark:text-white">
        <div className="max-w-screen-2xl container mx-auto ">
          <h1 className="text-xl pb-2">Free offered courses</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>
        </div>
        <div className="slider-container">
          <Slider {...settings} className="dark:text-white">
            {list.map((item)=>(
              <Cards item={item} key={item.id} width="w-96" />
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Freebook
