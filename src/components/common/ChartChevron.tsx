import { AntDesign } from '@expo/vector-icons';

interface ChevronProps {
  direction?: 'up' | 'down';
  size?: number;
}

const ChartChevron = ({ direction = 'up', size = 24 }: ChevronProps) => {
  const isUp = direction === 'up';

  return <AntDesign name={isUp ? 'caretup' : 'caretdown'} size={size} color={isUp ? '#099250' : '#F63D68'} />;
};

export default ChartChevron;
