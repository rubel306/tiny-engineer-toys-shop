import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const CategoryTab = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Latest Products</Tab>
        <Tab>Best Sellers</Tab>
        <Tab>Featured Products</Tab>
      </TabList>

      <TabPanel>
        <h2>Our Latest Products</h2>
      </TabPanel>
      <TabPanel>
        <h2>Our Best Selling products</h2>
      </TabPanel>
      <TabPanel>
        <h2>Our Featured Products</h2>
      </TabPanel>
    </Tabs>
  );
};

export default CategoryTab;
