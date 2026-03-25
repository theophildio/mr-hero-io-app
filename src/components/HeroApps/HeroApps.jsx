import { Link } from "react-router";
import Products from "../Products/Products";

const HeroApps = ({ products }) => {
  return (
    <div className="py-16 px-16 mx-auto text-center bg-[#D9D9D9]">
      <h2 className="text-5xl font-bold">Trending Apps</h2>
      <p className="pt-4 text-[#627382]">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="pt-10">
        <Products products={products.slice(0, 8)} />
      </div>
      <div className="text-center mt-10">
        <Link
          to="/apps"
          className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white px-8"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default HeroApps;
