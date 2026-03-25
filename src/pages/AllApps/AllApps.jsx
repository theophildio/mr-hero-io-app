import { useLoaderData } from "react-router";
import Products from "../../components/Products/Products";

const AllApps = () => {
  const products = useLoaderData();
  return (
    <div className="py-16 px-16 text-center bg-[#D9D9D9]">
      <h2 className="text-5xl font-bold">Our All Applications</h2>
      <p className="pt-4 text-[#627382]">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex justify-between mt-6">
        <p className="font-bold">({products.length}) Apps Found</p>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>
      <div className="pt-10">
        <Products products={products} />
      </div>
    </div>
  );
};

export default AllApps;
