import Products from "../Products/Products";

const HeroApps = ({products}) => {
    return (
        <div className="py-16 text-center">
            <h1 className="text-5xl font-bold">Trending Apps</h1>
            <p className="pt-4 text-[#627382]">Explore All Trending Apps on the Market developed by us</p>
            <div className="pt-10">
                <Products products={products} />
            </div>
        </div>
    );
};

export default HeroApps;