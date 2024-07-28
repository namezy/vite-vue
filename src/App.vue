<script setup>
import { ref } from 'vue';
// import Child from './components/Child.vue';
import Parent from './components/Parent.vue';
import $bus from './util';
// import HelloWorld from './components/HelloWorld.vue'
const count = ref(1);
$bus.on('add', (val) => {
  count.value += val;
});
const addHandle = (val) => {
  count.value += val;
};
</script>

<template>
  <div>{{ count }}</div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <Parent @add-handle="addHandle" />
</template>

<style scoped></style>
