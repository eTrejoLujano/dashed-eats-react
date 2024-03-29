import { useState } from "react";
import FoodModal from "./FoodModal";

const FoodItem = ({
  itemId,
  name,
  description,
  image,
  price,
  place_id,
  foodModelInfo,
}) => {
  return (
    <div className="space-y-[-.5rem]">
      <div
        onClick={() =>
          foodModelInfo({ itemId, name, description, image, price, place_id })
        }
        className="flex justify-between items-center w-full h-[9rem] md:border rounded-md z-10 cursor-pointer"
      >
        <div className="space-y-1 md:px-4">
          <div className="text-md font-bold text-start">{name}</div>
          <p className="line-clamp-2 text-sm text-start">{description}</p>
          <div className="text-md text-start">${price}</div>
        </div>
        <div className="max-h-fit w-[8rem] md:w-[9rem] flex flex-col justify-center bg-white md:rounded-r-md md:rounded-l-none rounded-md">
          <img
            src={image}
            className="max-w-fit h-[8rem] md:h-[9rem] md:border-t md:border-b md:rounded-r-md rounded-md md:rounded-l-none object-cover"
          />
          <div className="flex flex-col items-end w-full h-full relative bottom-[2.6rem] right-[.6rem]">
            <div className="absolute rounded-full w-[3rem] h-[1.9rem] bg-white flex flex-col justify-center items-center shadow-sm shadow-gray-400">
              <button className="text-sm font-semibold">Add</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:invisible w-full h-[.05rem] top-[.4rem] relative rounded bg-gray-200" />
    </div>
  );
};

export default FoodItem;
