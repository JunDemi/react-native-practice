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
  logoContainer: {
    paddingHorizontal: 15,
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
