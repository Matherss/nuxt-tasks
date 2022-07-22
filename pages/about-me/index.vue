<template>
  <div class="main-block">
    <img src="~/assets/photo3.png" alt="myphoto" />
    <div class="links">
      <nuxt-link class="link" to="about-me/about">Обо мне</nuxt-link>
      <nuxt-link class="link" to="about-me/contacts">Контакты</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutMe",
};
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main-block {
  width: 100%;
  text-align: center;
}
img {
  width: 260px;
  border-radius: 0px 50px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.7);
}
.links {
  display: flex;
  justify-content: center;
}
.link {
  display: block;
  background: grey;
  padding: 15px;
  border-radius: 5px;
  margin: 5px;
  color: white;
  text-decoration: none;
  &:hover {
    transform: translateY(-2px);
    background: rgb(160, 160, 160);
  }
}
</style>
