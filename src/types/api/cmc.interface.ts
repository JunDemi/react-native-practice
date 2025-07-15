/** 글로벌 시가총액 / 기준가 등 */
export interface CoinMarketCapGlobalMetricsData {
  active_cryptocurrencies?: number;
  total_cryptocurrencies?: number;
  active_market_pairs?: number;
  active_exchanges?: number;
  total_exchanges?: number;
  eth_dominance?: number;
  btc_dominance?: number;
  eth_dominance_yesterday?: number;
  btc_dominance_yesterday?: number;
  eth_dominance_24h_percentage_change?: number;
  btc_dominance_24h_percentage_change?: number;
  defi_volume_24h?: number;
  defi_volume_24h_reported?: number;
  defi_market_cap?: number;
  defi_24h_percentage_change?: number;
  stablecoin_volume_24h?: number;
  stablecoin_volume_24h_reported?: number;
  stablecoin_market_cap?: number;
  stablecoin_24h_percentage_change?: number;
  derivatives_volume_24h?: number;
  derivatives_volume_24h_reported?: number;
  derivatives_24h_percentage_change?: number;
  total_crypto_dex_currencies?: number;
  today_incremental_crypto_number?: number;
  past_24h_incremental_crypto_number?: number;
  past_7d_incremental_crypto_number?: number;
  past_30d_incremental_crypto_number?: number;
  today_change_percent?: number;
  tracked_yearly_number?: {
    maxIncrementalNumber?: number;
    minIncrementalNumber?: number;
    maxIncrementalDate?: string;
    minIncrementalDate?: string;
  };
  quote?: CmcQuote;
  last_updated?: string;
}
export interface CmcQuote {
  USD?: {
    price?: number;
    volume_24h?: number;
    volume_change_24h?: number;
    percent_change_1h?: number;
    percent_change_24h?: number;
    percent_change_7d?: number;
    percent_change_30d?: number;
    percent_change_60d?: number;
    percent_change_90d?: number;
    market_cap?: number;
    market_cap_dominance?: number;
    fully_diluted_market_cap?: number;
    tvl?: number;
    total_market_cap?: number;
    total_volume_24h?: number;
    total_volume_24h_reported?: number;
    altcoin_volume_24h?: number;
    altcoin_volume_24h_reported?: number;
    altcoin_market_cap?: number;
    defi_volume_24h?: number;
    defi_volume_24h_reported?: number;
    defi_24h_percentage_change?: number;
    defi_market_cap?: number;
    stablecoin_volume_24h?: number;
    stablecoin_volume_24h_reported?: number;
    stablecoin_24h_percentage_change?: number;
    stablecoin_market_cap?: number;
    derivatives_volume_24h?: number;
    derivatives_volume_24h_reported?: number;
    derivatives_24h_percentage_change?: number;
    total_market_cap_yesterday?: number;
    total_volume_24h_yesterday?: number;
    total_market_cap_yesterday_percentage_change?: number;
    total_volume_24h_yesterday_percentage_change?: number;
    last_updated?: string;
  };
}

/** 글로벌 최신 공포-탐욕 지수 */
export interface CmcFearGreedLatest {
  value?: number;
  value_classification?: string;
  update_time?: string;
  timestamp?: string;
}

/** 글로벌 공포-탐욕 지수 리스트, 롱숏 포지션 비율 */
export interface CmcMarketData {
  fearAndGreed?: CmcFearGreedLatest[];
  topLongShortAccountRatio?: ILongShortRatio[];
}

export interface ILongShortRatio {
  symbol?: string;
  longAccount?: number;
  shortAccount?: number;
  longShortRatio?: number;
  timestamp?: number;
}
