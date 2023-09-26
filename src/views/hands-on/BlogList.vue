<template>
  <a-list
    :grid="{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4 }"
    :data-source="blogs"
  >
    <template #renderItem="{ item }">
      <a-list-item>
        <a @click.prevent="gotoBlog(item.id)">
          <a-card :title="item.title"> {{ item.body }}</a-card>
        </a>
      </a-list-item>
    </template>
  </a-list>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const blogs = ref([]);
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => (blogs.value = data));

const gotoBlog = (id) => {
  router.push("/hands-on/blogs/" + id);
};
</script>
