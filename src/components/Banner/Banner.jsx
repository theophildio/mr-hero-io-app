import Apple from "../../assets/apple-app.png";
import Gplay from "../../assets/google-play.png";
import AppDisplay from "../../assets/hero.png";

const Banner = () => {
  return (
    <div className="pt-12 text-center w-3/5 mx-auto">
      <h1 className="text-6xl font-bold text-[#001931]">We Build <br /> <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] inline-block text-transparent bg-clip-text">Productive</span> Apps</h1>
      <p className="my-4">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
      <div className="flex gap-4 justify-center items-center my-8">
        <button className="btn"><img src={Gplay} alt="Google Play icon" />Google Play</button>
        <button className="btn"><img src={Apple} alt="Google Play icon" />App Store</button>
      </div>
      <img src={AppDisplay} alt="App display" />
    </div>
  );
};

export default Banner;
