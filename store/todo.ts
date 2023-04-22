import { defineStore } from "pinia";

interface TodosState {
  text: string;
  id: number;
}

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: [] as TodosState[],
  }),
  actions: {
    addTodo: ({ text, id }: { text: string; id: number }) => {
      const state = useTodoStore();
      // console.log(text, id);
      state.todos.push({ text, id });
    },
    removeTodo: (index: number) => {
      const state = useTodoStore();
      state.todos.splice(index, 1);
    },
    editTodo: ({ text, id }: { text: string; id: number }) => {
      const state = useTodoStore();
      state.todos=state.todos.map((item) =>
        item.id == id ? { text, id } : item
      );
    },
  },
});
