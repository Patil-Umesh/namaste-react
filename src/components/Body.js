import RestaurantCard, { DiscountLable } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restList, setRestList] = useState([]);
  const [filterName, setFilterName] = useState("Top Rated");
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const DiscountCard = DiscountLable(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      setRestList(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredList(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log(error);
    }
  };

  const filterMostRated = () => {
    const filteredList = restList.filter((rest) => rest.info.avgRating >= 4.3);
    filterName === "Top Rated"
      ? setFilterName("Clear Filter")
      : setFilterName("Top Rated");
    filterName === "Clear Filter"
      ? setFilteredList(restList)
      : setFilteredList(filteredList);
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h2 className="offline-status pt-[150px] pb-[150px] ml-[500px] text-gray-600 text-xl font-semibold">
        You are offline. Please check your internet connection...
      </h2>
    );
  if (restList.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      <div className="body bg-slate-600 pb-32">
        <div className="filter mb-16">
          <div className="search-bar flex pl-24">
            <div className="search-input pl-96">
              <input
                type="text"
                className="w-72 mt-32 p-4 ps-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for restaurants and food"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              ></input>
            </div>
            <button
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-2 focus:ring-purple-300 font-medium rounded-lg text-sm ml-10 mt-32 px-3 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              onClick={() => {
                const filteredList = restList.filter((rest) =>
                  rest?.info?.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                );
                setFilteredList(filteredList);
              }}
            >
              Search
            </button>
            <button
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-2 focus:ring-purple-300 font-medium rounded-lg text-sm mx-5 mt-32 px-3 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              onClick={filterMostRated}
            >
              {filterName}
            </button>
          </div>
        </div>
        <div className="rest-container flex flex-wrap mr-[330px] ml-[334px]">
          {filteredList.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {restaurant.info.aggregatedDiscountInfoV3 ? (
                <DiscountCard restData={restaurant} />
              ) : (
                <RestaurantCard restData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default Body;
