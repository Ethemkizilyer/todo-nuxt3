<template>
  <div>
    <!-- <h1>Todos</h1> -->
    <div>
      <input type="text" v-model="newTodo" />
      <button @click="addTodo">Add</button>
    </div>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }}
        <button @click="removeTodo(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {ref}from "vue"
import { useTodoStore } from "~/store/todo";

export default {
  setup() {
    const todoStore = useTodoStore();

    const newTodo = ref('');

    const addTodo = () => {
      todoStore.addTodo(newTodo.value);
      newTodo.value = '';
    };

    const removeTodo = (index: number) => {
      todoStore.removeTodo(index);
    };

    return {
      todos: todoStore.todos,
      newTodo,
      addTodo,
      removeTodo
    };
  },
};
</script>