import { Link } from "react-router-dom";
import Error from "../../assets/error-404.png";

const ErrorPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 p-16">
        <figure>
            <img src={Error} alt="404 Error" />
        </figure>
        <h2 className="text-3xl font-bold text-center">Oops, page not found!</h2>
        <p className="text-center">The page you are looking for is not available.</p>
        <Link to="/" className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-8 text-white">
          Go Back
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
