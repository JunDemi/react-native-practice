import { View, StyleSheet, Image } from 'react-native';
import GlobalMetrics from '../common/GlobalMetrics';

const Header = () => {
  return (
    <View style={style.header}>
      <View style={style.logoContainer}>
        <Image source={require('@assets/logo.png')} style={style.logo} />
      </View>
      <GlobalMetrics />
    </View>
  );
};

export default Header;

const style = StyleSheet.create({
  header: {
    height: 64,
    flexDirection: 'column',
    alignItems: 'flex-start',
    zIndex: 5,
  },
  metricsContainer: {
    height: 24,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  logoContainer: {
    paddingHorizontal: 20,
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {
    width: 100,
    height: 22,
    resizeMode: 'cover',
  },
});
