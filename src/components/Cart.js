import { Link } from "react-router-dom";
import trolley from "../trolley.png";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CartItems from "./CartItems";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  // console.log(cartItems);
  const handleAddMoreFood = () => {
    history.back();
  };

  const handleClearCart = () => {
    dispatch(clearCart());
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
