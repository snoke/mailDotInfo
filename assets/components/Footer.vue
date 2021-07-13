<template>
    <div  class="footer">
      <b-card text-variant="white" class="text-center footer-card" >
        <b-card-text>
        <div class="d-flex justify-content-center">
            <a href="#" @click="$bvModal.show('bv-modal-imprint')" style=";" class="footer-link"><span class="blue" style="font-size:1.5em;margin-right: -0.1em;">I</span>mpressum</a>
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
                    <div class="impressum" style="text-align: justify;"><p><strong>Haftung für Inhalte</strong><br>
                        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.<br><br><strong>Haftung für Links</strong><br>
                        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.<br><br><strong>Urheberrecht</strong><br>
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.<br><br><strong>Datenschutz</strong><br>
                        Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. <br>
                        Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. <br>
                        Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.<br /><br><strong>Kontakt</strong> <br>Stefan Sander<br> 
                        Poststraße 5<br> 
                        50389 Wesseling <br> <br>
                        E-Mail: <a href="mailto:stefan@mail.info">stefan@mail.info</a></p>
                    </div>
                </div>
                <b-button class="mt-3 w-100" block @click="$bvModal.hide('bv-modal-imprint')">Schließen</b-button>
            </b-modal>
        </div>
            <hr class="w-25 stylish-hr" style="margin:0px auto;position:static;padding-top: 0px;" />
        <div style="font-size: 1em;font-family: 'Marck Script';-webkit-filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .35));
filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .35));">    
      <font-awesome-icon icon="copyright" style="font-size:0.8em;" class="blue"/> 2021 <a href="https://www.stefan-sander.online" target="_blank"><span class="white " style="font-family: 'Marck Script';font-size:1.5em;"><span class="blue">S</span>ander</span></a></div>
      </b-card-text>
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