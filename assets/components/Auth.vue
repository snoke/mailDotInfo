<template>
  <div style="height:100%;">
    <b-carousel
      id="carousel-1"
      :interval=0
      v-model="slide"
      controls
      indicators
       ref="myCarousel"
      style="text-shadow: 1px 1px 2px #333;"
      label-prev="< Anmelden"
      label-next="Registrieren >"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

      <b-carousel-slide>
          <Index />
      </b-carousel-slide>

      <b-carousel-slide>
          <Register />
      </b-carousel-slide>

      <b-carousel-slide>
          <Login />
      </b-carousel-slide>

    </b-carousel>
  </div>
</template>

<script>
import Register from './Auth/Register.vue';
import Login from './Auth/Login.vue';
import Index from './Auth/Index.vue';
export default {
  name: "Auth",
  components: {
      Index,Register,Login
  },
data() {
      return {
        slides:[
            'Startseite',
            'Registrieren',
            'Anmelden',
        ],
        slide: 0,
        sliding: null,
        fixed:false
      }
    },
    methods: {
      goto(index) {
        this.$refs.myCarousel.setSlide(index)
      },
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
        var nextSlide=slide+1
        var prevSlide=slide-1

        if (slide==0) {
            prevSlide=this.slides.length-1
        }
        if (nextSlide==this.slides.length) {
            nextSlide=0
        }
        $(".carousel-control-prev>.sr-only").html("< " + this.slides[prevSlide])
        $(".carousel-control-next>.sr-only").html(this.slides[nextSlide] + " >")
      }
    },
  created () {
    this.onSlideEnd(0);
  },

};
</script>