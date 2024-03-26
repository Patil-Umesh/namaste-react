import React from "react";
import vegicon from "../../src/Vegetarian.png";
import Star from "../Star";
import { CDN_URL } from "../utils/constants";

const Itemcard = (props) => {
  const { itemCard } = props;
  // console.log(itemCard);
  const {
    id,
    imageId,
    isBestseller,
    isVeg,
    description,
    name,
    price,
    defaultPrice,
    finalPrice,
    offerTags,
  } = itemCard?.card?.info ?? {};
  const { title, subTitle } = itemCard?.card?.info.offerTags ?? {};
  // console.log(title, subTitle);
  // console.log(offerTags);
  return (
    <>
      <div className="mb-4">
        <div className="item-details">
          {isVeg ? (
            <div className="flex">
              <img
                className="w-5 h-5 mr-2 mt-[4px]"
                alt="Veg Icon"
                src={vegicon}
              />
              {isBestseller ? (
                <div className="flex">
                  <p className="p-1">
                    <Star />
                  </p>
                  <p className="text-yellow-600 font-bold text-sm">
                    Bestseller{" "}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
          <div className="flex justify-between">
            <div className="w-10/12">
              <h2 className="font-semibold text-gray-800">{name} </h2>
              <div className="flex">
                {defaultPrice && finalPrice ? (
                  <h2 className="font-semibold text-gray-800 mr-2">
                    {"₹" + finalPrice / 100}{" "}
                  </h2>
                ) : "" || price ? (
                  <h2 className="font-semibold text-gray-800 mr-2">
                    {"₹" + price / 100}{" "}
                  </h2>
                ) : "" || defaultPrice ? (
                  <h2 className="font-semibold text-gray-800 mr-2">
                    {"₹" + defaultPrice / 100}{" "}
                  </h2>
                ) : (
                  ""
                )}
                {/* <div>{offerTags.title + " | " + offerTags.subTitle} </div> */}
              </div>
              <div className="text-sm text-gray-500 my-5 pr-5">
                {description}{" "}
              </div>
            </div>
            <img
              alt="Item Image"
              className="w-[7rem] h-[6rem] rounded-lg"
              src={CDN_URL + imageId}
            />
          </div>
        </div>
      </div>
      <div className="line-break border border-gray-300 my-4" />
    </>
  );
};
export default Itemcard;
