<template>
  <div class="blog-card-wrap">
    <div class="blog-cards container">
        <h2>{{ $t('eticky-kodex.eticky-kodex') }}</h2>
    <p>
        <b>{{ $t('eticky-kodex.title') }}</b><br>
        <br>
        {{ $t('eticky-kodex.duties') }} <br>
        <br>
        <b>{{ $t('eticky-kodex.duties-author') }}</b><br>
        <br>
        {{ $t('eticky-kodex.duties-author1') }} <br>
        <br>
        {{ $t('eticky-kodex.duties-author2') }}<br>
        {{ $t('eticky-kodex.duties-author3') }}<br>
        {{ $t('eticky-kodex.duties-author4') }}<br>
        {{ $t('eticky-kodex.duties-author5') }}<br>
        {{ $t('eticky-kodex.duties-author6') }}<br>
        {{ $t('eticky-kodex.duties-author7') }}<br>
        <br>
        <b>{{ $t('eticky-kodex.duties-reviewer') }}</b><br>
        <br>
        {{ $t('eticky-kodex.duties-reviewer1') }} <br>
        <br>
        {{ $t('eticky-kodex.duties-reviewer2') }}<br>
        {{ $t('eticky-kodex.duties-reviewer3') }}<br>
        {{ $t('eticky-kodex.duties-reviewer4') }}<br>
        {{ $t('eticky-kodex.duties-reviewer5') }}<br>
        {{ $t('eticky-kodex.duties-reviewer6') }}<br>
        <br>
        <br>
        <b>{{ $t('eticky-kodex.duties-editor') }}</b><br>
        <br>
        {{ $t('eticky-kodex.duties-editor1') }} <br>
        <br>
        {{ $t('eticky-kodex.duties-editor2') }}<br>
        {{ $t('eticky-kodex.duties-editor3') }}<br>
        {{ $t('eticky-kodex.duties-editor4') }}<br>
        {{ $t('eticky-kodex.duties-editor5') }}<br>
        <br>
        <b>{{ $t('eticky-kodex.breach') }}</b> <br>   
        <br>{{ $t('eticky-kodex.norms') }} <a href="https://publicationethics.org/">https://publicationethics.org/</a> <br>
        <br>   
        <span>________________________________________________________</span>
    </p>
    </div>
  </div>
</template>

<script>

export default {
    name: 'Ethics',
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