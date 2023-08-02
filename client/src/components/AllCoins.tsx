"use client";

interface CryptoQuote {
  USD: {
    price: number;
    market_cap: number;
    percent_change_1h: number;
    percent_change_24h: number;
    percent_change_7d: number;
    volume_24h: number;
  };
}

interface CryptoCoin {
  name: string;
  quote: CryptoQuote;
}

const AllCoins = ({ crypto }: { crypto: CryptoCoin[] }) => {
  return (
    <>
      <div className="w-full overflow-hidden border border-gray-700 rounded-lg ring-1 ring-black ring-opacity-5 mb-8 bg-gray-900 overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <thead className="text-xs font-semibold tracking-wide text-center uppercase border-b border-gray-700 text-gray-400 bg-gray-800">
            <tr>
              <td className="px-4 py-3">Name</td>

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
            {crypto.map((c, idx) => (
              <>
                <tr className="text-center">
                  <td className="px-4 py-3 ">{c.name}</td>

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
