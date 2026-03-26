import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Download from "../../assets/icon-downloads.png";
import Star from "../../assets/icon-ratings.png";
import Review from "../../assets/icon-review.png";
import { addAppToDB, getAppFromDB } from "../../utilities/addToDB";

const AppDetails = () => {
  const [isInstalled, setIsInstalled] = useState(false);
  const { id } = useParams();
  const appId = parseInt(id);
  const apps = useLoaderData();
  const singleApp = apps.find((app) => app.id === appId);
  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    description,
    size,
    ratings,
  } = singleApp;

  useEffect(() => {
    const storedApps = getAppFromDB();
    const convertToNum = storedApps.map((item) => parseInt(item));

    if (convertToNum.includes(appId)) {
      setIsInstalled(true);
    }
  }, [appId]);

  const formatDownloads = (num) =>
    new Intl.NumberFormat("en", {
      notation: "compact",
      compactDisplay: "short",
    }).format(num);

  const data = [...ratings].reverse().map((item) => ({
    name: item.name,
    count: item.count,
  }));

  const handleAppInstall = (id) => {
    addAppToDB(id);
    setIsInstalled(true);
    toast.success("App Installed Successfully 🎉");
  };

  return (
    <div className="p-3 md:p-16 bg-[#F5F5F5]">
      <div className="flex gap-3 md:gap-8">
        <figure>
          <img className="w-32 md:w-80" src={image} alt={title} />
        </figure>
        <div className="w-full">
          <div>
            <h3 className="text-xl md:text-3xl font-bold">{title}</h3>
            <p className="text-xs">
              Developed by{" "}
              <span className="text-purple-600">{companyName}</span>
            </p>
          </div>

          <div className="flex gap-2 md:gap-12 mt-3 md:t-6 border-t border-t-slate-200 py-4">
            <div>
              <figure>
                <img className="w-5" src={Download} alt={title} />
              </figure>
              <p>
                <small className="text-xs">Downloads</small>
              </p>
              <h5 className="text-lg md:text-2xl font-extrabold">
                {formatDownloads(downloads)}
              </h5>
            </div>
            <div>
              <figure>
                <img className="w-5" src={Star} alt={title} />
              </figure>
              <p>
                <small className="text-xs">Average Ratings</small>
              </p>
              <h5 className="text-lg md:text-2xl font-extrabold">
                {formatDownloads(ratingAvg)}
              </h5>
            </div>
            <div>
              <figure>
                <img className="w-5" src={Review} alt={title} />
              </figure>
              <p>
                <small className="text-xs">Total Reviews</small>
              </p>
              <h5 className="text-lg md:text-2xl font-extrabold">
                {formatDownloads(reviews)}
              </h5>
            </div>
          </div>
          <button
            onClick={() => handleAppInstall(id)}
            disabled={isInstalled}
            className={`btn ${
              isInstalled ? "bg-gray-400 cursor-not-allowed" : "bg-[#00d390]"
            } text-white`}
          >
            {isInstalled ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>
      <div className="mt-6 border-t border-t-slate-200 py-4">
        <h3 className="text-xl font-bold">Ratings</h3>
        <div>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={data}
                layout="vertical"
                margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
              >
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />

                <Tooltip />

                <Bar dataKey="count" fill="#FF8811" radius={[4, 4, 4, 4]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="mt-6 border-t border-t-slate-200 py-4">
        <h3 className="text-xl font-bold">Description</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
