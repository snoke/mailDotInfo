<template>
  <div class="main" style="min-height:100%;">
    <div class="w-100" style="padding-top:25px;"></div>
    <h1>
      <span class="text-primary" style="padding:0px;font-size:1.5em">M</span>
      <span class="text-light" style="margin-left:-0.5em;">ail</span>
      <span class="text-primary" style="padding:0px;margin-left:-0.5em;">.</span>
      <span class="text-light" style="margin-left:-0.5em;">info</span>
      <span class="text-primary" style="padding:0px;"></span>
    </h1>
    <hr class="w-25 stylish-hr main-hr" style="margin:auto;margin-top: -20px;" />
    <div  class="d-flex justify-content-center  flex-wrap"  style="padding-top:10px;">
      <a href="#" @click="$parent.$parent.$parent.goto(1)">
      <b-card text-variant="white" class="text-center teaser-card" >
        <b-card-title><h2 class="teaser-title">
            <font-awesome-icon icon="shield-alt" style="opacity: 0.5;"/>
      <span class="text-primary" >S</span>
      <span class="text-light" style="margin-left:-0.5em;">chutz</span></h2></b-card-title>
        <b-card-text>Kontoschutz mit 2-Faktor-Authentisierung!</b-card-text>
      </b-card>
      <b-card text-variant="white" class="text-center teaser-card" >
        <b-card-title><h2 class="teaser-title">
      <font-awesome-icon icon="user-secret" style="opacity: 0.5;"/>
      <span class="text-primary" >P</span>
      <span class="text-light" style="margin-left:-0.5em;">rivat</span></h2></b-card-title>
        <b-card-text>Registrierung ohne persönliche Daten!</b-card-text>
      </b-card>
      <b-card text-variant="white" class="text-center teaser-card" >
        <b-card-title>
          <h2 class="teaser-title">
            <font-awesome-icon icon="dollar-sign" style="opacity: 0.5;"/>
      <span class="text-primary" >G</span>
      <span class="text-light" style="margin-left:-0.5em;">ratis</span>
          </h2>
        </b-card-title>
        <b-card-text  class="text-light" >keine Werbung und komplett kostenfrei!</b-card-text>
      </b-card>
      <b-card text-variant="white" class="text-center teaser-card" >
        <b-card-title><h2 class="teaser-title" >
            <font-awesome-icon icon="mail-bulk" style="opacity: 0.5;"/>
      <span class="text-primary" >F</span>
      <span class="text-light" style="margin-left:-0.5em;">lexibel</span>
      </h2></b-card-title>
        <b-card-text >per Webmailer oder beliebigen Mail-Client!</b-card-text>
      </b-card>
      <b-card text-variant="white" class="text-center teaser-card" >
        <b-card-title><h2 class="teaser-title">
      <font-awesome-icon icon="lock" style="opacity: 0.5;"/>
      <span class="text-primary" >S</span>
      <span class="text-light" style="margin-left:-0.5em;">icher</span></h2></b-card-title>
        <b-card-text>Verschlüsselung mit PGP!</b-card-text>
      </b-card>
  </a></div>
  </div>
</template>
<style scoped>
.teaser-container {
    margin:auto;
}
.teaser-title {
    color:#0b5ed7;
}
</style>
<script>
export default {
  name: "Index",
  components: {
  },
  data () { 
    return {
    }
  },
  created () {
  },
    mounted() {
  },
    watch: {
    },
    methods: {
  }
};
</script>