const fetchLatestListings = async () => {
  const response = await fetch(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    {
      mode: "no-cors",
      headers: {
        "X-CMC_PRO_API_KEY": "83faf55c-0163-4987-abcd-646adaa7930e",
      },
    }
  );

  if (response.ok) {
    console.log("RESPONSE: ", response);
    return response.json();
  } else {
    console.error("Fetching issue");
  }
};

const fetchLatestCoinQuotes = async (coinId: number) => {
  const response = await fetch(
    `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=${coinId}`,
    {
      headers: {
        "X-CMC_PRO_API_KEY": "83faf55c-0163-4987-abcd-646adaa7930e",
      },
    }
  );
  if (response.ok) {
    return response.json();
  } else {
    console.error("Fetching data Error");
    return;
  }
};

export { fetchLatestListings, fetchLatestCoinQuotes };
