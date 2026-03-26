import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import HeroApps from "../../components/HeroApps/HeroApps";
import Stat from "../../components/Stat/Stat";

const Home = () => {
    const products = useLoaderData();
    return (
        <div>
            <Banner />
            <Stat />
            <HeroApps products= {products} />
        </div>
    );
};

export default Home;