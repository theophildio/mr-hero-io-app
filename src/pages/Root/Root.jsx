import { useEffect, useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Header/Navbar";

const Root = () => {
  const navigation = useNavigation();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    let timeout;

    if (navigation.state === "loading") {
      setShowLoader(true);
    } else {
      timeout = setTimeout(() => setShowLoader(false), 200);
    }

    return () => clearTimeout(timeout);
  }, [navigation.state]);

  if (showLoader) {
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-[#f5f5f55d] z-50">
        <span className="loading loading-spinner text-primary text-6xl"></span>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
