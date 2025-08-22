import { ILongShortRatio } from '@/types/api/cmc.interface';
import { Image, StyleSheet, Text, View } from 'react-native';

const baseUrl = 'https://bin.bnbstatic.com/static/assets/logos';

const LongShortRatio = ({ data }: { data: ILongShortRatio[] }) => {
  return (
    <View>
      <View style={style.legendWrapper}>
        <View style={style.legend}>
          <View style={[style.legendDot, { backgroundColor: '#16b364' }]} />
          <Text style={style.legendText}>롱</Text>
        </View>
        <View style={style.legend}>
          <View style={[style.legendDot, { backgroundColor: '#f63d68' }]} />
          <Text style={style.legendText}>숏</Text>
        </View>
      </View>
      <View
        style={{
          gap: 12,
        }}
      >
        {data.map((item) => {
          const symbol = item?.symbol?.split('USDT')[0] || '';
          const longAccount = (item.longAccount || 0) * 100;
          const shortAccount = (item.shortAccount || 0) * 100;

          return (
            <View key={item.symbol} style={style.chartContainer}>
              <View style={style.symbolWrapper}>
                <Image source={{ uri: `${baseUrl}/${symbol}.png` }} style={{ width: 16, height: 16 }} />
                <Text style={{ fontSize: 8, width: 80 }}>{symbol}</Text>
              </View>
              <View style={{ flex: 1, gap: 3, paddingRight: 3 }}>
                <View style={style.chartContainer}>
                  <Text style={[style.chartValueText, { color: '#16b364' }]}>{longAccount.toFixed(2)}%</Text>
                  <Text style={[style.chartValueText, { color: '#f63d68' }]}>{shortAccount.toFixed(2)}%</Text>
                </View>
                <View style={style.chartWrapper}>
                  <View
                    style={[
                      style.chartBar,
                      {
                        width: `${longAccount}%`,
                        backgroundColor: '#16b364',
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                      },
                    ]}
                  />
                  <View
                    style={[
                      style.chartBar,
                      {
                        width: `${shortAccount}%`,
                        backgroundColor: '#f63d68',
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 10,
                      },
                    ]}
                  />
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default LongShortRatio;

const style = StyleSheet.create({
  container: {},
  legendWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 5,
  },
  legend: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  legendDot: {
    width: 5,
    height: 5,
    borderRadius: '100%',
  },
  legendText: {
    fontSize: 10,
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  symbolWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  chartValueText: {
    fontSize: 8,
    fontWeight: 'bold',
  },
  chartWrapper: {
    flexDirection: 'row',
    gap: 3,
  },
  chartBar: {
    height: 5,
  },
});
