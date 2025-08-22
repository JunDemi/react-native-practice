import { FEApiCaller } from '@/lib/api';
import { CmcFearGreedLatest, CmcMarketData } from '@/types/api/cmc.interface';
import { ResponseObject } from '@/types/swagger';
import { useQueries } from '@tanstack/react-query';
import { StyleSheet, View } from 'react-native';
import ProgressGage from './ProgressGage';
import PastFearGreed from './PastFearGreed';
import MainInfo from './MainInfo';
import LongShortRatio from './LongShortRatio';

const FeatGreed = () => {
  //useQuery
  const [latestData, marketData] = useQueries({
    queries: [
      {
        queryKey: ['get', 'feargreed-latest'],
        queryFn: async () =>
          FEApiCaller<ResponseObject<CmcFearGreedLatest>>('/common/crypto/fear-and-greed/latest', {
            method: 'GET',
          }),
        refetchInterval: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
      },
      {
        queryKey: ['get', 'market-data'],
        queryFn: async () =>
          FEApiCaller<ResponseObject<CmcMarketData>>('/common/crypto/market-data', {
            method: 'GET',
          }),
        refetchInterval: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
      },
    ],
  });
  const marketDataResult = marketData.data?.result;
  const isReady = latestData.status === 'success' && marketData.status === 'success';

  return isReady && (
    <View style={{ gap: 20 }}>
      <MainInfo title='공포 탐욕 지수'>
        <View style={style.container}>
          <ProgressGage data={latestData.data?.result} />
          <PastFearGreed data={marketDataResult?.fearAndGreed || []} />
        </View>
      </MainInfo>
      <MainInfo title='롱&숏 포지션 비율'>
        <LongShortRatio data={marketDataResult?.topLongShortAccountRatio || []}/>
      </MainInfo>
    </View>
  );
};

export default FeatGreed;

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 5,
  },
});
