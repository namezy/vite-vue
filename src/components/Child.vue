<template>
  <div>
    <h2>child</h2>
    <button @click="$bus.emit('add', 2)">bus+</button>
    <hr />
    <button @click="$emit('handle', 1)">+1</button>
  </div>
</template>

<script setup>
defineEmits(['handle']);
import $bus from '../util';
import { ref } from 'vue';

const imageUrl = ref('');

const validateImageUrl = () => {
  const regex = /\.(jpeg|jpg|gif|png)$/i;
  if (regex.test(imageUrl.value)) {
    console.log('Valid image URL');
  } else {
    console.log('Invalid image URL');
  }
};
console.log(validateImageUrl);
</script>

<style lang="scss" scoped></style>
