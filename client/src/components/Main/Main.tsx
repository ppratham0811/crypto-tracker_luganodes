"use client";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import AllCoins from "../AllCoins";
import { useState, useEffect } from "react";

const Main = () => {
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
            <AllCoins />
          </TabPanel>
          <TabPanel>
            <p>Your Watchlist</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Main;
