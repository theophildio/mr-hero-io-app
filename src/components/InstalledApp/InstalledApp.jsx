import Download from "../../assets/icon-downloads.png";
import Star from "../../assets/icon-ratings.png";
const InstalledApp = ({ installApp }) => {
  const { image, title, downloads, ratingAvg, size } = installApp;
  const formatDownloads = (num) =>
    new Intl.NumberFormat("en", {
      notation: "compact",
      compactDisplay: "short",
    }).format(num);
  return (
    <div className="card card-side bg-base-100 shadow-sm mb-3 p-3 rounded-sm">
      <figure>
        <img className="w-20 object-contain bg-gray-200 p-2 rounded-sm" src={image} alt={title} />
      </figure>
      <div className="card-body flex-row justify-between items-center p-0 ml-3">
        <div className="flex flex-col gap-2">
          <h2 className="card-title">{title}</h2>
          <div className="flex gap-3">
            <div className="flex gap-1">
            <img className="w-4 object-contain" src={Download} alt={title} />
            <p className="text-[#00D390]"><small>{formatDownloads(downloads)}</small></p>
          </div>
          <div className="flex gap-1">
            <img className="w-4 object-contain" src={Star} alt={title} />
            <p className="text-[#FF8811]"><small>{ratingAvg}</small></p>
          </div>
          <p><small>{size} MB</small></p>
          </div>
        </div>
        <div className="card-actions">
          <button className="btn bg-[#00D390] text-white">Uninstall</button>
        </div>
      </div>
    </div>
  );
};

export default InstalledApp;
