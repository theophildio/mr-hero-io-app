import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import ErrorApp from "../../assets/App-Error.png";
import InstalledApp from "../../components/InstalledApp/InstalledApp";
import { getAppFromDB, removeAppFromDB } from "../../utilities/addToDB";

const Installation = () => {
  const apps = useLoaderData();
  const [appList, setAppList] = useState([]);
  const [sortLabel, setSortLabel] = useState("Sort By Download Count ⬇️");

  useEffect(() => {
    const storedAppData = getAppFromDB();
    const convertToNumData = storedAppData.map((data) => parseInt(data));
    const installedApp = apps.filter((app) =>
      convertToNumData.includes(app.id),
    );
    setAppList(installedApp);
  }, []);

  const handleSort = (type) => {
    const sorted = [...appList].sort((a, b) => {
      if (type === "desc") {
        return b.downloads - a.downloads;
      } else {
        return a.downloads - b.downloads;
      }
    });

    setAppList(sorted);

    if (type === "desc") {
      setSortLabel("Download Count: High-Low ⬇️");
    } else {
      setSortLabel("Download Count: Low-High ⬆️");
    }
  };

  const handleUninstall = (id) => {
    removeAppFromDB(id);

    const updatedList = appList.filter((app) => app.id !== id);
    setAppList(updatedList);
    toast("App Uninstalled ❌");
  };

  return (
    <div className="py-16 px-16 mx-auto text-center bg-[#D9D9D9]">
      {appList.length === 0 ? (
        <div className="text-center py-10">
          <figure>
            <img
              className="inline-block mb-5"
              src={ErrorApp}
              alt="App Not Found"
            />
          </figure>
          <h2 className="text-3xl font-bold">OPPS!! APP NOT FOUND</h2>
          <p className="text-gray-500 my-4">
            The App you are requesting is not found on our system. please try
            another apps
          </p>
          <Link
            to="/"
            className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-8 text-white"
          >
            Go Back
          </Link>
        </div>
      ) : (
        <>
          <h2 className="text-5xl font-bold">Your Installed Apps</h2>
          <p className="pt-4 text-[#627382]">
            Explore All Trending Apps on the Market developed by us
          </p>

          <div className="flex justify-between items-center my-4">
            <h3 className="font-bold">{appList.length} App Found</h3>

            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 bg-[#D9D9D9] border-gray-400"
              >
                {sortLabel}
              </div>

              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a onClick={() => handleSort("desc")}>High-Low</a>
                </li>
                <li>
                  <a onClick={() => handleSort("asc")}>Low-High</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            {appList.map((installApp) => (
              <InstalledApp
                key={installApp.id}
                installApp={installApp}
                handleUninstall={handleUninstall}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Installation;
