<template>
  <div>
    <p>{{ headers.aboutPage }} {{ name }}</p>
    <NLink to="/task5"> {{ pages.homePage }} </NLink>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  asyncData() {
    return {
      name: process.static ? "static" : process.server ? "server" : "client",
    };
  },
  head: {
    title: "About page",
  },
  computed: {
    ...mapGetters({ pages: "task5/getPages", headers: "task5/getHeaders" }),
  },
};
</script>
