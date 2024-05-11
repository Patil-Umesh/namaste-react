import { Link } from "react-router-dom";
import trolley from "../trolley.png";
import { useDispatch, useSelector } from "react-redux";
import { addCartPrice, clearCart } from "../utils/cartSlice";
import CartItems from "./CartItems";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const [cCode, setCCode] = useState(null);
  const cartItems = useSelector((store) => store.cart?.items);
  const cartPrice = useSelector((store) => store.cart?.cartPrice);
  const dispatch = useDispatch();
  // console.log(cartItems);
  const notify = () => toast("Coupen Code Applied Successfully🙌🤩 !");
  const handleAddMoreFood = () => {
    history.back();
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const getTotalCartValue = (items) => {
    const allPrices = items.map((item) =>
      item?.card?.info?.defaultPrice && item?.card?.info?.finalPrice
        ? item?.card?.info?.finalPrice / 100
        : 0 || item?.card?.info?.price
        ? item?.card?.info?.price / 100
        : 0 || item?.card?.info?.defaultPrice
        ? item?.card?.info?.defaultPrice / 100
        : 0
    );
    console.log(allPrices);
    let totalPrice = 0;
    for (let i = 0; i < allPrices.length; i++) {
      totalPrice += allPrices[i];
    }
    console.log(totalPrice);
    dispatch(addCartPrice(totalPrice));
  };
  useEffect(() => {
    getTotalCartValue(cartItems);
  }, [cartItems]);

  const applyCoupen = (c_code) => {
    if (c_code) {
      notify();
      setCCode("");
    } else {
      alert("Please enter Coupen Code");
    }
  };

  return (
    <>
      <div className="text-center pt-[160px] pb-20">
        <h3 className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          FOOD CART
        </h3>
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <div className="justify-center content-center my-7 ">
              <img
                className="size-40 mx-auto"
                alt="Trolley Image"
                src={trolley}
              />
            </div>
            <h3 className="font-bold text-gray-600 text-xl">
              Your Cart Is Currently Empty!
            </h3>
            <Link to="/">
              <button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-2 focus:ring-purple-300 font-medium rounded-lg text-sm mx-5 my-10 px-3 py-3 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                Add Some Food To Cart
              </button>
            </Link>
          </div>
        ) : (
          <>
            <CartItems items={cartItems} />
            <div className="bg-gray-50 shadow-lg p-4 my-6 mx-[400px] rounded-lg border-2 border-purple-500">
              <h1 className="pb-2 mb-2 font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                ORDER SUMMARY
              </h1>
              <div className="px-[200px] flex justify-between">
                <h3 className="my-2 text-gray-600 font-bold">
                  {cartItems.length === 1
                    ? cartItems.length + " Item"
                    : cartItems.length + " Items"}
                </h3>
                <h3 className="my-2 text-gray-600 font-bold">₹ {cartPrice} </h3>
              </div>
              <div className="px-[200px] flex justify-between">
                <h3 className="my-2 text-gray-600 font-bold">CGST/SGST</h3>
                <h3 className="my-2 text-gray-600 font-bold">₹-</h3>
              </div>
              <div className="px-[200px] flex justify-between">
                <h3 className="my-2 text-gray-600 font-bold">
                  Delivery Charges
                </h3>
                <h3 className="my-2 text-gray-600 font-bold ">₹-</h3>
              </div>
              <div className="line-break border border-dashed border-gray-300 my-2" />
              <div className="px-[200px] flex justify-between">
                <h3 className="my-2 text-gray-600 font-bold">Total</h3>
                <h3 className="my-2 text-gray-600 font-bold ">
                  ₹ {cartPrice}{" "}
                </h3>
              </div>
              <label className="my-2 text-gray-600 font-bold px-[200px]">
                Have A Coupen Code? Use Below 👇
              </label>
              <div className="px-[200px] flex justify-between content-center items-center">
                <input
                  value={cCode}
                  onChange={(e) => {
                    setCCode(e.target.value);
                  }}
                  className="h-10 my-5 ps-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder="Coupen Code?"
                />
                <button
                  onClick={() => applyCoupen(cCode)}
                  className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-2 focus:ring-purple-300 font-medium rounded-lg text-sm my-5 py-2 px-6 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  APPLY
                </button>
                <ToastContainer autoClose={2000} />
              </div>
              <div className="px-[200px] border-2 border-purple-500 rounded-lg">
                <h2 className="text-lg">ACCEPTED PAYMENT METHODS</h2>
                <div className="flex justify-evenly">
                  <img
                    className="h-14 w-16"
                    alt="VISA"
                    src="https://cdn-icons-png.flaticon.com/128/15398/15398152.png"
                  />
                  <img
                    className="h-14 w-16"
                    alt="MasterCard"
                    src="https://cdn-icons-png.flaticon.com/128/15398/15398050.png"
                  />
                  <img
                    className="h-14 w-16"
                    alt="PayPal"
                    src="https://cdn-icons-png.flaticon.com/128/15398/15398063.png"
                  />
                </div>
                <div className="flex justify-evenly">
                  <img
                    className="h-14 w-16"
                    alt="GPay"
                    src="https://cdn-icons-png.flaticon.com/128/6124/6124998.png"
                  />
                  <img
                    className="h-14 w-16"
                    alt="Stripe"
                    src="https://cdn-icons-png.flaticon.com/128/5968/5968382.png"
                  />
                  <img
                    className="h-14 w-16"
                    alt="Discover"
                    src="https://cdn-icons-png.flaticon.com/128/349/349230.png"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between mx-[400px]">
              <button
                className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-2 focus:ring-purple-300 font-medium rounded-lg text-sm mx-5 my-10 px-3 py-3 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                onClick={handleAddMoreFood}
              >
                Add More Food
              </button>
              <button
                className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-2 focus:ring-purple-300 font-medium rounded-lg text-sm mx-5 my-10 px-3 py-3 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Cart;
