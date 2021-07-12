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
      imageIndex: 0,
      images: [
        'AdobeStock_91717852.jpeg',
        'AdobeStock_247520870.jpeg',
        'AdobeStock_90488874.jpeg',
        /*
        'AdobeStock_154437497.jpeg',
        'AdobeStock_94538497.jpeg',
        'AdobeStock_103545648.jpeg',
        'AdobeStock_277812854.jpeg',
        */
      ]
    }
  },
  mounted () {
    this.switchBackground();
  },
  created () {
    this.preloadImages();
  },

    methods: {    
      preloadImages() {
        this.images.forEach(url => new Image().src = url);
      },
      switchBackground() {
        $('body').css('background-image', 'url('+ this.images[this.imageIndex]+')');
        // now 'this' is referencing the Vue object and not the 'setTimeout' scope
        setTimeout(() => this.switchBackground(), 5000);
        this.imageIndex++;
        if (this.imageIndex==this.images.length) {
          this.imageIndex = 0;
        }
    }
  }
};
</script>