
<template>
  <div class="home">
    <BlogPost :post="post" v-for="(post, index) in blogPostsFeed" :key="index" />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>{{ $t('posledni-cisla') }}</h3>
        <div class="blog-cards">
          <BlogCard :post="post" v-for="(post, index) in blogPostsCards" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost";
import BlogCard from "../components/BlogCard";
import i18n from '../i18n';

export default {
  name: "Home",
  components: {BlogPost, BlogCard},
  data(){
    return{
      welcomeScreen:{
        title: i18n.t("home.title"),
        blogPost:
        i18n.t("home.uvod-text"),
        welcomeScreen: true,
      },
    }
  },
  computed: {
    blogPostsFeed(){
      return this.$store.getters.blogPostsFeed;
    },
    blogPostsCards(){
      return this.$store.getters.blogPostsCards;
    },
    user(){
            return this.$store.state.user;
        },
  }
};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 30px !important;
    width: 100%;
    text-align: center !important;
    padding: 20px;
    text-transform: uppercase;
    @media (min-width: 800px) {
      text-align: initial;
      font-size: 40px;
    }
  }

  .blog-cards{
    margin-left: initial !important;
  }
}
.updates {
  .container {
    padding: 100px 25px;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }
    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }
  }
}
</style>
