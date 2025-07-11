import { Pressable, Button, Text } from 'react-native';
import { todoItemStyle } from '@/styles/todoStyle';
import { Todo, useTodoStore } from '@/store/useTodoStore';

const TodoItem = ({ item }: { item: Todo }) => {
  const { toggleTodo, removeTodo } = useTodoStore();
  return (
    <Pressable onPress={() => toggleTodo(item.id)} onLongPress={() => {}} style={todoItemStyle.todoItem}>
      <Text style={[todoItemStyle.todoText, item.done && todoItemStyle.done]}>{item.text}</Text>
      <Button title='삭제' onPress={() => removeTodo(item.id)}/>
    </Pressable>
  );
};

export default TodoItem;
