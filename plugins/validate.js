import * as rules from "vee-validate/dist/rules";
import { extend, ValidationObserver, ValidationProvider } from "vee-validate";
import Vue from "vue";

const errorMessages = {
  required: "Обязательное поле",
  email: "Введите почту в формате mail@domain.com",
  alpha_spaces: "Нельзя использовать цифры",
  max: "Слишком длинный текст",
  regex: "Должен начинаться с +7 или 8 и содержать не менее 8 цифр",
  numeric: "Поле должно содержать только цифры",
  min: "Слишком короткий текст",
};
Object.keys(rules).forEach((rule) => {
  extend(rule, {
    ...rules[rule],
    message: errorMessages[rule],
  });
});

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
