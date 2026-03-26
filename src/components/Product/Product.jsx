import { Link } from "react-router-dom";
import Download from "../../assets/icon-downloads.png";
import Rating from "../../assets/icon-ratings.png";

const Product = ({ product }) => {
  const { id, image, title, downloads, ratingAvg } = product;

  const formatDownloads = (num) =>
    new Intl.NumberFormat("en", {
      notation: "compact",
      compactDisplay: "short",
    }).format(num);

  return (
    <Link to={`/apps/appdetails/${id}`}>
      <div className="flex flex-col justify-between bg-base-100 shadow-md p-2 md:p-5 h-[87.5] rounded-lg">
        <figure className="flex flex-col items-center">
          <img className="w-2/3" src={image} alt={title} />
        </figure>
        <div className="p-0 mt-4">
          <h3 className="text-md md:card-title mb-2">{title}</h3>
          <div className="card-actions justify-between p-0">
            <div className="badge bg-[#F1F5E8] text-[#00D390] rounded-sm">
              <img className="w-4" src={Download} alt={Download} />
              {formatDownloads(downloads)}
            </div>
            <div className="badge bg-[#FFF0E1] text-[#FF8811] rounded-sm">
              <img className="w-4" src={Rating} alt={Rating} />
              {ratingAvg}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
