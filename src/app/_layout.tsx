import Header from '@/components/layout/Header';
import Navigation from '@/components/layout/Navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <SafeAreaView style={layoutStyle.container}>
      <QueryClientProvider client={queryClient}>
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
        <Navigation />
      </QueryClientProvider>
    </SafeAreaView>
  );
};

export default RootLayout;

const layoutStyle = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: '',
  },
  content: {
    flex: 1,
    padding: 20,
  },
});
