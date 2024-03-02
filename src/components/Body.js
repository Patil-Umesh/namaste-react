import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restList, setRestList] = useState([]);
  const [filterName, setFilterName] = useState("Most Rated");
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setRestList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filterMostRated = () => {
    const filteredList = restList.filter((rest) => rest.info.avgRating > 4.2);
    setFilteredList(filteredList);
    filterName === "Most Rated"
      ? setFilterName("Clear Filter")
      : setFilterName("Most Rated");
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
          <RestaurantCard key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
