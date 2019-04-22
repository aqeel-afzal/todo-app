<template>
  <div class="add-todo">
    <input
      type="text"
      v-model="title"
      name="title"
      placeholder="Add..."
      class="input"
      required
    />
    <Button @onClick="add">Add</Button>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from "vue-property-decorator";
import { Button } from "../UI";
import { v4 as uuid } from "uuid";
import { ITodoItem } from "./Todo";

@Component({
  components: { Button }
})
export default class Add extends Vue {
  title: string = "";

  @Emit("addTodo") add(e: Event): ITodoItem | null {
    e.preventDefault();

    if (this.title.length === 0) {
      return null;
    }

    const newTodo: ITodoItem = {
      id: uuid(),
      title: this.title,
      completed: false
    };

    this.title = "";
    return newTodo;
  }
}
</script>

<style scoped lang="less">
.add-todo {
  display: flex;
  margin-bottom: 30px;
}

form {
  display: flex;
}

.input {
  flex: 11;
  padding: 0.5rem;
  border: 1px solid #cacaca;
  font-size: 1rem;
  color: #0a0a0a;
  background-color: #fefefe;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.btn {
  flex: 1;
}
</style>
