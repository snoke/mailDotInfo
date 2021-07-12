<template>
  <div  class="main-wrapper" >
    <div class="content">
      <Auth />
    </div>
    <Footer />
  </div>
</template>
<style scoped>

</style>
<script>
import Auth from './Auth.vue';
import Footer from './Footer.vue';
export default {
  name: "App",
  components: {
    Auth,Footer
  },
  data () { 
    return {
    }
  },
  created () {
  },

    methods: {
  }
};
</script>