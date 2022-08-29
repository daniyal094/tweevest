import React from "react";
import Link from "next/link";

import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Responsive = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
      />
      <Slider {...settings}>
        {/* 1st SLIDE */}
        <div>
          <div className="flex flex-col">
            <div className="flex flex-row justify-between border-b-2 pb-2 px-1 my-1">
              <h1 className="text-sm font-semibold text-blue-900">
                Market Cap
              </h1>
              <h1 className="text-sm font-semibold text-blue-900">1.8T</h1>
            </div>
            <div className="flex flex-row justify-between border-b-2 pb-2 px-1 my-1">
              <h1 className="text-sm font-semibold text-blue-900">
                Shares outstanding
              </h1>
              <h1 className="text-sm font-semibold text-blue-900">365M</h1>
            </div>{" "}
            <div className="flex flex-row justify-between border-b-2 pb-2 px-1 my-1">
              <h1 className="text-sm font-semibold text-blue-900">
                Share in Float
              </h1>
              <h1 className="text-sm font-semibold text-blue-900">450M</h1>
            </div>{" "}
            <div className="flex flex-row justify-between border-b-2 pb-2 px-1 my-1">
              <h1 className="text-sm font-semibold text-blue-900">
                Price Target
              </h1>
              <h1 className="text-sm font-semibold text-blue-900">$190</h1>
            </div>
          </div>
        </div>
        {/* 2nd SLIDE */}
        <div>
          <div className="flex flex-col">
            <div className="flex flex-row justify-between border-b-2 pb-2 px-1 my-1">
              <h1 className="text-sm font-semibold text-blue-900">
                Market Cap
              </h1>
              <h1 className="text-sm font-semibold text-blue-900">1.8T</h1>
            </div>
            <div className="flex flex-row justify-between border-b-2 pb-2 px-1 my-1">
              <h1 className="text-sm font-semibold text-blue-900">
                Shares outstanding
              </h1>
              <h1 className="text-sm font-semibold text-blue-900">365M</h1>
            </div>{" "}
            <div className="flex flex-row justify-between border-b-2 pb-2 px-1 my-1">
              <h1 className="text-sm font-semibold text-blue-900">
                Share in Float
              </h1>
              <h1 className="text-sm font-semibold text-blue-900">450M</h1>
            </div>{" "}
            <div className="flex flex-row justify-between border-b-2 pb-2 px-1 my-1">
              <h1 className="text-sm font-semibold text-blue-900">
                Price Target
              </h1>
              <h1 className="text-sm font-semibold text-blue-900">$190</h1>
            </div>
          </div>
        </div>
        {/* 3rd SLIDE */}
        <div>
          <div className="flex flex-col">
            <div className="flex flex-row justify-between border-b-2 pb-2 px-1 my-1">
              <h1 className="text-sm font-semibold text-blue-900">
                Market Cap
              </h1>
              <h1 className="text-sm font-semibold text-blue-900">1.8T</h1>
            </div>
            <div className="flex flex-row justify-between border-b-2 pb-2 px-1 my-1">
              <h1 className="text-sm font-semibold text-blue-900">
                Shares outstanding
              </h1>
              <h1 className="text-sm font-semibold text-blue-900">365M</h1>
            </div>{" "}
            <div className="flex flex-row justify-between border-b-2 pb-2 px-1 my-1">
              <h1 className="text-sm font-semibold text-blue-900">
                Share in Float
              </h1>
              <h1 className="text-sm font-semibold text-blue-900">450M</h1>
            </div>{" "}
            <div className="flex flex-row justify-between border-b-2 pb-2 px-1 my-1">
              <h1 className="text-sm font-semibold text-blue-900">
                Price Target
              </h1>
              <h1 className="text-sm font-semibold text-blue-900">$190</h1>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

const CustomSlider = () => (
  <div>
    <Responsive />
  </div>
);
export default CustomSlider;
