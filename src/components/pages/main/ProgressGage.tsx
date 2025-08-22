import { fearGreedLabel } from '@/lib/config/static-data';
import { CmcFearGreedLatest } from '@/types/api/cmc.interface';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';

const gageBarColor: {
  colors: [string, string, ...string[]];
  start: { x: number; y: number };
  end: { x: number; y: number };
} = {
  colors: ['#EA3943', '#EA8C00', '#F3D42F', '#93D900', '#16C784'],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
};

const ProgressGage = ({ data }: { data?: CmcFearGreedLatest }) => {
  const value = data?.value || 0; // 기본값 0 설정
  return (
    <View style={style.container}>
      <View style={{
        position: 'relative',
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 23,
      }}>
        <LinearGradient
          style={style.gageBar}
          colors={gageBarColor.colors}
          start={gageBarColor.start}
          end={gageBarColor.end}
        />
        <View
          style={[
            style.dotOuter,
            {
              bottom: `${value}%`,
              transform: [{ translateY: '50%' }],
            },
          ]}
        >
          <View style={style.dotInner}>
            <Text
              style={{
                color: '#FFF',
                fontSize: 9,
                fontWeight: 'bold',
              }}
            >
              {value}
            </Text>
          </View>
        </View>
      </View>

      <Text style={style.label}>{fearGreedLabel[data?.value_classification || '']}</Text>
    </View>
  );
};

export default ProgressGage;

const style = StyleSheet.create({
  container: {
    height: 180,
    width: 50,
    paddingVertical: 5,
    gap: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  gageBar: {
    borderRadius: 30,
    height: '100%',
    width: 10,
  },
  dotOuter: {
    width: 30,
    height: 30,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    borderRadius: '100%',
    alignSelf: 'center',
  },
  dotInner: {
    width: 22,
    height: 22,
    backgroundColor: '#7839EE',
    borderRadius: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  label: {
    fontSize: 9,
    fontWeight: 'bold',
  },
});
