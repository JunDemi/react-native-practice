import { FEApiCaller } from '@/lib/api';
import { formatNumberUnits } from '@/lib/utils/formatNumberUnits';
import { CmcFearGreedLatest, CmcQuote, CoinMarketCapGlobalMetricsData } from '@/types/api/cmc.interface';
import { ResponseObject } from '@/types/swagger';
import { useQueries } from '@tanstack/react-query';
import { View, StyleSheet, Text } from 'react-native';
import ChartChevron from '../common/ChartChevron';
import { formatLpadFixedNumber } from '@/lib/utils/formatLpadFixedNumber';
import Animated, { useSharedValue, withTiming, useAnimatedStyle, Easing, runOnJS } from 'react-native-reanimated';
import { useEffect } from 'react';

const GlobalMetrics = () => {
  //useQuery
  const [cmcGlobalData, fearGreedData] = useQueries({
    queries: [
      {
        queryKey: ['get', 'cmc-quotes'],
        queryFn: async () =>
          FEApiCaller<ResponseObject<CoinMarketCapGlobalMetricsData>>('/common/crypto/quotes/latest', {
            method: 'GET',
          }),
        refetchInterval: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
      },
      {
        queryKey: ['get', 'feargreed-latest'],
        queryFn: async () =>
          FEApiCaller<ResponseObject<CmcFearGreedLatest>>('/common/crypto/fear-and-greed/latest', {
            method: 'GET',
          }),
        refetchInterval: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
      },
    ],
  });

  const globalMetrics = cmcGlobalData.data?.result || {};
  const quote = globalMetrics?.quote;
  const fearGreed = fearGreedData.data?.result?.value || 0;

  const metricsList: React.ReactNode[] = [
    <MarketCap quote={quote} key='market-cap' />,
    <Volume24h quote={quote} key='volume-24h' />,
    <Dominance globalMetrics={globalMetrics} key='dominance' />,
    <FearGreedIndex fearGreedValue={fearGreed} key='fear-greed' />,
    <Futures globalMetrics={globalMetrics} key='futures' />,
  ];

  // Animated values
  const translateY = useSharedValue(0);
  const currentIndex = useSharedValue(0);
  const slideHeight = 24;

  // Auto-play function
  const nextSlide = () => {
    'worklet';
    const nextIndex = currentIndex.value + 1;

    if (nextIndex >= metricsList.length) {
      // 마지막 슬라이드에서 첫 번째로 이동
      currentIndex.value = nextIndex;
      translateY.value = withTiming(
        -nextIndex * slideHeight,
        {
          duration: 300,
          easing: Easing.out(Easing.cubic),
        },
        (finished) => {
          if (finished) {
            // 애니메이션 완료 후 즉시 처음 위치로 리셋 (애니메이션 없이)
            currentIndex.value = 0;
            translateY.value = 0;
          }
        },
      );
    } else {
      // 일반적인 다음 슬라이드로 이동
      currentIndex.value = nextIndex;
      translateY.value = withTiming(-nextIndex * slideHeight, {
        duration: 300,
        easing: Easing.out(Easing.cubic),
      });
    }
  };

  // Start auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      runOnJS(nextSlide)();
    }, 2000); // 2초마다 전환

    return () => clearInterval(interval);
  }, [metricsList.length]);

  // Animated style
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <View style={style.metricsContainer}>
      <View style={style.sliderWrapper}>
        <Animated.View style={[style.slidesContainer, animatedStyle]}>
          {metricsList.map((item, index) => (
            <View key={index} style={style.slide}>
              {item}
            </View>
          ))}
          {/* 무한 루프를 위한 첫 번째 슬라이드 복제 */}
          <View style={style.slide}>{metricsList[0]}</View>
        </Animated.View>
      </View>
    </View>
  );
};

export default GlobalMetrics;

const MarketCap = ({ quote }: { quote?: CmcQuote }) => {
  const quoteUSD = quote?.USD;
  return (
    <View style={style.container}>
      <View>
        <Text style={style.label}>시가 총액: </Text>
      </View>
      <View style={style.valueContainer}>
        <Text style={style.value}>${formatNumberUnits(quoteUSD?.total_market_cap)}</Text>
        <View style={style.changeContainer}>
          <ChartChevron
            size={8}
            direction={(quoteUSD?.total_market_cap_yesterday_percentage_change || 0) < 0 ? 'down' : 'up'}
          />
          <Text
            style={[
              style.changeText,
              {
                color: (quoteUSD?.total_market_cap_yesterday_percentage_change || 0) >= 0 ? '#099250' : '#F63D68',
              },
            ]}
          >
            {formatLpadFixedNumber(quoteUSD?.total_market_cap_yesterday_percentage_change)}%
          </Text>
        </View>
      </View>
    </View>
  );
};

const Volume24h = ({ quote }: { quote?: CmcQuote }) => {
  const quoteUSD = quote?.USD;
  return (
    <View style={style.container}>
      <View>
        <Text style={style.label}>24시간 거래량: </Text>
      </View>
      <View style={style.valueContainer}>
        <Text style={style.value}>${formatNumberUnits(quoteUSD?.total_volume_24h)}</Text>
        <View style={style.changeContainer}>
          <ChartChevron
            size={8}
            direction={(quoteUSD?.total_volume_24h_yesterday_percentage_change || 0) < 0 ? 'down' : 'up'}
          />
          <Text
            style={[
              style.changeText,
              {
                color: (quoteUSD?.total_volume_24h_yesterday_percentage_change || 0) >= 0 ? '#099250' : '#F63D68',
              },
            ]}
          >
            {formatLpadFixedNumber(quoteUSD?.total_volume_24h_yesterday_percentage_change)}%
          </Text>
        </View>
      </View>
    </View>
  );
};

const Dominance = ({ globalMetrics }: { globalMetrics?: CoinMarketCapGlobalMetricsData }) => {
  return (
    <View style={style.container}>
      <View>
        <Text style={style.label}>도미넌스: </Text>
      </View>
      <View style={style.valueContainer}>
        <Text style={style.value}>BTC: {globalMetrics?.btc_dominance?.toFixed(1) || 0}%</Text>
        <Text style={style.value}>ETH: {globalMetrics?.eth_dominance?.toFixed(1) || 0}%</Text>
      </View>
    </View>
  );
};

const Futures = ({ globalMetrics }: { globalMetrics?: CoinMarketCapGlobalMetricsData }) => {
  return (
    <View style={style.container}>
      <Text style={style.label}>선물 거래량: </Text>
      <Text style={style.value}>${formatNumberUnits(globalMetrics?.derivatives_volume_24h)}</Text>
    </View>
  );
};

const FearGreedIndex = ({ fearGreedValue }: { fearGreedValue: number }) => {
  return (
    <View style={style.container}>
      <Text style={style.label}>공포 & 탐욕: </Text>
      <Text style={style.value}>{fearGreedValue}/100</Text>
    </View>
  );
};

const style = StyleSheet.create({
  metricsContainer: {
    width: '100%',
    height: 24,
    paddingHorizontal: 15,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  sliderWrapper: {
    height: 24,
    overflow: 'hidden',
  },
  slidesContainer: {
    flexDirection: 'column',
  },
  slide: {
    height: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 0,
  },
  label: {
    color: '#616161',
    fontSize: 10,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  value: {
    color: '#3B82F6',
    fontSize: 10,
  },
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  changeText: {
    marginLeft: 2,
    fontSize: 10,
  },
});
