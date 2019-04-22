<template>
  <section class="todos">
    <h1>
      Tasks
      <transition name="fade">
        <small v-if="incomplete">({{ incomplete }})</small>
      </transition>
    </h1>

    <TodoAdd @addTodo="addTodo" />

    <div class="clear-todo">
      <Button type="warning" @onClick="clearCompleted">
        <font-awesome-icon icon="check" />&nbsp;&nbsp;Clear Completed
      </Button>
      <Button type="alert" @onClick="clearAll">
        <font-awesome-icon icon="trash" />&nbsp;&nbsp;Clear All
      </Button>
    </div>

    <div>
      <ul>
        <li :key="todo.id" v-for="todo in todos">
          <TodoItem
            :todo="todo"
            v-on:del-todo="$emit('del-todo', todo.id)"
            @save="saveTodoList"
            @remove="removeTodo"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Button } from "../UI";
import TodoAdd from "./Add.vue";
import TodoItem from "./Item.vue";
import { TodoService } from "./Service";
import { ITodoItem } from "./Todo";
import { constants } from "crypto";

@Component({
  components: { TodoItem, TodoAdd, Button }
})
export default class List extends Vue {
  todos: Array<ITodoItem> = [];

  created() {
    this.getTodos();
  }

  get incomplete() {
    return this.todos.filter(this.inProgress).length;
  }

  getTodos() {
    this.todos = TodoService.get();
  }

  addTodo(todo: ITodoItem) {
    if (todo) {
      this.todos.unshift(todo);
      this.saveTodoList();
    }
  }

  removeTodo(idTodo: string) {
    this.todos = this.todos.filter(todo => todo.id != idTodo);
    this.saveTodoList();
  }

  saveTodoList() {
    TodoService.save(this.todos);
  }

  clearCompleted() {
    this.todos = this.todos.filter(this.inProgress);
    this.saveTodoList();
  }

  clearAll() {
    this.todos = [];
    this.saveTodoList();
  }

  isCompleted(todo: ITodoItem) {
    return todo.completed;
  }

  inProgress(todo: ITodoItem) {
    return !this.isCompleted(todo);
  }
}
</script>

<style scoped lang="less">
.todos {
  width: 100%;
  max-width: 45rem;
  padding: 1em;
  margin: 1em auto;
  overflow: auto;
  background-color: #fff;
  box-shadow: 0px 0.25rem 1rem rgba(0, 0, 0, 0.25);
  text-align: left;

  h1 small {
    color: #cacaca;
    line-height: 0;
  }

  .clear-todo {
    text-align: right;
    & > button {
      margin-left: 10px;
    }
  }
}
</style>
