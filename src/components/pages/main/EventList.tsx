import { FEApiCaller } from '@/lib/api';
import { NSGetNoticeBoard } from '@/types/api/notice.interface';
import { useQuery } from '@tanstack/react-query';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';

const eventCardBg: Record<
  number,
  {
    colors: [string, string, ...string[]]; // 최소 2개 색상 보장
    start: { x: number; y: number };
    end: { x: number; y: number };
  }
> = {
  0: {
    colors: ['#0F8032', '#25CB5D'],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
  },
  1: {
    colors: ['#FD6100', '#F0B116'],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
  },
  2: {
    colors: ['#9103F8', '#C94DC9'],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
  },
};

const EventList = () => {
  //useQuery
  const { data: eventData, status } = useQuery({
    queryKey: ['get', 'home-event'],
    queryFn: async () =>
      FEApiCaller<NSGetNoticeBoard.Response>('/notice/event', {
        method: 'GET',
      }),
    refetchOnWindowFocus: false,
  });
  const eventList = eventData?.result?.list?.slice(0, 3) || [];

  if (eventList.length > 0 && status === 'success') {
    return (
      <View style={style.container}>
        {eventList.map((event, index) => {
          const gradientConfig = eventCardBg[index % 3]; // 3개 색상을 순환
          return (
            <LinearGradient
              key={event.no}
              colors={gradientConfig.colors}
              start={gradientConfig.start}
              end={gradientConfig.end}
              style={style.eventCard}
            >
              <Text style={style.eventText}>{event.title}</Text>
            </LinearGradient>
          );
        })}
      </View>
    );
  }
};

export default EventList;

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
  },
  eventCard: {
    padding: 10,
    aspectRatio: 1 / 1,
    borderRadius: 5,
    backgroundColor: 'red',
    flex: 1,
    gap: 10,
  },
  eventText: {
    fontSize: 11,
    color: 'white', // 그라디언트 배경에 잘 보이도록 흰색 텍스트
    fontWeight: '600',
  },
});
