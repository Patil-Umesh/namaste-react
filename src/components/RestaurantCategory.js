import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const [collapseBtn, setCollapseBtn] = useState("➕");
  // console.log(data);
  const hideItemList = () => {
    setShowItems(!showItems);
    collapseBtn === "➕" ? setCollapseBtn("➖") : setCollapseBtn("➕");
  };
  return (
    <>
      <div className=" bg-gray-50 shadow-lg p-4 my-6">
        <div
          className="flex justify-between cursor-pointer"
          onClick={hideItemList}
        >
          <span className="text-md text-gray-800 font-bold px-2">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span>{collapseBtn} </span>
        </div>

        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </>
  );
};
export default RestaurantCategory;
