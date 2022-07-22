<template>
  <div id="app">
    <validation-observer v-slot="{ handleSubmit }">
      <form class="form" @submit.prevent="handleSubmit(onSubmit)">
        <validation-provider
          rules="required: true|alpha_spaces"
          v-slot="{ errors, classes }"
        >
          <div class="form__field">
            <input
              :class="classes"
              type="text"
              v-model="field.name"
              :placeholder="placeholder.name"
            />
            <span v-if="errors[0]">{{ errors[0] }}</span>
          </div>
        </validation-provider>

        <validation-provider
          :rules="{
            required: true,
            regex: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
          }"
          v-slot="{ errors, classes }"
        >
          <div class="form__field">
            <input
              :class="classes"
              type="text"
              v-model="field.phone"
              :placeholder="placeholder.phone"
            />
            <span class="error-message" v-if="errors[0]">{{ errors[0] }}</span>
          </div>
        </validation-provider>

        <validation-provider
          rules="required|email"
          name="Email"
          v-slot="{ errors, classes }"
        >
          <div class="form__field">
            <input
              :class="classes"
              type="email"
              v-model="field.email"
              :placeholder="placeholder.email"
            />
            <span v-if="errors[0]">{{ errors[0] }}</span>
          </div>
        </validation-provider>

        <validation-provider
          :rules="{ max: 50, alpha_spaces: true }"
          v-slot="{ errors, classes }"
        >
          <div class="form__field">
            <input
              :class="classes"
              type="text"
              v-model="field.comment"
              :placeholder="placeholder.comment"
            />
            <span v-if="errors[0]">{{ errors[0] }}</span>
          </div>
        </validation-provider>

        <validation-provider
          :rules="{ required: { allowFalse: false } }"
          v-slot="{ errors, classes }"
        >
          <div class="form__field">
            <input
              class="form__checkbox"
              :class="classes"
              type="checkbox"
              v-model="field.agreement"
            />
            <span v-if="errors[0]">{{ errors[0] }}</span>
            <a class="form__terms" href="#">Пользовательское соглашение</a>
          </div>
        </validation-provider>
        <button class="form__button" type="submit">Заполнить 🖉</button>
      </form>
    </validation-observer>
  </div>
</template>

<script>
import { configure } from "vee-validate";

configure({
  classes: {
    valid: "is-valid",
    invalid: "is-invalid",
  },
});

export default {
  name: "App",
  data() {
    return {
      field: {
        name: "",
        phone: "",
        email: "",
        comment: "",
        agreement: false,
      },

      placeholder: {
        name: "ФИО",
        phone: "Телефон",
        email: "Email",
        comment: "Примечание",
      },
    };
  },
  methods: {
    onSubmit() {
      alert("Форма отправлена!");
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
* {
  box-sizing: border-box;
}

.form {
  width: 400px;
  padding-top: 40px;
  margin: 30px auto;

  &__field {
    position: relative;
    display: flex;
    padding-bottom: 20px;

    input {
      display: block;
      width: 100%;
      padding: 10px 15px;
      opacity: 0.8;
      border: 2px solid #ccd;
      background: #eee;
    }
    span {
      position: absolute;
      bottom: 3px;
      left: 0;
      display: block;
      padding-left: 25px;
      font-size: 12px;
      color: rgb(255, 0, 0);
    }
  }

  &__terms {
    color: #000;
    margin-left: 10px;
  }

  &__button {
    width: 160px;
    height: 50px;
    font-weight: 600;
    color: #fff;
    border-style: none;
    border-radius: 30px;
    background: #ff5c7e;
    margin-bottom: 50px;
    cursor: pointer;
  }

  .form__checkbox {
    width: 20px;
    height: 20px;
    transform: scale(1.3);
  }
}

.is-valid {
  color: lime;
  border: 1px solid rgb(0, 207, 0);
  box-shadow: inset 0 0 0 2px rgb(0, 207, 0);
}

.is-invalid {
  color: rgb(255, 37, 81);
  border: 1px solid rgb(255, 37, 81);
  box-shadow: inset 0 0 0 2px rgb(255, 37, 81);
}
</style>
