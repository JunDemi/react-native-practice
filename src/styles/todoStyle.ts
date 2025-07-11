import { StyleSheet } from 'react-native';

export const todoStyle = StyleSheet.create({
  header: {
    marginBottom: 20,
  },
  backLink: {
    marginBottom: 10,
  },
  backText: {
    fontSize: 16,
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});

export const todoItemStyle = StyleSheet.create({
  todoItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  todoText: {
    fontSize: 18,
  },
  done: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
});
