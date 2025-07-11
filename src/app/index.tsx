import { View, Text } from 'react-native';
import { Link } from 'expo-router';

const Home = () => {
  return (
    <View>
      <Text>홈입니다!!</Text>
      <Link href='/todo'>Todo List</Link>
    </View>
  );
};

export default Home;
