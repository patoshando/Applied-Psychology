<template>
  <div class="blog-card-wrap">
    <div class="blog-cards container">
        <h2>{{ $t('redakce.redakce') }}</h2>
    <p>
      {{ $t('redakce.sefredaktor') }}:<br>
        <b>Prof. PhDr. Karel Paulík, CSc.</b> (OU Ostrava, {{ $t('redakce.ceska-republika') }})<br>
        <br>
        {{ $t('redakce.zastupce-sefredaktor') }}:<br>
        <b>PhDr. Diana Jiřištová, Ph.D.</b> (VŠAPs Terezín, {{ $t('redakce.ceska-republika') }})<br>
        <br>
        {{ $t('redakce.clenove-redakcni-rady') }}: <br>
        <b>Prof. Dr. María Binetti</b> (UBA Buenos Aires, Argentina) <br>
        <b>Prof. PhDr. Panajotis Cakirpaloglu, DrSc.</b> (UP Olomouc, {{ $t('redakce.ceska-republika') }}) <br>
        <b>PhDr. Ivana Tomanová Čergeťová, PhD.</b> (VŠAPs Terezín, {{ $t('redakce.ceska-republika') }}) <br>
        <b>Prof. PhDr. Marek Franěk, CSc., Ph.D.</b> (UHK Hradec Králové, {{ $t('redakce.ceska-republika') }}) <br>
        <b>Prof. Dr. José García Martín</b> (UG Granada, {{ $t('redakce.spanelsko') }}) <br>
        <b>Doc. PaedDr. PhDr. Peter Kondrla, PhD.</b> (UKF Nitra, {{ $t('redakce.slovenska-republika') }}) <br>
        <b>Prof. ThDr. PaedDr. Roman Králik, PhD.</b> (RUDN Moskva, {{ $t('redakce.ruska-federace') }}) <br>
        <b>Doc. ThDr. Patrik Maturkanič, PhD.</b> (VŠAPs Terezín, {{ $t('redakce.ceska-republika') }}) <br>
        <b>PhDr. Mgr. Štefan Medzihorský</b> (VŠAPs Terezín, {{ $t('redakce.ceska-republika') }}) <br>
        <b>PhDr. Zuzana Mičková, Ph.D.</b> (UCM, Trnava, {{ $t('redakce.slovenska-republika') }}) <br>
        <b>Doc. PhDr. Martina Pavlíková, PhD.</b> (UKF Nitra, {{ $t('redakce.slovenska-republika') }}) <br>
        <b>Doc. PhDr. Marek Preiss, Ph.D.</b> (UK Praha, {{ $t('redakce.ceska-republika') }}) <br>
        <b>Prof. PhDr. Evžen Řehulka, CSc.</b> (MU Brno, {{ $t('redakce.ceska-republika') }}) <br>
        <b>Doc. JUDr. Mgr. Joža Spurný, Ph.D.</b> (PA Praha, {{ $t('redakce.ceska-republika') }}) <br>
        <b>Doc. PaedDr. Miroslav Tvrdoň, PhD.</b> (UKF Nitra, {{ $t('redakce.slovenska-republika') }}) <br>
        <b>Doc. PhDr. Marta Valihorová, CSc.</b> (UMB Banská Bystrica, {{ $t('redakce.slovenska-republika') }}) <br>
        <b>Doc. PaedDr. Mojmír Vážanský, CSc.</b> (MU Brno, {{ $t('redakce.ceska-republika') }}) <br>
        <b>Prof. dr hab Jan Zimny, PhD.</b> (AWL Wroclaw, {{ $t('redakce.polska-republika') }}) <br>
        <br>
        {{ $t('redakce.vykonny-redaktor') }}:<br>
        <b>PhDr. Jan Lepeška, Ph.D.</b> (VŠAPs Terezín, {{ $t('redakce.ceska-republika') }})
        <br>
        <br>  <span>________________________________________________________</span>
    </p>
    </div>
  </div>
</template>

<script>

export default {
    name: 'ForAuthors',
}
</script>

<style lang="scss">
.blog-cards{
  margin-left: 250px;
}


@media screen and (max-width: 749px) {
  p {
    font-size: 10px;
  }
  span{
    font-size: 9px;
  }
}
</style>