import { useState } from 'react';
import { Button, FlatList, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { todoStyle } from '@/styles/todoStyle';
import TodoItem from '@/components/TodoItem';
import { useTodoStore } from '@/store/useTodoStore';

const Todo = () => {
  const [text, setText] = useState<string>('');
  const { todos, addTodo } = useTodoStore();

  console.log('Hello Todo');
  return (
    <>
      <View style={todoStyle.header}>
        <TouchableOpacity style={todoStyle.backLink} onPress={() => router.back()}>
          <Text style={todoStyle.backText}>← 홈으로</Text>
        </TouchableOpacity>
      </View>
      <View style={todoStyle.inputContainer}>
        <TextInput style={todoStyle.input} placeholder='할 일 입력' value={text} onChangeText={setText} />
        <Button
          title='추가'
          onPress={() => {
            if (text !== '') {
              addTodo(text);
              setText('');
            }
          }}
        />
      </View>
      <FlatList data={todos} keyExtractor={(item) => item.id} renderItem={({ item }) => <TodoItem item={item} />} />
    </>
  );
};

export default Todo;
