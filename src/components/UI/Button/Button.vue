<template>
  <button class="btn" :class="type" @click="onClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop() type!: string;

  @Emit("onClick") onClick() {}
}
</script>

<style scoped lang="less">
@import "~styles/_variables";
@import "~styles/_mixin";

.btn {
  display: inline-block;
  text-align: center;
  line-height: 1;
  cursor: pointer;

  .appearance(none);
  vertical-align: middle;
  border: 1px solid transparent;
  border-radius: 0;
  padding: 10px 15px;
  margin: 0;
  font-size: 14px;
  background-color: @colorBlue;
  color: @colorBtn;

  &:hover {
    background-color: @colorBlueHover;
  }

  &[disabled] {
    cursor: not-allowed;
  }

  &.alert,
  &.red {
    background-color: @colorRed;

    &:hover {
      background-color: @colorRedHover;
    }
  }

  &.warning,
  &.orange {
    background-color: @colorOrange;

    &:hover {
      background-color: @colorOrangeHover;
    }
  }
}
</style>
