import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: [] as string[],
  }),
  actions: {
    addTodo: (todo: string) => {
      const state = useTodoStore();
      state.todos.push(todo);
    },
    removeTodo: (index: number) => {
      const state = useTodoStore();
      state.todos.splice(index, 1);
    },
  },
});
