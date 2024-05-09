import logo from "../tasty-eats-logo.png";
import facebook from "../facebook-48.png";
import twitter from "../twitter.png";
import insta from "../instagram-48.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex justify-between bg-pink-100 h-[300px] w-full py-20 px-20">
        <div className="w-[250px]">
          <Link to="/">
            <img alt="Logo" src={logo} className="w-28 h-[70px]" />
          </Link>
          <div className="my-2 font-semibold text-gray-700">
            Life is too short to eat boring food.
          </div>
        </div>
        <div className="w-[250px]">
          <h2 className="font-bold">TALK WITH US</h2>
          <div className="border border-gray-400 mb-4"></div>
          <div>Call: +91 - 9876543210</div>
          <div className="cursor-pointer hover:underline underline-offset-2 decoration-gray-800">
            Support: support@tastyeats.com{" "}
          </div>
          <div className="cursor-pointer hover:underline underline-offset-2 decoration-gray-800">
            For Queries: team@tastyeats.com{" "}
          </div>
        </div>
        <div className="w-[250px]">
          <h2 className="font-bold">SERVICES</h2>
          <div className="border border-gray-400 mb-4"></div>
          <ul>
            <li className="cursor-pointer hover:underline underline-offset-2 decoration-gray-800">
              Chinese Banquet Service
            </li>
            <li className="cursor-pointer hover:underline underline-offset-2 decoration-gray-800">
              Buffet Service
            </li>
            <li className="cursor-pointer hover:underline underline-offset-2 decoration-gray-800">
              Catering Service
            </li>
            <li className="cursor-pointer hover:underline underline-offset-2 decoration-gray-800">
              Bulk Orders
            </li>
            <li className="cursor-pointer hover:underline underline-offset-2 decoration-gray-800">
              Home Delivery
            </li>
          </ul>
        </div>
        <div className="w-[250px]">
          <h2 className="font-bold">KEEP CONNECTED</h2>
          <div className="border border-gray-400 mb-4"></div>
          <a href="https://www.facebook.com/" target="_blank">
            <div className="flex my-2">
              <img
                className="w-10 h-10 cursor-pointer"
                alt="Facebook"
                src={facebook}
              />
              <p className="px-4 py-1 cursor-pointer hover:underline underline-offset-2 decoration-gray-800">
                Facebook
              </p>
            </div>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <div className="flex my-2">
              <img
                className="w-10 h-10 cursor-pointer"
                alt="Instagram"
                src={insta}
              />
              <p className=" px-4 py-1 cursor-pointer hover:underline underline-offset-2 decoration-gray-800">
                Instagram
              </p>
            </div>
          </a>
          <a href="https://twitter.com/?lang=en" target="_blank">
            <div className="flex my-2 pl-1">
              <img
                className="w-[2.1rem] h-[2.1rem] cursor-pointer"
                alt="Twitter"
                src={twitter}
              />
              <p className=" px-4 py-1 cursor-pointer hover:underline underline-offset-2 decoration-gray-800">
                Twitter
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="bg-black w-full h-12 py-2 text-center bg-gradient-to-r from-pink-500 to-violet-500">
        ©2024, Made with ❤ in India By{" "}
        <a
          className="hover:underline underline-offset-2 decoration-gray-800"
          href="https://www.linkedin.com/in/umesh-patil2504/"
          target="_blank"
        >
          Umesh Patil
        </a>
      </div>
    </>
  );
};
export default Footer;
