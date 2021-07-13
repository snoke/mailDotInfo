<template>
  <div class="main" style="min-height:100%;">
    <div class="w-100" style="padding-top:25px;"></div>
    <h1><span  class="text-primary">A</span>nmelden</h1>
    <hr class="w-25 stylish-hr" style="margin:auto;" />
      <b-card text-variant="white" class="text-center main-card"  >
        <b-card-text><form>
      <div class="form-group" id="formUsername">
        <label for="exampleInputName1" class="inputHelper" v-if="username!=''" style="float: left;">Nutzername</label>
        <input 
        @focus="scrollTo('formUsername')"
        v-model="username"
        type="name" class="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Nutzername">
      </div>
      <div class="form-group"  id="formEmail">
        <label for="exampleInputPassword1" class="inputHelper" v-if="password!=''" style="float: left;">Passwort</label>
        <input 
        @focus="scrollTo('formEmail')"
        v-model="password"
        type="password" class="form-control" id="exampleInputPassword1" placeholder="Passwort">
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary w-100">Anmelden</button>
      </div>
    </form>
      <div class="signup-teaser d-flex justify-content-center ">
      <font-awesome-icon icon="clipboard-list" class="text-primary" style="font-size: 1.75em;
color: white;margin-right: 16px;margin-top: 8px;opacity: 0.5;
float: left;"/>
        <a href="#" @click="$parent.$parent.$parent.goto(1);">
            <span class="text-light">
            Noch keinen Account?<br />
            Jetzt gratis E-Mailadresse sichern!
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
  name: "Login",
  components: {
  },
  data () { 
    return {
      password:"",
      username:"",
      divider:false,
    }
  },
  created () {
  },
    mounted() {
  },
    watch: {
    },
    methods: {
      scrollTo(id) {
        document.getElementById(id).scrollIntoView();
      }
  }
};
</script>