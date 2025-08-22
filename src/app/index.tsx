import { View, StyleSheet, ScrollView } from 'react-native';
import MainInfo from '@/components/pages/main/MainInfo';
import SignalSlider from '@/components/pages/main/SignalSlider';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import EventList from '@/components/pages/main/EventList';
import FeatGreedMarket from '@/components/pages/main/FeatGreedMarket';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localizedFormat);

const Home = () => {
  return (
    <ScrollView contentContainerStyle={style.container} showsVerticalScrollIndicator={false}>
      <MainInfo title='Arma 선물 거래 시그널'>
        <SignalSlider />
      </MainInfo>
      <MainInfo title='이벤트'>
        <EventList />
      </MainInfo>
      <FeatGreedMarket />
    </ScrollView>
  );
};

export default Home;

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    gap: 20,
    paddingBottom: 64,
  },
});
