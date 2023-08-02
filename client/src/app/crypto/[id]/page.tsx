import CoinDetails from "@/components/CoinDetails";
import { fetchLatestCoinQuotes } from "@/actions";

const Coin = async ({ params }: { params: { id: number } }) => {
  const coinId = params.id;
  const coinDetails = await fetchLatestCoinQuotes(coinId);
  return (
    <>
      <div className="text-white">
        <CoinDetails coinInfo={coinDetails.data[coinId]} coinId={coinId} />
      </div>
    </>
  );
};

export default Coin;
