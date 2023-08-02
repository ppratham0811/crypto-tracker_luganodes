"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchLatestListings } from "@/actions";
import { CryptoCoinData } from "@/types";
// import data from "../../public/data.json";
const AllCoins = () => {
  const [data, setData] = useState<CryptoCoinData[]>([]);

  const getLatestData = async () => {
    const response = await fetchLatestListings();
    const res = await response?.json();
    setData(res);
  };

  useEffect(() => {
    getLatestData();
  }, []);

  return (
    <>
      <div className="w-full overflow-hidden border border-gray-700 rounded-lg ring-1 ring-black ring-opacity-5 mb-8 bg-gray-900 overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <thead className="text-xs font-semibold tracking-wide text-right uppercase border-b border-gray-700 text-gray-400 bg-gray-800">
            <tr>
              <td className="px-4 py-3 sticky left-0 bg-primary z-10 text-left">
                Name
              </td>

              <td className="px-4 py-3">Price</td>
              <td className="px-4 py-3">1h%</td>
              <td className="px-4 py-3">24h%</td>
              <td className="px-4 py-3">7d%</td>
              <td className="px-4 py-3">Volume</td>
              <td className="px-4 py-3">Market Cap</td>
              <td className="px-4 py-3">Graph</td>
            </tr>
          </thead>
          <tbody>
            {data.map((c, idx) => (
              <>
                <tr key={idx} className="text-right">
                  <td className="px-4 py-3 sticky left-0 bg-primary z-10 text-left">
                    <Link href={`/crypto/${c.id}`}>{c.name}</Link>
                  </td>

                  <td className="px-4 py-3 ">{c.quote.USD.price}</td>

                  <td className="px-4 py-3 ">
                    {c.quote.USD.percent_change_1h}
                  </td>
                  <td className="px-4 py-3 ">
                    {c.quote.USD.percent_change_24h}
                  </td>
                  <td className="px-4 py-3 ">
                    {c.quote.USD.percent_change_7d}
                  </td>
                  <td className="px-4 py-3 ">{c.quote.USD.market_cap}</td>
                  <td className="px-4 py-3 ">{c.quote.USD.volume_24h}</td>
                  <td className="px-4 py-3 ">Graph</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllCoins;
