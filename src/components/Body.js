import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [restList, setRestList] = useState([]);
  const [filterName, setFilterName] = useState("Most Rated");
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);

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
    const filteredList = restList.filter((rest) => rest.info.avgRating > 4.2);
    filterName === "Most Rated"
      ? setFilterName("Clear Filter")
      : setFilterName("Most Rated");
    filterName === "Clear Filter"
      ? setFilteredList(restList)
      : setFilteredList(filteredList);
  };
  return restList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-bar">
          <div className="search-input">
            <input
              type="text"
              className="input-txt"
              placeholder="Search for restaurants and food"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            ></input>
          </div>
          <button
            className="search-btn"
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
          <button className="filter-btn" onClick={filterMostRated}>
            {filterName}
          </button>
        </div>
      </div>
      <div className="rest-container">
        {filteredList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard restData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
