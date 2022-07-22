<template>
  <div>
    <post-comment
      class="comment"
      v-for="comment in comments"
      :comment="comment"
      :key="comment.id"
      @del="deleteComment"
    >
    </post-comment>
  </div>
</template>

<script>
import axios from "axios";
import PostComment from "~/components/PostComment.vue";
export default {
  name: "App",
  components: { PostComment },
  data() {
    return {
      comments: [],
    };
  },
  methods: {
    async fetchComments() {
      await axios
        .get("https://jsonplaceholder.typicode.com/posts/1/comments")
        .then((res) => (this.comments = res.data));
    },
    deleteComment(element) {
      this.comments = this.comments.filter((item) => item.id !== element);
    },
  },
  mounted: function () {
    console.log("mounted");
    this.comments = this.fetchComments();
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
