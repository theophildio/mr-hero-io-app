import { useLoaderData, useParams } from "react-router";
import Download from "../../assets/icon-downloads.png";
import Star from "../../assets/icon-ratings.png";
import Review from "../../assets/icon-review.png";

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const apps = useLoaderData();
  const singleApp = apps.find((app) => app.id === appId);
  const { image, title, companyName, downloads, ratingAvg, reviews, description, size } =
    singleApp;

  const formatDownloads = (num) =>
    new Intl.NumberFormat("en", {
      notation: "compact",
      compactDisplay: "short",
    }).format(num);

  return (
    <div className="p-16 bg-[#F5F5F5]">
      <div className="flex gap-8">
        <figure>
          <img className="w-80" src={image} alt={title} />
        </figure>
        <div className="w-full">
          <div>
            <h3 className="text-3xl font-bold">{title}</h3>
            <p>
              Developed by{" "}
              <span className="text-purple-600">{companyName}</span>
            </p>
          </div>

          <div className="flex gap-12 mt-6 border-t border-t-slate-200 py-4">
            <div>
              <figure>
                <img className="w-5" src={Download} alt={title} />
              </figure>
              <p>
                <small>Downloads</small>
              </p>
              <h5 className="text-2xl font-extrabold">
                {formatDownloads(downloads)}
              </h5>
            </div>
            <div>
              <figure>
                <img className="w-5" src={Star} alt={title} />
              </figure>
              <p>
                <small>Average Ratings</small>
              </p>
              <h5 className="text-2xl font-extrabold">
                {formatDownloads(ratingAvg)}
              </h5>
            </div>
            <div>
              <figure>
                <img className="w-5" src={Review} alt={title} />
              </figure>
              <p>
                <small>Total Reviews</small>
              </p>
              <h5 className="text-2xl font-extrabold">
                {formatDownloads(reviews)}
              </h5>
            </div>
          </div>
          <button className="btn bg-[#00d390] text-white">Install Now ({size} MB)</button>
        </div>
      </div>
      <div className="mt-6 border-t border-t-slate-200 py-4">
        <h3 className="text-xl font-bold">Ratings</h3>
      </div>
      <div className="mt-6 border-t border-t-slate-200 py-4">
        <h3 className="text-xl font-bold">Description</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
