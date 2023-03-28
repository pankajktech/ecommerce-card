import React, { useState } from "react";

import {
  AiFillLeftCircle,
  AiFillRightCircle,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import image1 from "../assets/image-product-1.jpg";
import image2 from "../assets/image-product-2.jpg";
import image3 from "../assets/image-product-3.jpg";
import image4 from "../assets/image-product-4.jpg";
import minus from "../assets/icon-minus.svg";
import plus from "../assets/icon-plus.svg";

const Images = [
  {
    url: image1,
  },
  {
    url: image2,
  },
  {
    url: image3,
  },
  {
    url: image4,
  },
];

const Content = () => {
  const [images, setImages] = useState();
  const [count, setCount] = useState(1);

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  const leftSlideImage = () => {
    const currentIndex = Images.findIndex((image) => image.url === images);
    const nextIndex = (currentIndex - 1 + Images.length) % Images.length;
    setImages(Images[nextIndex].url);
  };

  const rightSlideImage = () => {
    const currentIndex = Images.findIndex((image) => image.url === images);
    const nextIndex = (currentIndex + 1) % Images.length;
    setImages(Images[nextIndex].url);
  };

  const changeImage = (image) => {
    setImages(image);
  };

  return (
    <div className="flex max-md:flex-col items-center justify-center w-full h-full my-10">
      <div className="md:mr-20 max-sm:p-5">
        <div className="md:w-[500px] relative md:h-[500px] ">
          <AiFillLeftCircle
            onClick={leftSlideImage}
            className="absolute left-1 top-[50%] text-2xl cursor-pointer"
          />
          <img
            src={images ? images : Images[0].url}
            alt="image"
            className="w-full h-full object-cover rounded-md"
          />
          <AiFillRightCircle
            onClick={rightSlideImage}
            className="absolute right-1 top-[50%] text-2xl cursor-pointer"
          />
        </div>
        <div className="flex my-10">
          {Images.map((image, index) => (
            <img
              onClick={
                images === image.url
                  ? () => changeImage(image.url)
                  : () => changeImage(image.url)
              }
              key={index}
              src={image.url}
              alt="Images"
              className="w-[65px] h-[65px] md:w-[100px]  md:h-[100px] object-cover rounded-md mr-8 cursor-pointer active:border-2 active:border-orange-400"
            />
          ))}
        </div>
      </div>
      <div className="md:w-[500px] max-sm:p-5">
        <p className="text-orange-500">SNEAKER COMPANY</p>
        <h1 className="text-3xl md:text-5xl font-bold my-5">
          Fall Limited Edition <br /> Sneakers
        </h1>
        <p className="text-gray-500 mb-5">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="flex flex-col mb-5">
          <p className="text-3xl font-bold flex items-center">
            $125.00{" "}
            <span className=" text-sm text-orange-500 bg-gray-200 ml-4 px-2">
              50%
            </span>
          </p>
          <p className="text-md text-gray-400 line-through">$250.00</p>
        </div>
        <div className="flex max-sm:flex-col justify-center items-center mb-5">
          <div className="flex justify-between max-sm:w-[90%] w-40 rounded-md bg-slate-200 px-4 py-2 max-sm:my-3">
            <button
              onClick={decreaseCount}
              className="text-xl text-orange-400 font-bold cursor-pointer "
            >
              <img src={minus} alt="minus" />
            </button>
            <p className="text-xl font-bold">{count}</p>
            <button
              onClick={increaseCount}
              className="text-xl text-orange-400 font-bold cursor-pointer "
            >
              <img src={plus} alt="plus" />
            </button>
          </div>
          <button
            onClick={() => alert("Added to cart")}
            className="bg-orange-500 hover:bg-orange-600 max-sm:w-[90%] w-56 text-white flex items-center justify-center px-8 py-2 rounded-md md:ml-5"
          >
            <AiOutlineShoppingCart className="text-xl w-6 mr-3" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
