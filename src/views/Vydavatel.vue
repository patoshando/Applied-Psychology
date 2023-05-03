<template>
  <div class="blog-card-wrap">
    <div class="blog-cards container">
        <h2>{{ $t('nav.Vydavatel') }}</h2>
    <p>
        {{ $t('vydavatel.vysoka-skola') }} <br>
        158 00 Praha 5 <br>
        <br>
        <b>{{ $t('vydavatel.sidlo') }}:</b> <br>
        Akademická 409 <br>
        411 55 Terezín <br>
        <br>
        IČ: 27911586 <br>
        <br> 
        {{ $t('vydavatel.prvni-odstavec') }} <br>
        <br>
        {{ $t('vydavatel.druhy-odstavec') }} <br>
        <br>
        {{ $t('vydavatel.vice-informaci') }}: <a href="www.vsaps.cz">www.vsaps.cz</a>
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
  .blog-cards{
    margin-left: initial;
  }
  p {
    font-size: 10px;
  }
  span{
    font-size: 9px;
  }
}
</style>