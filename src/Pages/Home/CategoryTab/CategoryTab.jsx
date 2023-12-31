import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabDetails from "../TabDetails/TabDetails";
const CategoryTab = () => {
  const [activeTab, setActiveTab] = useState("Building Blocks");
  const [datas, setDatas] = useState([]);
  const handleTab = (tab) => {
    setActiveTab(tab);
  };
  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
  const filteredData = datas.filter((data) => data.subCategory === activeTab);

  return (
    <Tabs className="my-8">
      <TabList>
        <Tab onClick={() => handleTab("Building Blocks")}>Building Blocks</Tab>
        <Tab onClick={() => handleTab("Construction Vehicles")}>
          Construction Vehicles
        </Tab>
        <Tab onClick={() => handleTab("Engineering Kits")}>
          Engineering Kits
        </Tab>
      </TabList>

      <TabPanel style={{ display: "grid" }} className="grid grid-cols-3 gap-4">
        {filteredData.map((product, i) => (
          <TabDetails key={i} product={product}></TabDetails>
        ))}
        {/* {filteredData.map((cat) => {
          return cat.products.map((product, i) => (
            <TabDetails key={i} product={product}></TabDetails>
          ));
        })} */}
      </TabPanel>
      <TabPanel style={{ display: "grid" }} className="grid grid-cols-3 gap-4">
        {filteredData.map((product, i) => (
          <TabDetails key={i} product={product}></TabDetails>
        ))}
      </TabPanel>
      <TabPanel style={{ display: "grid" }} className="grid grid-cols-3 gap-4">
        {filteredData.map((product, i) => (
          <TabDetails key={i} product={product}></TabDetails>
        ))}
      </TabPanel>
    </Tabs>
  );
};

export default CategoryTab;
