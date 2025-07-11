import { View, Text, StyleSheet, Image } from 'react-native';

const Header = () => {
  return (
    <View style={style.header}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>My To-Do App</Text>
    </View>
  );
};

export default Header;

export const style = StyleSheet.create({
  header: {
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    zIndex: 5,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});
