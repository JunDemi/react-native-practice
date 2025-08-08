import { View, StyleSheet } from 'react-native';
import MainInfo from '@/components/pages/main/MainInfo';
import SignalSlider from '@/components/pages/main/SignalSlider';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localizedFormat);

const Home = () => {
  return (
    <View style={style.container}>
      <MainInfo title='Arma 선물 거래 시그널'>
        <SignalSlider />
      </MainInfo>
    </View>
  );
};

export default Home;

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
