<template>
  <div class="comment">
    <div style="margin-right: 10px">
      {{ comment.id }}
    </div>
    <div>{{ comment.name }}</div>
    <button @click="$emit('del', comment.id)">Delete</button>
  </div>
</template>

<script>
export default {
  name: "PostComment",
  props: {
    comment: Object,
  },
};
</script>

<style scoped>
.comment {
  display: flex;
}
</style>
