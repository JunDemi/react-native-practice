import { useState } from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useTodoStore } from "./src/store/useTodoStore";
import TodoItem from "./src/components/TodoItem";

const App = () => {
  const [text, setText] = useState<string>("");
  const { todos, addTodo } = useTodoStore();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My To-DO App With React Native!!</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="할 일 입력"
          value={text}
          onChangeText={setText}
        />
        <Button
          title="추가"
          onPress={() => {
            if (text.trim()) {
              addTodo(text);
              setText("");
            }
          }}
        />
      </View>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TodoItem item={item} />}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});
