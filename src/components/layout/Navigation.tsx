import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { View, StyleSheet, Text } from 'react-native';

const Navigation = () => {
  return (
    <View style={style.navigation}>
      {menuList.map((menu, index) => (
        <View key={index} style={style.menuItem}>
          {menu.icon}
          <Text style={{ fontSize: 12, color: '#555' }}>{menu.label}</Text>
        </View>
      ))}
    </View>
  );
};

export default Navigation;

const style = StyleSheet.create({
  navigation: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    height: 64,
    paddingHorizontal: 30,
    flexDirection: 'row',
    columnGap: 0,
    zIndex: 5,
  },
  menuItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
});

const menuList: {
  icon: React.ReactNode;
  label: string;
}[] = [
  {
    icon: <Feather name='user' size={20} color='#875BF7' />,
    label: '내 계정',
  },
  {
    icon: <MaterialCommunityIcons name='view-dashboard-outline' size={20} color='#875BF7' />,
    label: '대시보드',
  },
  {
    icon: <MaterialIcons name='insert-chart-outlined' size={20} color='#875BF7' />,
    label: '트레이딩',
  },
  {
    icon: <MaterialIcons name='event-busy' size={20} color='#875BF7' />,
    label: '이벤트',
  },
];
