import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import Star from "../Star";
import { CDN_URL } from "../utils/constants";
import Time from "../Time";
import discount from "../../src/icons8-discount.gif";
import Rupee from "../Rupee";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import vegicon from "../../src/Vegetarian.png";
import nonvegicon from "../../src/Non-veg.png";
import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resID } = useParams();
  const resMenu = useRestaurantMenu(resID);
  // console.log(resMenu);

  if (resMenu === null) return <Shimmer />;
  const {
    name,
    cuisines,
    areaName,
    sla,
    avgRatingString,
    totalRatingsString,
    feeDetails,
    costForTwoMessage,
    veg,
  } = resMenu?.data?.cards[2]?.card?.card?.info ?? {};
  const { offers } =
    resMenu?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle ?? {};
  const { itemCards, title } =
    resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card ?? {};
  const categories =
    resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <>
      <div className="restaurant-menu-main flex justify-between mx-[400px] pt-[150px]">
        <div className="restaurant-menu">
          <h3 className="rest-menu-name text-xl text-gray-700 font-semibold py-2">
            {name}
          </h3>
          <p className="rest-menu-cuisines text-gray-500 text-[0.85rem]">
            {cuisines?.join(", ")}
          </p>
          <p className="rest-menu-areaname text-gray-500 text-[0.85rem]">
            {areaName + ", " + sla?.lastMileTravelString}
          </p>
        </div>
        <div className="rest-menu-ratings border border-gray-300 rounded-md  px-[6px] py-[14px] cursor-pointer">
          <div className="rest-menu-ratings-star flex">
            <div className="style-svg pr-1 pt-[0.35rem]">
              <Star />
            </div>
            <div className="rest-menu-ratings-num text-green-600 font-bold">
              {avgRatingString}
            </div>
          </div>
          <div className="rest-menu-ratings-line border border-gray-300"></div>
          <div className="rest-menu-ratings-str text-gray-500 text-[0.75rem]">
            {totalRatingsString}
          </div>
        </div>
      </div>
      {feeDetails?.message ? (
        <div className="sla-time-icon flex mx-[400px] my-3">
          <img
            className="sla-icon w-5 h-5 mr-2"
            alt="Image not found"
            src={CDN_URL + feeDetails?.icon}
          />
          <p className="sla-time text-gray-500 text-[0.85rem]">
            {feeDetails?.message}{" "}
          </p>
        </div>
      ) : (
        <div className="no-sla-message"></div>
      )}
      <div className="dotted-line border border-dashed border-gray-300 mx-[400px]" />
      <div className="timer-cost flex mx-[400px] my-6">
        <div className="mt-1 mr-2">
          <Time />
        </div>
        <div className="time-str mr-5">{sla?.slaString} </div>
        <div className="mt-1 mr-2">
          <Rupee />
        </div>
        <div className="cost-for-two">{costForTwoMessage} </div>
      </div>
      <div className="offers-container flex flex-wrap mx-[400px]">
        {offers?.map((offer) => (
          <div
            className="offer flex border justify-center border-gray-300 rounded-md h-[4rem] w-auto mr-[15px] mb-[15px] pt-[8px] px-3"
            key={offer?.info?.offerIds}
          >
            {
              <img
                className="discount w-5 h-5 mt-[12px] mr-1"
                alt="Image not found"
                src={discount}
              />
            }
            <div className="offer-text">
              <p>{offer?.info?.header}</p>
              <p className="text-gray-500 text-xs">
                {offer?.info?.couponCode === undefined
                  ? ""
                  : offer?.info?.couponCode + " | "}
                {offer?.info?.description === undefined
                  ? ""
                  : offer?.info?.description.replace("|", "")}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-[400px] m-2">
        {veg ? (
          <div className="flex">
            <img
              className="w-5 h-5 mr-2 mt-[4px]"
              alt="Veg Icon"
              src={vegicon}
            />
            <p>PURE VEG </p>
          </div>
        ) : (
          <div className="flex">
            <img
              className="w-5 h-5 mr-2 mt-[4px]"
              alt="NON-Veg Icon"
              src={nonvegicon}
            />
            <p>NON VEG </p>
          </div>
        )}{" "}
      </div>
      <div className="line-break border-[4px] border-gray-100 mx-[400px]" />
      <div className="category-items mx-[400px] mt-5">
        {categories?.map((category) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
          />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
