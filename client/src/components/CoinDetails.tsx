"use client";
import { useState, useEffect, useRef } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { CryptoCoinData } from "@/types";
// import data from "../../public/data.json";
import { BsFillBellFill } from "react-icons/bs";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import axios from "axios";

const CoinDetails = ({
  coinInfo,
  coinId,
}: {
  coinInfo: CryptoCoinData;
  coinId: number;
}) => {
  const addCoinToWatchList = async (coinId: number) => {};

  const [priceInput, setPriceInput] = useState<string>("");
  const addAlertForUser = async () => {
    if (Number(priceInput) > 0) {
      await axios
        .post("http://localhost:3001/luganodes/set-alert", {
          price: priceInput,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.error(e);
        });
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="p-8">
        <div className="md:flex md:items-center md:justify-between flex flex-col md:flex-row">
          <div className="flex items-center justify-center">
            <h1 className="font-bold text-5xl">{coinInfo.name}</h1>
            <button
              className="p-2 bg-gold rounded-lg text-2xl mx-4"
              onClick={() => addCoinToWatchList(coinId)}
            >
              <AiOutlineStar />
            </button>
          </div>
          <div className="flex items-center justify-center">
            <h1 className="font-bold text-4xl">
              ${Number(coinInfo.quote.USD.price).toFixed(2)}
            </h1>
            <div
              className={
                coinInfo.quote.USD.percent_change_1h < 0
                  ? "bg-red-500 p-2 mx-4 rounded-lg"
                  : "bg-green-500 p-2 mx-4 rounded-lg"
              }
            >
              {Number(coinInfo.quote.USD.percent_change_1h).toFixed(2)}%
            </div>
          </div>
        </div>

        <div className="my-4">
          <h1 className="text-xl">Track {coinInfo.name}</h1>
          <div
            className="bg-gold text-white py-2 px-4 w-48 rounded-lg flex items-center justify-center"
            onClick={onOpen}
          >
            <BsFillBellFill />
            <button className="">Set Alert</button>
          </div>
        </div>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Set an Alert</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                type="number"
                placeholder="Enter a price"
                min={0}
                onChange={(e) => setPriceInput(e.target.value)}
              />
            </ModalBody>

            <ModalFooter>
              <Button
                variant="solid"
                onClick={() => addAlertForUser()}
              >
                Done
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <h1>Coin Details</h1>
        <UnorderedList className="my-8">
          <ListItem>Market Cap: {coinInfo.quote.USD.market_cap}</ListItem>
          <ListItem>
            Market Cap Dominance: {coinInfo.quote.USD.market_cap_dominance}
          </ListItem>
          <ListItem>
            Percentage change in past 1h: {coinInfo.quote.USD.percent_change_1h}
          </ListItem>
          <ListItem>
            Percentage change in past 24h:{" "}
            {coinInfo.quote.USD.percent_change_24h}
          </ListItem>
          <ListItem>
            Percentage change in past 7d: {coinInfo.quote.USD.percent_change_7d}
          </ListItem>
          <ListItem>
            Percentage change in past 30d:{" "}
            {coinInfo.quote.USD.percent_change_30d}
          </ListItem>
          <ListItem>Volume in 24h: {coinInfo.quote.USD.volume_24h}</ListItem>
          <ListItem>
            Volume change in 24h: {coinInfo.quote.USD.volume_change_24h}
          </ListItem>
        </UnorderedList>
      </div>
    </>
  );
};

export default CoinDetails;
