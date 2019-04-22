<template>
  <div class="todo-item">
    <Button :type="className" @onClick="markComplete">{{ todo.title }}</Button>
    <Button type="alert btn-remove" @onClick="remove">
      <font-awesome-icon icon="times" />
    </Button>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import { Button } from "../UI";
import { ITodoItem } from "./Todo";

@Component({
  components: { Button }
})
export default class Item extends Vue {
  @Prop() private todo!: ITodoItem;

  get className() {
    return "title" + (this.todo.completed ? " is-complete" : "");
  }

  @Emit("save") markComplete() {
    this.todo.completed = !this.todo.completed;
  }

  @Emit("remove") remove() {
    return this.todo.id;
  }
}
</script>

<style scoped lang="less">
@import "~styles/_variables";
@import "~styles/_mixin";

.todo-item {
  position: relative;
  margin: 0.5em 0;
}

.title {
  color: @colorTextBlack;
  width: 100%;
  text-align: left;
  padding: 15px 40px 10px 15px;
  background-color: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.1);

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.1);
  }
}

.btn-remove {
  position: absolute;
  height: 100%;
  right: 0;
}

.is-complete {
  text-decoration: line-through;
}

.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
</style>
