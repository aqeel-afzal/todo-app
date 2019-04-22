<template>
  <div id="app" class="container">
    <TodoList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TodoList from "./components/Todo/List.vue";

@Component({
  components: {
    TodoList
  }
})
export default class App extends Vue {
  created() {
    document.title = "Todo app";
  }
}
</script>

<style lang="less">
@import "./assets/less/app";
</style>
