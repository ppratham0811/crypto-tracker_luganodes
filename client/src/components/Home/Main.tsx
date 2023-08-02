"use client";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <div>
        <h1 className="font-bold text-2xl px-8">
          Track latest Cryptocurrencies by Market Cap
        </h1>
      </div>
      <Tabs>
        <TabList>
          <Tab>Cryptocurrencies</Tab>
          <Tab>Watchlist</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Home;
