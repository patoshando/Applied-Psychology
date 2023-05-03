<template>
  <div class="blog-card-wrap">
    <h2 class="gap">{{ $t('blogs.releases') }} 2023</h2>
    <div class="blog-cards container">
        <div v-if="user" class="toggle-edit">
            <span>{{ $t('blogs.edit-posts') }}</span>
            <input type="checkbox" v-model="editPost">
        </div>
          <BlogCard :post="post" v-for="(post, index) in filteredPosts2023" :key="index"/>
    </div>
    <h2 class="gap">{{ $t('blogs.releases') }} 2022</h2>
    <div class="blog-cards container">
          <BlogCard :post="post" v-for="(post, index) in filteredPosts2022" :key="index"/>
    </div>
    <h2 class="gap">{{ $t('blogs.releases') }} 2021</h2>
    <div class="blog-cards container">
          <BlogCard :post="post" v-for="(post, index) in filteredPosts2021" :key="index"/>
    </div>
    <h2 class="gap">{{ $t('blogs.releases') }} 2020</h2>
    <div class="blog-cards container">
          <BlogCard :post="post" v-for="(post, index) in filteredPosts2020" :key="index"/>
    </div>
    <h2 class="gap">{{ $t('blogs.releases') }} 2019</h2>
    <div class="blog-cards container">
          <BlogCard :post="post" v-for="(post, index) in filteredPosts2019" :key="index"/>

    </div>
    <h2 class="gap">{{ $t('blogs.releases') }} 2018</h2>
    <div class="blog-cards container">
          <BlogCard :post="post" v-for="(post, index) in filteredPosts2018" :key="index"/>
    </div>
    <h2 class="gap">{{ $t('blogs.releases') }} 2017</h2>
    <div class="blog-cards container">
          <BlogCard :post="post" v-for="(post, index) in filteredPosts2017" :key="index"/>

    </div>
    <h2 class="gap">{{ $t('blogs.releases') }} 2016</h2>
    <div class="blog-cards container">
          <BlogCard :post="post" v-for="(post, index) in filteredPosts2016" :key="index"/>
    </div>
  </div>
</template>

<script>
import BlogCard from "../components/BlogCard";

export default {
    name: 'blogs',
    components: {BlogCard},
    computed: {
      filteredPosts2023(){
        return this.blogPosts.filter(post => post.blogTitle.includes("2023"));
      },
      filteredPosts2022(){
        return this.blogPosts.filter(post => post.blogTitle.includes("2022"));
      },
      filteredPosts2021(){
        return this.blogPosts.filter(post => post.blogTitle.includes("2021"));
      },
      filteredPosts2020(){
        return this.blogPosts.filter(post => post.blogTitle.includes("2020"));
      },
      filteredPosts2019(){
        return this.blogPosts.filter(post => post.blogTitle.includes("2019"));
      },
      filteredPosts2018(){
        return this.blogPosts.filter(post => post.blogTitle.includes("2018"));
      },
      filteredPosts2017(){
        return this.blogPosts.filter(post => post.blogTitle.includes("2017"));
      },
      filteredPosts2016(){
        return this.blogPosts.filter(post => post.blogTitle.includes("2016"));
      },
        blogPosts(){
            return this.$store.state.blogPosts;
        },
        editPost: {
            get(){
                return this.$store.state.editPost
            },
            set(payload){
                this.$store.commit("toggleEditPost", payload)
            },
        },
        user(){
            return this.$store.state.user;
        },
    },
    beforeDestroy(){
        this.$store.commit("toggleEditPost", false);
    }
}
</script>

<style lang="scss" scoped>
.gap{
  padding: 10px;
}

.blog-cards {
  position: relative;
  .toggle-edit {
    display: flex;
    align-items: center;
    position: absolute;
    top: -70px;
    right: 0;
    @media(max-width: 550px){
      top: -100px;
      margin-right: 150px;
    }

    span {
      margin-right: 16px;
    }
    
    input[type="checkbox"] {
      position: relative;
      border: none;
      -webkit-appearance: none;
      background: #fff;
      outline: none;
      width: 80px;
      height: 30px;
      border-radius: 20px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    input[type="checkbox"]:before {
      content: "";
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 20px;
      top: 0;
      left: 0;
      background: #303030;
      transform: scale(1.1);
      transition: 750ms ease all;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    input:checked[type="checkbox"]:before {
      background: #fff;
      left: 52px;
    }
  }
}

</style>