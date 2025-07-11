import Header from '@/components/layout/Header';
import { layoutStyle } from '@/styles/layoutStyle';
import { Stack } from 'expo-router';
import { SafeAreaView, View, Text } from 'react-native';

const RootLayout = () => {
  return (
    <SafeAreaView style={layoutStyle.container}>
      <Header />
      <View style={layoutStyle.content}>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: '#fff' },
            animation: 'none',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default RootLayout;
