export interface CryptoCoinData {
  id: number;
  name: string;
  quote: {
    USD: {
      market_cap: number;
      market_cap_dominance: number;
      percent_change_1h: number;
      percent_change_7d: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_60d: number;
      percent_change_90d: number;
      price: number;
      volume_24h: number;
      volume_change_24h: number;
    };
  };
}
