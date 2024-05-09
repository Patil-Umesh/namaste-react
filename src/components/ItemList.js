import React from "react";
import vegicon from "../../src/Vegetarian.png";
import Star from "../Star";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemList = ({ items }) => {
  const notify = (itemName) => toast(itemName + " is added to the cart!");

  const dispatch = useDispatch();
  // console.log(items);

  const handleAddItem = (item) => {
    const { name } = item?.card?.info ?? {};
    console.log(name);
    //Dispatch an Action:
    dispatch(addItem(item));
    notify(name);
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item?.card?.info?.id}>
          {item?.card?.info?.isVeg ? (
            <div className="flex px-2">
              <img
                className="w-5 h-5 mr-2 mt-[4px]"
                alt="Veg Icon"
                src={vegicon}
              />
              {item?.card?.info?.isBestseller ? (
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
          <div className="flex py-3">
            <div className="w-10/12 py-1 px-2">
              <div className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                {" "}
                {item?.card?.info?.name}{" "}
              </div>
              <div className="font-semibold">
                {item?.card?.info?.defaultPrice &&
                item?.card?.info?.finalPrice ? (
                  <h2 className="font-semibold text-gray-800 mr-2">
                    {"₹" + item?.card?.info?.finalPrice / 100}{" "}
                  </h2>
                ) : "" || item?.card?.info?.price ? (
                  <h2 className="font-semibold text-gray-800 mr-2">
                    {"₹" + item?.card?.info?.price / 100}{" "}
                  </h2>
                ) : "" || item?.card?.info?.defaultPrice ? (
                  <h2 className="font-semibold text-gray-800 mr-2">
                    {"₹" + item?.card?.info?.defaultPrice / 100}{" "}
                  </h2>
                ) : (
                  ""
                )}
              </div>
              <div className="text-gray-500 text-sm">
                {" "}
                {item?.card?.info?.description}{" "}
              </div>
            </div>
            <div>
              <div className="absolute">
                <button
                  onClick={() => handleAddItem(item)}
                  className="rounded-md shadow-lg w-24 px-2 py-1 bg-white text-green-500 mt-[5rem] ml-2"
                >
                  ADD
                </button>
                <ToastContainer autoClose={2000} />
              </div>
              {item?.card?.info?.imageId && (
                <img
                  alt="Item Image"
                  className="w-[7rem] h-[6rem] rounded-lg"
                  src={CDN_URL + item?.card?.info?.imageId}
                />
              )}
            </div>
          </div>
          <div className="line-break border border-dashed border-gray-300 my-8" />
        </div>
      ))}
    </div>
  );
};
export default ItemList;
