import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import Star from "../Star";
import { CDN_URL, MENU_API } from "../utils/constants";
import Time from "../Time";
import discount from "../../src/icons8-discount.gif";
import Rupee from "../Rupee";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const { resID } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API + resID);
      const json = await data.json();
      setResMenu(json);
    } catch (error) {
      console.log(error);
    }
  };
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
  } = resMenu?.data?.cards[0]?.card?.card?.info ?? {};
  const { offers } =
    resMenu?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle ?? {};
  const { itemCards, title } =
    resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card ?? {};

  return (
    <>
      <div className="restaurant-menu-main">
        <div className="restaurant-menu">
          <h3 className="rest-menu-name">{name}</h3>
          <p className="rest-menu-cuisines">{cuisines.join(", ")}</p>
          <p className="rest-menu-areaname">
            {areaName + ", " + sla?.lastMileTravelString}
          </p>
        </div>
        <div className="rest-menu-ratings">
          <div className="rest-menu-ratings-star">
            <div className="style-svg">
              <Star />
            </div>
            <div className="rest-menu-ratings-num">{avgRatingString}</div>
          </div>
          <div className="rest-menu-ratings-line"></div>
          <div className="rest-menu-ratings-str">{totalRatingsString}</div>
        </div>
      </div>
      {feeDetails.message ? (
        <div className="sla-time-icon">
          <img
            className="sla-icon"
            alt="Image not found"
            src={CDN_URL + feeDetails?.icon}
          />
          <p className="sla-time">{feeDetails?.message} </p>
        </div>
      ) : (
        <div className="no-sla-message"></div>
      )}
      <div className="dotted-line" />
      <div className="timer-cost">
        <Time />
        <div className="time-str">{sla?.slaString} </div>
        <Rupee />
        <div className="cost-for-two">{costForTwoMessage} </div>
      </div>
      <div className="offers-container">
        {offers.map((offer) => (
          <div className="offer" key={offer?.info?.offerIds}>
            {<img className="discount" alt="Image not found" src={discount} />}
            {offer?.info?.header + " | "}
            {offer?.info?.couponCode === undefined
              ? ""
              : offer?.info?.couponCode + " | "}
            {offer?.info?.description.replace("|", "")}
          </div>
        ))}
      </div>
      <div className="line-break" />
      <div className="recommended-items">
        <button className="recommended-btn">
          <h3>{title + " (" + itemCards?.length + ")"} </h3>
          <span>Icon</span>
        </button>
        <div>
          <ul className="rec-menu-list">
            {itemCards.map((item) => (
              <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
