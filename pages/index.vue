<template>
  <div>
    <!-- <h1>Todos</h1> -->
    <div>
      <input type="text" v-model="newTodo" />
      <button @click="addTodo">Add</button>
    </div>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo.text }}
        <button @click="removeTodo(index)">❌</button>
        <button @click="editTod(todo.id)">🛠</button>
        <div v-if="modal== todo.id">
      <input type="text" v-model="editText" />
      <button @click="editTodo(todo.id)">Edit</button>
    </div>
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
    const editText = ref('');
    const modal = ref<number | null>(null);

    const addTodo = () => {
      todoStore.addTodo({text:newTodo.value,id:Math.floor(Math.random() * 10000)});
      newTodo.value = '';
    };

    const removeTodo = (index: number) => {
      todoStore.removeTodo(index);
    };
    const editTodo = (id:number) => {
      // modal.value=!modal.value
      // console.log(editText.value,id)
      modal.value=null
      todoStore.editTodo({text:editText.value,id});
    };
    const editTod = (id:number) => {
      // editTodo(id)
      modal.value=id
      // todoStore.editTodo({text:editText.value,id});
    };

    return {
      todos: computed(()=>todoStore.todos),
      newTodo,
      addTodo,
      removeTodo,
      editTodo,
      modal,
      editText,
      editTod
    };
  },
};
</script>