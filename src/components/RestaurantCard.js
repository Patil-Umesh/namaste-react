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
      <h3 className="rest-name">{name} </h3>
      <h4 className="rest-cuisines">{cuisines.join(", ")} </h4>
      <h4 className="avg-rating">{avgRatingString} Ratings</h4>
      <h4 className="cost">{costForTwo}</h4>
      <h4 className="sla">{deliveryTime} Minutes</h4>
    </div>
  );
};
export default RestaurantCard;
