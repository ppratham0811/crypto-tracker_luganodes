"use client";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import AllCoins from "../AllCoins";

import data from "../../../public/data.json";

const Home = () => {
  return (
    <>
      <div>
        <h1 className="font-bold text-2xl px-8">
          Track latest Cryptocurrencies by Market Cap
        </h1>
      </div>
      <Tabs className="my-4">
        <TabList>
          <Tab>Cryptocurrencies</Tab>
          <Tab>Watchlist</Tab>
        </TabList>

        <TabPanels className="w-full">
          <TabPanel>
            <AllCoins crypto={data} />
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
