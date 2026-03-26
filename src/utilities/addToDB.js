import toast from "react-hot-toast";

const getAppFromDB = () => {
    const storedAppSTR = localStorage.getItem("appInstalled");

    if (storedAppSTR) {
        const storedAppData = JSON.parse(storedAppSTR);
        return storedAppData;
    }
    else {
        return [];
    }

}

const addAppToDB = id => {
    const storedAppData = getAppFromDB();

    if (storedAppData.includes(id)) {
        toast.error("App already installed!");
    }
    else {
        storedAppData.push(id);
        const data = JSON.stringify(storedAppData);
        localStorage.setItem("appInstalled", data);
    }
}

const removeAppFromDB = (id) => {
  const storedAppData = getAppFromDB();

  const remaining = storedAppData.filter(
    (appId) => parseInt(appId) !== parseInt(id)
  );

  localStorage.setItem("appInstalled", JSON.stringify(remaining));
};


export { addAppToDB, getAppFromDB, removeAppFromDB };
