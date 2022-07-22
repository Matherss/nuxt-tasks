<template>
  <div>
    <h1>{{ headers.homePage }}</h1>
    <NLink to="task5/about">{{ pages.aboutPage }}</NLink>
    <input v-model="input" type="text" />
    <button @click="changeAbout(input)">click</button>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      input: "",
    };
  },
  head: {
    title: "Home page",
  },
  mounted() {
    console.log(this.getHomePage);
  },
  computed: {
    ...mapGetters({
      pages: "task5/getPages",
      headers: "task5/getHeaders",
    }),
  },
  methods: {
    ...mapActions({
      changeAbout: "task5/changeAboutDescription",
    }),
  },
  // methods: { ...mapMutations({ changeAbout: "pages/changeAboutDescription" }) },
};
</script>
