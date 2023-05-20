import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Toy from "../Toy/Toy";

const Toys = () => {
  const [toys, setToys] = useState([]);

  const [activeTab, setActiveTab] = useState("Sports Car");

  useEffect(() => {
    fetch(`http://localhost:5000/allToys/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });
  }, [activeTab]);

  const result = toys?.filter((toy) => toy.sub_category === activeTab);
  console.log(result);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <Tabs className="mt-8">
      <TabList className="text-center font-bold text-2xl">
        <Tab>Toys</Tab>
      </TabList>

      <TabPanel className="text-center font-semibold">
        <Tabs forceRenderTabPanel>
          <TabList>
            <Tab onClick={() => handleTabClick("Sports Car")}>Sports Car</Tab>
            <Tab onClick={() => handleTabClick("Truck")}>Truck</Tab>
            <Tab onClick={() => handleTabClick("Mini Police Car")}>
              Mini Police Car
            </Tab>
          </TabList>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-5">
              {toys?.map((toy) => (
                <Toy key={toy._id} toy={toy}></Toy>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-5">
              {toys?.map((toy) => (
                <Toy key={toy._id} toy={toy}></Toy>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-5">
              {toys?.map((toy) => (
                <Toy key={toy._id} toy={toy}></Toy>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </TabPanel>
    </Tabs>
  );
};

export default Toys;
