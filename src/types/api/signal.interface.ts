export interface SignalRolling {
  totalCount?: number;
  list: {
    no?: number;
    symbol?: string;
    position?: string;
    eventTime?: string;
    price?: number;
    signalBotNo?: number;
  }[];
}


/** 아르마 봇 시그널 지표 정보 */
export interface SignalArma {
  boxBreakout?: IBoxBreakout;
  boxSetting?: IBoxSetting;
  signalResults?: SignalArmaList[];
  totalCount?: number;
}

export interface SignalArmaList {
  no?: number;
  /** 심볼 */
  symbol?: string;
  /** 예상 포지션 */
  position?: 'LONG' | 'SHORT' | 'WAIT';
  eventTime?: string;
  price?: number;
  signalBotNo?: number;
  type?: string;
  /** 박스권 내 유무 */
  boxIn?: boolean;
  /** 추세전환 유무 */
  reversal?: boolean;
  /** 예상 수익률 */
  expectedProfitRate?: number;
}

export interface IBoxBreakout {
  no?: number;
  signalBotNo?: number;
  seq?: number;
  symbol?: string;
  kind?: 'ATTEMPT' | 'BREAKOUT' | 'REENTRY';
  result?: 'UP' | 'DOWN';
  basePrice?: number;
  price?: number;
  time?: string;
  createDt?: string;
}

export interface IBoxSetting {
  no?: number;
  signalBotNo?: number;
  seq?: number;
  symbol?: string;
  timeframe?: string;
  windowSize?: number;
  calculateTime?: string;
  supportPrice?: number;
  resistancePrice?: number;
  createDt?: string;
}
