import Layout from "./layout";
import axios from "axios";
import Main from "@/components/Home/Main";

export default function Home() {
  // const fetchLatestListings = () => {
  //   let response = null;
  //   new Promise(async (resolve, reject) => {
  //     try {
  //       response = await axios.get(
  //         "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
  //         {
  //           headers: {
  //             "X-CMC_PRO_API_KEY": process.env.COIN_MARKET_CAP_API_KEY,
  //           },
  //         }
  //       );
  //     } catch (ex) {
  //       response = null;
  //       // error
  //       console.log(ex);
  //       reject(ex);
  //     }
  //     if (response) {
  //       // success
  //       const json = response.data;
  //       console.log(json);
  //       resolve(json);
  //     }
  //   });
  // };

  // fetchLatestListings();

  return (
    <>
      <main className="text-white">
        <div className="py-8" >
          <Main />
        </div>
      </main>
    </>
  );
}
