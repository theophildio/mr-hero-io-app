import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ErrorApp from "../../assets/App-Error.png";
import Products from "../../components/Products/Products";

const AllApps = () => {
  const products = useLoaderData();
  const [searchText, setSearchText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setIsSearching(true);

    const timeout = setTimeout(() => {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase()),
      );
      setFilteredProducts(filtered);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchText, products]);

  return (
    <div className="py-16 px-16 text-center bg-[#D9D9D9]">
      <h2 className="text-5xl font-bold">Our All Applications</h2>
      <p className="pt-4 text-[#627382]">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="flex justify-between mt-6">
        <p className="font-bold">({filteredProducts.length}) Apps Found</p>
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
          <input
            type="search"
            placeholder="Search apps..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </label>
      </div>

      <div className="pt-5">
        {isSearching ? (
          <div className="flex justify-center py-20">
            <span className="loading loading-spinner text-primary text-6xl"></span>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-10">
            <figure>
              <img
                className="inline-block mb-5"
                src={ErrorApp}
                alt="App Not Found"
              />
            </figure>
            <h2 className="text-3xl font-bold">OPPS!! APP NOT FOUND</h2>
            <p className="text-gray-500 my-4">
              The App you are requesting is not found on our system. Please try
              another app.
            </p>
            <Link
              to="/"
              className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-8 text-white"
            >
              Go Back
            </Link>
          </div>
        ) : (
          <Products products={filteredProducts} />
        )}
      </div>
    </div>
  );
};

export default AllApps;
