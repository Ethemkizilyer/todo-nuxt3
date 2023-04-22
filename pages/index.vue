<template>
 <div class="max-w-md mx-auto">
    <h1 class="text-3xl font-bold text-center my-6">Todo App</h1>
    <div>
      <input type="text" v-model="newTodo" class="flex-grow px-4 py-2 rounded-l-lg border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white focus:outline-none focus:border-gray-500 w-[400px]"/>
      <button @click="addTodo" class="px-4 rounded-r-lg bg-green-500 text-white font-bold p-2 hover:bg-green-700">&#10010;</button>
    </div>
    <ul>
      <li v-for="(todo, index) in todos" :key="index" class="flex justify-between items-center bg-gray-200 rounded-lg p-4 my-2">
        <span class="text-lg font-medium">{{ todo.text }}</span>
        
        <div>
        <button @click="removeTodo(index)">&#10006;</button>
        <button @click="editTod(todo.id)">&#10002;</button></div>
        <div v-if="modal == todo.id">
          <input type="text" v-model="editText" />
          <button @click="editTodo(todo.id)">&#10004;</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { TodosState, useTodoStore } from "~/store/todo";

export default {
  setup() {
    const todoStore = useTodoStore();

    const newTodo = ref<string>("");
    const editText = ref<string>("");
    const modal = ref<number | null>(null);

    const addTodo = (): void  => {
      todoStore.addTodo({
        text: newTodo.value,
        id: Math.floor(Math.random() * 10000),
      });
      newTodo.value = "";
    };

    const removeTodo = (index: number) => {
      todoStore.removeTodo(index);
    };
    const editTodo = (id: number) => {
      modal.value = null;
      todoStore.editTodo({ text: editText.value, id });
      editText.value=""
    };
    const editTod = (id: number) => {
      modal.value = id;
    };

    return {
      todos: computed(() => todoStore.todos),
      newTodo,
      addTodo,
      removeTodo,
      editTodo,
      modal,
      editText,
      editTod,
    };
  },
};
</script>
