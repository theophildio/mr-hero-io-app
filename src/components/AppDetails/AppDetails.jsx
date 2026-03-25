import { useLoaderData, useParams } from "react-router";
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
import { addAppToDB } from "../../utilities/addToDB";

const AppDetails = () => {
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

  const formatDownloads = (num) =>
    new Intl.NumberFormat("en", {
      notation: "compact",
      compactDisplay: "short",
    }).format(num);

  const data = [...ratings].reverse().map((item) => ({
    name: item.name,
    count: item.count,
  }));

  const handleAppInstall = id => {
    console.log(id);
    addAppToDB(id);
  }

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
          <button onClick={()=> handleAppInstall(id)} className="btn bg-[#00d390] text-white">
            Install Now ({size} MB)
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
