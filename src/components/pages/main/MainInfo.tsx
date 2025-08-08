import { StyleSheet, Text, View } from 'react-native';

interface MainInfoProps {
  title: string;
  children: React.ReactNode;
}

const MainInfo = ({ title, children }: MainInfoProps) => {
  return (
    <View style={style.container}>
      <View style={style.titleWrapper}>
        <Text style={style.title}>{title}</Text>
      </View>
      <View>{children}</View>
    </View>
  );
};

export default MainInfo;

const style = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 10,
  },
  titleWrapper: {
    backgroundColor: '#7839EE',
    borderRadius: 30,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  title: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#FFF',
  },
});
