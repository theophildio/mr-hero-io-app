import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import InstalledApp from "../../components/InstalledApp/InstalledApp";
import { getAppFromDB, removeAppFromDB } from "../../utilities/addToDB";

const Installation = () => {
  const apps = useLoaderData();
  const [appList, setAppList] = useState([]);
  const [sortLabel, setSortLabel] = useState("Sort By Size ⬇️");

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
        return b.size - a.size;
      } else {
        return a.size - b.size;
      }
    });

    setAppList(sorted);

    if (type === "desc") {
      setSortLabel("Size: Bigger to Smaller ⬇️");
    } else {
      setSortLabel("Size: Smaller to Bigger ⬆️");
    }
  };

  const handleUninstall = (id) => {
  removeAppFromDB(id);

  const updatedList = appList.filter((app) => app.id !== id);
  setAppList(updatedList);
};

  return (
    <div className="py-16 px-16 mx-auto text-center bg-[#D9D9D9]">
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
              <a onClick={() => handleSort("desc")}>Bigger to Smaller</a>
            </li>
            <li>
              <a onClick={() => handleSort("asc")}>Smaller to Bigger</a>
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
          ></InstalledApp>
        ))}
      </div>
    </div>
  );
};

export default Installation;
