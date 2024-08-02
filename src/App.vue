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
const a = 1;
console.log(a);
const b = 2;
console.log(b);
const c = 3;
console.log(c);
const d = 4;
console.log(d);

console.log(1111);
console.log(2222);
let timer = null;
const debounce = (fn, delay) => {
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(() => {
        fn();
    }, delay);
};
const throttle = (fn, delay) => {
    if (timer) {
        return;
    }
    timer = setTimeout(() => {
        fn();
        timer = null;
    }, delay);
};
</script>

<template>
    <div>{{ count }}</div>
    <!-- <HelloWorld msg="Vite + Vue" /> -->
    <Parent @add-handle="addHandle" />
</template>

<style scoped></style>
