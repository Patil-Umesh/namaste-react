import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { restData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    sla,
  } = restData?.info;
  const { deliveryTime } = restData?.info.sla;

  return (
    <div className="rest-card">
      <img
        className="rest-card-img1"
        alt="Image not found!!"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name} </h3>
      <h4>{cuisines.join(", ")} </h4>
      <h4>{avgRatingString} Ratings</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} Minutes</h4>
    </div>
  );
};
export default RestaurantCard;
