<script setup>
import { ref } from "vue";

const count = ref(0);

const increment = () => {
  count.value++;
};
</script>

<template>
  <div>
    <h1>Counter: {{ count }}</h1>
    <button @click="increment">+1</button>
  </div>
</template>

<style scoped>
h1 {
  font-size: 5rem;
}
p {
  font-size: 2rem;
}
button {
  font-size: 2rem;
  padding: 1rem 2rem;
  border: 1px solid blue;
  border-radius: 0.5rem;
}
</style>
