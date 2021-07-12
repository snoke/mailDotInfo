<template>
  <div class="main" style="min-height:100%;">
    <div class="w-100" style="padding-top:25px;"></div>
    <h1>Impressum</h1>
    <hr class="w-25 stylish-hr" style="margin:auto;" />
      <b-card  header="Was ist mail.info" text-variant="white" class="text-center">
        <b-card-text>mail.info ist ein freier Mailserver für den Privatgebrauch.</b-card-text>
      </b-card>
  </div>
</template>

<script>
export default {
  name: "Imprint",
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
  }
};
</script>