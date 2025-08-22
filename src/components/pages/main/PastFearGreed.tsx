import { fearGreedLabel } from '@/lib/config/static-data';
import { CmcFearGreedLatest } from '@/types/api/cmc.interface';
import dayjs from 'dayjs';
import { StyleSheet, Text, View } from 'react-native';

const getValueColor = (value: number) => {
  if (value >= 0 && value <= 19) return '#16C784';
  if (value >= 20 && value <= 39) return '#93D900';
  if (value >= 40 && value <= 59) return '#dfbd00';
  if (value >= 60 && value <= 79) return '#EA8C00';
  if (value >= 80) return '#EA3943';
};

const PastFearGreed = ({ data }: { data: CmcFearGreedLatest[] }) => {
  const pastData = [data[0], data[6], data[30]].map((item, i) => {
    const title = {
      0: '어제',
      1: '지난 주',
      2: '지난 달',
    }[i];
    return {
      classification: fearGreedLabel[item.value_classification || ''],
      value: item.value,
      title,
    };
  });

  const copyFearGreedList = [...data];
  // 연간 최고 및 최저
  const fearGreedSort = copyFearGreedList.sort((a, b) => b.value! - a.value!);
  const yearlyFearGreed = [fearGreedSort[0], fearGreedSort[364]].map((item) => {
    return {
      classification: fearGreedLabel[item.value_classification || ''],
      value: item.value,
      timestamp: dayjs.unix(+item.timestamp!).format('YYYY.MM.DD'),
    };
  });

  return (
    <View style={style.container}>
      <View style={style.innerBox}>
        <Text style={style.boxTitle}>과거 수치</Text>
        <View style={style.boxValueWrapper}>
          {pastData.map((value, i) => (
            <View key={i} style={style.boxValue}>
              <Text style={style.boxValueText_1}>{value.classification}</Text>
              <Text style={[style.boxValueText_2, { color: getValueColor(value.value || 0) }]}>{value.value}</Text>
              <Text style={style.boxValueText_3}>{value.title}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={style.innerBox}>
        <Text style={style.boxTitle}>연간 최고 / 최저</Text>
        <View style={style.boxValueWrapper}>
          {yearlyFearGreed.map((value, i) => (
            <View key={i} style={style.boxValue}>
              <Text style={style.boxValueText_1}>{value.classification}</Text>
              <Text style={[style.boxValueText_2, { color: getValueColor(value.value || 0) }]}>{value.value}</Text>
              <Text style={style.boxValueText_3}>{value.timestamp}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default PastFearGreed;

const style = StyleSheet.create({
  container: {
    flex: 1,
    gap: 3,
  },
  innerBox: {
    padding: 5,
    flex: 1,
    gap: 5,
  },
  boxTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  boxValueWrapper: {
    flex: 1,
    flexDirection: 'row',
    gap: 5,
  },
  boxValue: {
    padding: 5,
    flex: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#F0F0F0',
    borderWidth: 1,
  },
  boxValueText_1: {
    fontSize: 8,
  },
  boxValueText_2: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  boxValueText_3: {
    marginTop: 3,
    fontSize: 8,
    fontWeight: 'bold',
  },
});
