import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import InstalledApp from "../../components/InstalledApp/InstalledApp";
import { getAppFromDB } from "../../utilities/addToDB";

const Installation = () => {
  const apps = useLoaderData();

  const [appList, setAppList] = useState([]);

  useEffect(() => {
    const storedAppData = getAppFromDB();
    const convertToNumData = storedAppData.map(data => parseInt(data));
    const installedApp = apps.filter(app => convertToNumData.includes(app.id));
    setAppList(installedApp);
  }, []);
  
  return (
    <div className="py-16 px-16 mx-auto text-center bg-[#D9D9D9]">
      <h2 className="text-5xl font-bold">Your Installed Apps</h2>
      <p className="pt-4 text-[#627382]">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div>
        {
            appList.map(installApp => <InstalledApp key={installApp.id} installApp={installApp}></InstalledApp>)
        }
      </div>
    </div>
  );
};

export default Installation;
