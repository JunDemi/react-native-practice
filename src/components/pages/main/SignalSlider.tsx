import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Animated, { useSharedValue, withTiming, useAnimatedStyle, Easing, runOnJS } from 'react-native-reanimated';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { FEApiCaller } from '@/lib/api';
import dayjs from 'dayjs';
import { ResponseObject } from '@/types/swagger';
import { SignalRolling } from '@/types/api/signal.interface';

const { width: screenWidth } = Dimensions.get('window');

const SignalSlider = () => {
  //useQuery
  const { data: signalData, status } = useQuery({
    queryKey: ['get', 'rolling-signal'],
    queryFn: async () =>
      FEApiCaller<ResponseObject<SignalRolling>>('/common/signal', {
        method: 'GET',
      }),
    refetchOnWindowFocus: false,
  });
  const signalList = signalData?.result?.list || [];

  // Animated values
  const translateX = useSharedValue(0);
  const currentIndex = useSharedValue(0);
  const slideWidth = screenWidth - 30; // 화면 너비에서 좌우 패딩(15px * 2) 제외

  // Auto-play function
  const nextSlide = () => {
    'worklet';
    const nextIndex = currentIndex.value + 1;

    if (nextIndex >= signalList.length) {
      // 마지막 슬라이드에서 첫 번째로 이동
      currentIndex.value = nextIndex;
      translateX.value = withTiming(
        -nextIndex * slideWidth,
        {
          duration: 1000,
          easing: Easing.out(Easing.cubic),
        },
        (finished) => {
          if (finished) {
            // 애니메이션 완료 후 즉시 처음 위치로 리셋 (애니메이션 없이)
            currentIndex.value = 0;
            translateX.value = 0;
          }
        },
      );
    } else {
      // 일반적인 다음 슬라이드로 이동
      currentIndex.value = nextIndex;
      translateX.value = withTiming(-nextIndex * slideWidth, {
        duration: 1000,
        easing: Easing.out(Easing.cubic),
      });
    }
  };

  // Start auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      runOnJS(nextSlide)();
    }, 4000); // 4초마다 전환

    return () => clearInterval(interval);
  }, [signalList.length]);

  // Animated style
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });
  return (
    <View style={style.sliderWrapper}>
      {status === 'success' && (
        <Animated.View style={[style.slidesContainer, animatedStyle]}>
          {signalList.map((item, index) => (
            <View key={index} style={[style.slide, { width: slideWidth }]}>
              <Image
                source={require('@assets/btc.png')}
                style={{
                  width: 28,
                  height: 28,
                }}
              />
              <View>
                <View style={style.content01}>
                  <Text style={style.slideText}>{item.symbol}</Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#9DA4AE',
                    }}
                  >
                    •
                  </Text>
                  <Text style={style.slideText}>
                    {dayjs.utc(item.eventTime).format('YYYY.MM.DD (HH:mm:ss [GMT+9])')}
                  </Text>
                </View>
                <View style={style.content02}>
                  <Text style={style.positionText}>Position</Text>
                  <Text style={[style.starText, { marginRight: 9 }]}>****</Text>
                  <Text style={style.positionText}>Amount</Text>
                  <Text style={style.starText}>****</Text>
                </View>
              </View>
            </View>
          ))}
          {/* 무한 루프를 위한 첫 번째 슬라이드 복제 */}
          <View style={[style.slide, { width: slideWidth }]}>
            <Image
              source={require('@assets/btc.png')}
              style={{
                width: 28,
                height: 28,
              }}
            />
            <View>
              <View style={style.content01}>
                <Text style={style.slideText}>{signalList[0]?.symbol}</Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#9DA4AE',
                  }}
                >
                  •
                </Text>
                <Text style={style.slideText}>
                  {dayjs.utc(signalList[0]?.eventTime).format('YYYY.MM.DD (HH:mm:ss [GMT+9])')}
                </Text>
              </View>
              <View style={style.content02}>
                <Text style={style.positionText}>Position</Text>
                <Text style={[style.starText, { marginRight: 9 }]}>****</Text>
                <Text style={style.positionText}>Amount</Text>
                <Text style={style.starText}>****</Text>
              </View>
            </View>
          </View>
        </Animated.View>
      )}
    </View>
  );
};

export default SignalSlider;

const style = StyleSheet.create({
  sliderWrapper: {
    overflow: 'hidden',
  },
  slidesContainer: {
    flexDirection: 'row',
  },
  slide: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 4,
  },
  content01: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  content02: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  slideText: {
    fontSize: 12,
    fontWeight: 600,
  },
  positionText: {
    fontSize: 10,
    color: '#4D5761',
  },
  starText: {
    fontSize: 10,
    color: '#FF6A00',
  },
});
