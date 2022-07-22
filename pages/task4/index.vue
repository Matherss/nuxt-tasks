<template>
  <section>
    <h1>Elegant Contact Form.</h1>
    <div class="info">
      <a href="https://www.grandvincent-marion.fr" target="_blank"
        ><p>Made with <i class="fa fa-heart"></i> by Marion Grandvincent</p></a
      >
    </div>
    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <h1>
          Should you have any questions, please do not hesitate to contact me :
        </h1>

        <div class="contentform">
          <div id="sendmessage">
            Your message has been sent successfully. Thank you.
          </div>

          <div class="leftcontact">
            <ValidationProvider
              rules="required|alpha_spaces|max:20"
              v-slot="{ errors }"
            >
              <div class="form-group">
                <p>Surname<span>*</span></p>
                <span class="icon-case"><i class="fa fa-male"></i></span>
                <input
                  v-model="form.surname"
                  type="text"
                  name="nom"
                  id="nom"
                  data-rule="required"
                  data-msg="Vérifiez votre saisie sur les champs : Le champ 'Nom' doit être renseigné."
                />
                <div class="validation">{{ errors[0] }}</div>
              </div>
            </ValidationProvider>
            <ValidationProvider
              rules="required|alpha_spaces|max:15"
              v-slot="{ errors }"
            >
              <div class="form-group">
                <p>Name <span>*</span></p>
                <span class="icon-case"><i class="fa fa-user"></i></span>
                <input
                  v-model="form.name"
                  type="text"
                  name="prenom"
                  id="prenom"
                  data-rule="required"
                  data-msg="Vérifiez votre saisie sur les champs : Le champ 'Prénom' doit être renseigné."
                />
                <div class="validation">{{ errors[0] }}</div>
              </div>
            </ValidationProvider>
            <ValidationProvider rules="required|email" v-slot="{ errors }">
              <div class="form-group">
                <p>E-mail <span>*</span></p>
                <span class="icon-case"><i class="fa fa-envelope-o"></i></span>
                <input
                  v-model="form.mail"
                  type="email"
                  name="email"
                  id="email"
                  data-rule="email"
                  data-msg="Vérifiez votre saisie sur les champs : Le champ 'E-mail' est obligatoire."
                />
                <div class="validation">{{ errors[0] }}</div>
              </div>
            </ValidationProvider>
            <ValidationProvider rules="required|max:25" v-slot="{ errors }">
              <div class="form-group">
                <p>Company <span>*</span></p>
                <span class="icon-case"><i class="fa fa-home"></i></span>
                <input
                  v-model="form.company"
                  type="text"
                  name="society"
                  id="society"
                  data-rule="required"
                  data-msg="Vérifiez votre saisie sur les champs : Le champ 'Société' doit être renseigné."
                />
                <div class="validation">{{ errors[0] }}</div>
              </div>
            </ValidationProvider>
            <ValidationProvider rules="required|min:10" v-slot="{ errors }">
              <div class="form-group">
                <p>Company Address <span>*</span></p>
                <span class="icon-case"
                  ><i class="fa fa-location-arrow"></i
                ></span>
                <input
                  v-model="form.companyAddress"
                  type="text"
                  name="adresse"
                  id="adresse"
                  data-rule="required"
                  data-msg="Vérifiez votre saisie sur les champs : Le champ 'Adresse' doit être renseigné."
                />
                <div class="validation">{{ errors[0] }}</div>
              </div> </ValidationProvider
            ><ValidationProvider rules="required|numeric" v-slot="{ errors }">
              <div class="form-group">
                <p>Postcode <span>*</span></p>
                <span class="icon-case"><i class="fa fa-map-marker"></i></span>
                <input
                  v-model="form.postcode"
                  type="text"
                  name="postal"
                  id="postal"
                  data-rule="required"
                  data-msg="Vérifiez votre saisie sur les champs : Le champ 'Code postal' doit être renseigné."
                />
                <div class="validation">{{ errors[0] }}</div>
              </div></ValidationProvider
            >
          </div>

          <div class="rightcontact">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <div class="form-group">
                <p>City <span>*</span></p>
                <span class="icon-case"><i class="fa fa-building-o"></i></span>
                <input
                  v-model="form.city"
                  type="text"
                  name="ville"
                  id="ville"
                  data-rule="required"
                  data-msg="Vérifiez votre saisie sur les champs : Le champ 'Ville' doit être renseigné."
                />
                <div class="validation">{{ errors[0] }}</div>
              </div></ValidationProvider
            >
            <ValidationProvider
              :rules="{
                required: true,
                regex: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
              }"
              v-slot="{ errors }"
            >
              <div class="form-group">
                <p>Phone number <span>*</span></p>
                <span class="icon-case"><i class="fa fa-phone"></i></span>
                <input
                  v-model="form.phone"
                  type="text"
                  name="phone"
                  id="phone"
                  data-rule="maxlen:10"
                  data-msg="Vérifiez votre saisie sur les champs : Le champ 'Téléphone' doit être renseigné. Minimum 10 chiffres"
                />
                <div class="validation">{{ errors[0] }}</div>
              </div></ValidationProvider
            >
            <ValidationProvider
              rules="required|alpha_spaces"
              v-slot="{ errors }"
            >
              <div class="form-group">
                <p>Function <span>*</span></p>
                <span class="icon-case"><i class="fa fa-info"></i></span>
                <input
                  v-model="form.function"
                  type="text"
                  name="fonction"
                  id="fonction"
                  data-rule="required"
                  data-msg="Vérifiez votre saisie sur les champs : Le champ 'Fonction' doit être renseigné."
                />
                <div class="validation">{{ errors[0] }}</div>
              </div></ValidationProvider
            >
            <ValidationProvider
              rules="required|alpha_spaces"
              v-slot="{ errors }"
            >
              <div class="form-group">
                <p>Subject <span>*</span></p>
                <span class="icon-case"><i class="fa fa-comment-o"></i></span>
                <input
                  v-model="form.subject"
                  type="text"
                  name="sujet"
                  id="sujet"
                  data-rule="required"
                  data-msg="Vérifiez votre saisie sur les champs : Le champ 'Sujet' doit être renseigné."
                />
                <div class="validation">{{ errors[0] }}</div>
              </div></ValidationProvider
            >
            <ValidationProvider
              rules="required|message:30|max:30"
              v-slot="{ errors }"
            >
              <div class="form-group">
                <p>Message <span>*</span></p>
                <span class="icon-case"><i class="fa fa-comments-o"></i></span>
                <textarea
                  v-model="form.message"
                  name="message"
                  rows="14"
                  data-rule="required"
                  data-msg="Vérifiez votre saisie sur les champs : Le champ 'Message' doit être renseigné."
                ></textarea>
                <div class="validation">{{ errors[0] }}</div>
              </div></ValidationProvider
            >
          </div>
        </div>
        <button type="submit" class="button-contact">Send</button>
      </form></ValidationObserver
    >
  </section>
</template>

<script>
import { extend } from "vee-validate";

extend("message", {
  params: ["length"],
  validate(value, { length }) {
    const messageRegex = /[^-\/'"№., 0-9а-яА-Я]/gi;
    const errors = value.match(messageRegex);
    if (!errors) return true;
    return `Вы ввели ${value.length} из ${length} символов.Есть запрещенный символ: ${errors}`;
  },
});
export default {
  data: function () {
    return {
      form: {
        surname: "",
        name: "",
        mail: "",
        company: "",
        companyAddress: "",
        postcode: "",
        city: "",
        phone: "",
        function: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    onSubmit() {
      alert("Заявка отправлена");
    },
  },
};
</script>

<style scoped>
@import url("https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css");
body {
  margin: auto;
  background: #eaeaea;
  font-family: "Open Sans", sans-serif;
}

.info p {
  text-align: center;
  color: #999;
  text-transform: none;
  font-weight: 600;
  font-size: 15px;
  margin-top: 2px;
}

.info i {
  color: #f6aa93;
}
form h1 {
  font-size: 18px;
  background: #f6aa93 none repeat scroll 0% 0%;
  color: rgb(255, 255, 255);
  padding: 22px 25px;
  border-radius: 5px 5px 0px 0px;
  margin: auto;
  text-shadow: none;
  text-align: left;
}

form {
  border-radius: 5px;
  max-width: 700px;
  width: 100%;
  margin: 5% auto;
  background-color: #ffffff;
  overflow: hidden;
}

p span {
  color: #f00;
}

p {
  margin: 0px;
  font-weight: 500;
  line-height: 2;
  color: #333;
}

h1 {
  text-align: center;
  color: #666;
  text-shadow: 1px 1px 0px #fff;
  margin: 50px 0px 0px 0px;
}

input {
  border-radius: 0px 5px 5px 0px;
  border: 1px solid #eee;
  margin-bottom: 15px;
  width: 75%;
  height: 40px;
  float: left;
  padding: 0px 15px;
}

a {
  text-decoration: inherit;
}

textarea {
  border-radius: 0px 5px 5px 0px;
  border: 1px solid #eee;
  margin: 0;
  width: 75%;
  height: 130px;
  float: left;
  padding: 0px 15px;
}

.form-group {
  overflow: hidden;
  clear: both;
}

.icon-case {
  width: 35px;
  float: left;
  border-radius: 5px 0px 0px 5px;
  background: #eeeeee;
  height: 42px;
  position: relative;
  text-align: center;
  line-height: 40px;
}

i {
  color: #555;
}

.contentform {
  padding: 40px 30px;
}

.button-contact {
  background-color: #81bda4;
  color: #fff;
  text-align: center;
  width: 100%;
  border: 0;
  padding: 17px 25px;
  border-radius: 0px 0px 5px 5px;
  cursor: pointer;
  margin-top: 40px;
  font-size: 18px;
}

.leftcontact {
  width: 49.5%;
  float: left;
  border-right: 1px dotted #ccc;
  box-sizing: border-box;
  padding: 0px 15px 0px 0px;
}

.rightcontact {
  width: 49.5%;
  float: right;
  box-sizing: border-box;
  padding: 0px 0px 0px 15px;
}

.validation {
  margin: 0 0 10px;
  font-weight: 400;
  font-size: 13px;
  color: #de5959;
}

#sendmessage {
  border: 1px solid #fff;
  display: none;
  text-align: center;
  margin: 10px 0;
  font-weight: 600;
  margin-bottom: 30px;
  background-color: #ebf6e0;
  color: #5f9025;
  border: 1px solid #b3dc82;
  padding: 13px 40px 13px 18px;
  border-radius: 3px;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.03);
}

#sendmessage.show,
.show {
  display: block;
}
</style>
