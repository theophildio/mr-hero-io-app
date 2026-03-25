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
        alert("App already installed!");
    }
    else {
        storedAppData.push(id);
        const data = JSON.stringify(storedAppData);
        localStorage.setItem("appInstalled", data);
    }
}


export { addAppToDB, getAppFromDB };
