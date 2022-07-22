<template>
  <div class="contacts">
    <div class="contacts-elements">
      <a @click.prevent="changeConnectionValue(89888888888)"
        ><i class="fa fa-phone"></i
      ></a>
      <a @click.prevent="changeConnectionValue('mathers_beats@mail.ru')"
        ><i class="fa fa-envelope"></i
      ></a>
      <a href="https://vk.com/mathers_ru" target="_blank"
        ><i class="fa fa-vk"></i
      ></a>

      <input
        @focus="$event.target.select()"
        v-show="connection"
        class="info"
        :value="connection"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      connection: "",
    };
  },
  methods: {
    changeConnectionValue(value) {
      this.connection = value;
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css");
.contacts {
  width: 100vw;
  height: 100vh;
  background-color: #d34c65;
}
.contacts-elements {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.info {
  padding: 10px;
  position: absolute;
  top: calc(50% + 50px);
  left: calc(50% - 110px);
  background: rgba(128, 128, 128, 0.199);
  border: 1px solid rgba($color: #000000, $alpha: 0.2);
  border-radius: 5px;
  outline: none;
}

a {
  cursor: pointer;
  color: grey;
  padding: 15px;
  background: rgb(212, 212, 212);
  border-radius: 15px;
  margin-left: 15px;
}
a:hover {
  color: black;
}
</style>
