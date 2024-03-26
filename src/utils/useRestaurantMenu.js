import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resID) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resID);
    const json = await data.json();
    setResMenu(json);
  };
  return resMenu;
};
export default useRestaurantMenu;
