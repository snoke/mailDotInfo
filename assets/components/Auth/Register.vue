<template>
  <div class="main" style="min-height:100%;">
    <div class="w-100" style="padding-top:25px;"></div>
    <h1><span  class="text-primary">R</span>egistrieren</h1>
    <hr class="w-25 stylish-hr" style="margin:auto;" />
      <b-card text-variant="white" class="text-center main-card" >
        <b-card-text><form>
      <div class="form-group">
        <input 
        v-model="email"
        type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" disabled>
      </div>
      <div class="form-group">
        <label for="exampleInputName1" class="inputHelper" v-if="username!=''" style="float: left;">Nutzername</label>
        <input 
        v-model="username"
        type="name" class="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Nutzername" @keyup="isEmailValid">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1" class="inputHelper" v-if="password!=''" style="float: left;">Passwort</label>
        <input 
        v-model="password"
        type="password" class="form-control" id="exampleInputPassword1" placeholder="Passwort">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword2" class="inputHelper" v-if="password2!=''" style="float: left;">Passwort wiederholen</label>
        <input 
        v-model="password2"
        type="password" class="form-control" id="exampleInputPassword2" placeholder="Passwort wiederholen">
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary w-100">Registrieren</button>
      </div>
    </form>
      <div class="login-teaser d-flex justify-content-center ">      
<font-awesome-icon icon="clipboard-list" class="text-primary" style="font-size: 1.75em;
color: white;margin-right: 16px;margin-top: 8px;opacity: 0.5;
float: left;"/>
        <a href="#" @click="$parent.$parent.$parent.goto(2);">
            <span class="text-light">
            Du hat bereits einen Account? <br />
            Jetzt anmelden!
            </span>
        </a>
<font-awesome-icon icon="pen" class="text-primary" style="font-size: 1.75em;
color: white;margin-left: 16px;margin-top: 8px;opacity: 0.5;
float: left;"/>
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
      isEmailValid: function() {
      this.username = this.username.replace(/[^0-9a-zA-Z-_.]/g, "")  
  	}
  }
};
</script>