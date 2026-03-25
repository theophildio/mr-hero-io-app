import Download from "../../assets/icon-downloads.png";
import Rating from "../../assets/icon-ratings.png";

const Product = ({ product }) => {
  const { image, title, downloads, ratingAvg } = product;

  const formatDownloads = (num) =>
    new Intl.NumberFormat("en", {
      notation: "compact",
      compactDisplay: "short",
    }).format(num);

  return (
    <div className="card bg-base-100 shadow-sm p-5">
      <figure>
        <img className="w-1/3" src={image} alt={title} />
      </figure>
      <div className="card-body p-0 mt-4">
        <h3 className="card-title">{title}</h3>
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
  );
};

export default Product;
