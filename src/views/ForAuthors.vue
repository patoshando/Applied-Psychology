<template>
  <div class="blog-card-wrap">
    <div class="blog-cards container">
        <h2>{{ $t('pro-autory.pokyny-pro-autory') }}</h2>
    <p>
        <b>{{ $t('pro-autory.zmena-odstavec') }}</b><br>
        <br>
        {{ $t('pro-autory.prvni-odstavec') }}<br>
        <br>{{ $t('pro-autory.druhy-odstavec') }} <br>
        <br>
        {{ $t('pro-autory.treti-odstavec') }} <br>
        <br>
        {{ $t('pro-autory.ctvrty-odstavec') }} <b><a href="https://vsapsterezin-my.sharepoint.com/personal/stasenkova_vsaps_cz/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fstasenkova%5Fvsaps%5Fcz%2FDocuments%2F%C4%8Dasopis%2FPokyny%20pro%20autory%2Epdf&parent=%2Fpersonal%2Fstasenkova%5Fvsaps%5Fcz%2FDocuments%2F%C4%8Dasopis&ga=1" target="_blank">{{ $t('pro-autory.zde') }}</a></b><br>
        <br>
        {{ $t('pro-autory.paty-odstavec') }} <b>maturkanic@vsaps.cz.</b> <br>
        <br>
        <b>{{ $t('pro-autory.recenzni-rizeni') }}</b> <br>
        {{ $t('pro-autory.sesty-odstavec') }}
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

<style lang="scss" scoped>

.blog-cards{
  margin-left: 260px;
}

@media screen and (max-width: 749px) {
  p {
    font-size: 10px;
  }
  span{
    font-size: 9px;
  }
}

@media screen and (max-width: 680px) {
  p {
    font-size: 7.3px;
  }
  span{
    font-size: 10px;
  }
}
</style>