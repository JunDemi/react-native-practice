import Header from '@/components/layout/Header';
import Navigation from '@/components/layout/Navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <SafeAreaProvider>
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
    </SafeAreaProvider>
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
    padding: 15,
  },
});
