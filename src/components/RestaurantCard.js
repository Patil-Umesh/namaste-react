import Star from "../Star";
import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { restData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    areaName,
    sla,
    aggregatedDiscountInfoV3,
  } = restData?.info ?? {};
  const { deliveryTime } = restData?.info?.sla ?? {};

  return (
    <div className="rest-card p-1 m-3 w-[261px] h-[320px] bg-pink-100 shadow-md rounded-lg hover:-translate-y-1">
      <img
        className="rest-card-img1 w-[253px] h-[169px] rounded-lg"
        alt="Image not found!!"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="items-center">
        <h3 className="rest-name font-bold text-black pl-2">{name} </h3>
        <div className="flex pl-2 font-bold">
          <h4 className="items-center content-center mt-[0.35rem] mr-[0.35rem]">
            <Star />
          </h4>
          <h4 className="avg-rating">{avgRatingString + " . "}</h4>
          <h4 className="sla pl-2">{deliveryTime} mins</h4>
        </div>
        <h4 className="rest-cuisines pl-2">{cuisines.join(", ")} </h4>
        <h4 className="area-name pl-2">{areaName}</h4>
      </div>
    </div>
  );
};

export const DiscountLable = (RestaurantCard) => {
  return (props) => {
    const { restData } = props;
    const { aggregatedDiscountInfoV3 } = restData?.info ?? {};
    return (
      <>
        <label className="text-white font-bold text-xl absolute pl-7 mt-[150px]">
          {aggregatedDiscountInfoV3.header
            ? aggregatedDiscountInfoV3.header
            : " "}{" "}
          {aggregatedDiscountInfoV3.subHeader
            ? aggregatedDiscountInfoV3.subHeader
            : " "}
        </label>
        <RestaurantCard {...props} />
      </>
    );
  };
};
export default RestaurantCard;
