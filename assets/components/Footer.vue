<template>
    <div  class="footer">
      <b-card text-variant="white" class="text-center footer-card" >
        <b-card-text>
        <div class="d-flex justify-content-center">
            <a href="#" @click="$bvModal.show('bv-modal-imprint')" style=";">Impressum</a>
            <a href="#" @click="$bvModal.show('bv-modal-privacy')" style="padding-left:25px;">Datenschutzhinweis</a>
            <b-modal id="bv-modal-faq" hide-footer>
                <template #modal-title>
                <div class="d-block text-center">
                <h3>FAQ</h3>
                </div>
                </template>
                <div class="d-block text-center">
                    FAQ
                </div>
                <b-button class="mt-3 w-100" block @click="$bvModal.hide('bv-modal-faq')">Schließen</b-button>
            </b-modal>
            <b-modal id="bv-modal-contact" hide-footer>
                <template #modal-title>
                <div class="d-block text-center">
                <h3>Kontakt</h3>
                </div>
                </template>
                <div class="d-block text-center">
                    Kontakt
                </div>
                <b-button class="mt-3 w-100" block @click="$bvModal.hide('bv-modal-contact')">Schließen</b-button>
            </b-modal>
            <b-modal id="bv-modal-privacy" hide-footer>
                <template #modal-title>
                <div class="d-block text-center">
                <h3>Datenschutzhinweis</h3>
                </div>
                </template>
                <div class="d-block text-center">
                    Datenschutzhinweis
                </div>
                <b-button class="mt-3 w-100" block @click="$bvModal.hide('bv-modal-privacy')">Schließen</b-button>
            </b-modal>
            <b-modal id="bv-modal-imprint" hide-footer>
                <template #modal-title>
                <div class="d-block text-center">
                <h3>Impressum</h3>
                </div>
                </template>
                <div class="d-block text-center">
                    Impressum
                </div>
                <b-button class="mt-3 w-100" block @click="$bvModal.hide('bv-modal-imprint')">Schließen</b-button>
            </b-modal>
        </div>
            <hr class="w-25 stylish-hr" style="margin:auto;margin-top: 10px;" />
        <div class="d-flex justify-content-center">
        <div class=" text-light d-flex justify-content-center" style="padding-top: 5px;">
            
      <font-awesome-icon icon="copyright" class="text-primary" style="opacity: 0.5;padding-top:5px;font-size: 1.5em;"/> <span style="font-size:0.75em;padding-left:5px;padding-top: 5px;">2021</span>
        </div>
        </div></b-card-text>
      </b-card>
    </div>
</template>

<script>
export default {
  name: "Footer",
  components: {
  },
  data () { 
    return {
    }
  },
};
</script>