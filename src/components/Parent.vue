<template>
  <div>
    <h2>parent</h2>
    <button @click="$bus.emit('add', 20)">bus+</button>
    <br />
    <button @click="$emit('addHandle', 1)">+</button>
    <hr />
    <Child @handle="handle" />
  </div>
</template>

<script setup>
import $bus from '../util';
import Child from './Child.vue';
const emit = defineEmits(['addHandle']);
const handle = (val) => {
  emit('addHandle', val);
};
</script>

<style lang="scss" scoped></style>
