<template>
  <div class="main" style="min-height:100%;">
    <div class="w-100" style="padding-top:25px;"></div>
    <h1><span  class="text-primary" style="font-size:2em;margin-right:-0.1em;">R</span>egistrieren</h1>
    <hr class="w-25 stylish-hr main-hr" style="margin:auto;margin-top: -20px;" />
      <b-card text-variant="white" class="text-center main-card" >
        <b-card-text><form>
      <div class="form-group">
        <input 
        v-model="email"
        type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" disabled>
      </div>
      <div class="form-group" id="formUsername">
        <label for="exampleInputName1" class="inputHelper" v-if="username!=''" style="float: left;">Nutzername</label>
        <input 
        @focus="scrollTo('formUsername')"
        v-model="username"
        type="name" class="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Nutzername" @keyup="isEmailValid" @change="isEmailValid">
      </div>
      <div class="form-group" id="formPassword">
        <label
        @focus="scrollTo('formPassword')"
         for="exampleInputPassword1" 
        class="inputHelper" v-if="password!=''" style="float: left;">Passwort</label>
        <input 
        v-model="password"
        type="password" class="form-control" id="exampleInputPassword1" placeholder="Passwort">
      </div>
      <div class="form-group" id="formPassword2">
        <label 
        @focus="scrollTo('formPassword2')"
        for="exampleInputPassword2" class="inputHelper" v-if="password2!=''" style="float: left;">Passwort wiederholen</label>
        <input 
        v-model="password2"
        type="password" class="form-control" id="exampleInputPassword2" placeholder="Passwort wiederholen">
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary w-100">Registrieren</button>
      </div>
    </form>
      <div class="login-teaser d-flex justify-content-center ">      

        <a href="#" @click="$parent.$parent.$parent.goto(2);">
            <span class="blue" style="margin-right: -0.5em;font-size:2em;">
            D
            </span>
            <span class="white">
            u hast bereits einen Account? <br /><span class="blue"  style="margin-right: -0.6em;font-size:2em;">
            J
            </span>etzt anmelden!
            </span>
        </a>
      </div></b-card-text>
      </b-card>
    
  </div>
</template>

<script>
export default {
  name: "Register",
  components: {
  },
  data () { 
    return {
      password:"",
      password2:"",
      username:"",
    }
  },
  computed: {
    // a computed getter
    email: function () {
      // `this` points to the vm instance
      return this.username + "@mail.info"
    }
  },
  created () {
  },
    mounted() {
  },
    methods: {
      scrollTo(id) {
        document.getElementById(id).scrollIntoView();
      },
      isEmailValid: function() {
      this.username = this.username.replace(/[^0-9a-zA-Z-_.]/g, "")  
  	}
  }
};
</script>