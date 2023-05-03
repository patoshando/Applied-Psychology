<template>
  <div class="blog-card-wrap">
    <div class="blog-cards container">
        <h2>{{ $t('nav.Kontakt') }}</h2>
    <p>
        <b>{{ $t('nav.Vydavatel') }}:</b><br>
        {{ $t('vydavatel.vysoka-skola') }} 
        <br>
        158 00 Praha 5 <br>
        <br>
        <a href="www.vsaps.cz">www.vsaps.cz</a> <br>
        <br>
        <b>{{ $t('redakce.redakce') }}</b><br>
        Aplikovaná psychologie/Applied Psychology<br>
        Akademická 409 <br>
        411 55 Terezín <br>
        <br>
        e-mail: maturkanic@ vsaps.cz<br>
        <br>
        <b>{{ $t('redakce.vykonny-redaktor') }}:</b><br>
        PhDr. Jan Lepeška, Ph.D. <br>
        <br>
        {{ $t('vydavatel.vice-informaci') }}: <a href="www.vsaps.cz">www.vsaps.cz</a>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
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