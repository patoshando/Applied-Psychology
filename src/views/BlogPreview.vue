<template>
  <div class="post-view">
    <div class="container quillWrapper">
      <h2>{{ this.blogTitle }}</h2>
      <img :src="blogCoverPhoto" alt="" />
      <div class="post-content ql-editor" v-html="blogHTML"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostPreview",
  computed: {
    blogTitle(){
      return this.$store.state.blogTitle;
    },
    blogHTML(){
      return this.$store.state.blogHTML;
    },
    blogCoverPhoto(){
      return this.$store.state.blogPhotoFileURL;
    },
  }
}
</script>

<style lang="scss">
.post-view{
  min-height: 100%;
  padding: 10px;
  margin-left: 250px;
  @media(max-width: 550px){
      margin-left: initial;
    }

  .container{
    display: initial !important;
    max-width: 1000px;
    padding: 60px 25px;
  }

  h2{
    margin-bottom: 16px;
    font-weight: 300;
    font-size: 32px;
    @media(max-width: 550px){
      margin-left: initial;
    }
  }

  img{
    width: 45%;
    margin-bottom: 32px;
    @media(max-width: 550px){
      width: 100%;
      margin-left: initial;
      margin-bottom: initial;
    }
  }

  .post-content{
    @media(max-width: 550px){
      margin-left: initial;
      p{
        font-size: initial;
      }
    }
  }
}
</style>