import { Pressable, Button, Text, StyleSheet } from "react-native";
import { Todo, useTodoStore } from "../store/useTodoStore";

const TodoItem = ({ item }: { item: Todo }) => {
  const { toggleTodo, removeTodo } = useTodoStore();
  return (
    <Pressable
      onPress={() => toggleTodo(item.id)}
      onLongPress={() => {}}
      style={styles.todoItem}
    >
      <Text style={[styles.todoText, item.done && styles.done]}>
        {item.text}
      </Text>
      <Button title="삭제" onPress={() => removeTodo(item.id)}></Button>
    </Pressable>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  todoItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  todoText: {
    fontSize: 18,
  },
  done: {
    textDecorationLine: "line-through",
    color: "#999",
  },
});
