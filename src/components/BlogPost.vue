<template>
  <div class="blog-wrapper" :class="{'no-user': !user }">
    <div class="blog-content">
        <div>
            <h2 v-if="post.welcomeScreen">{{ post.title }}</h2>
            <h2 v-else>{{ $t('home.title') }}</h2>
            <p >{{ $t("home.uvod-text") }}</p>
            <router-link class="link link-light" v-if="post.welcomeScreen" to="#">
            </router-link>
            <router-link class="link" v-else :to="{name:'ZhlednoutPrispevek', params:{blogid: this.post.blogID}}">
                {{ $t('blog-post.zhlednout-cislo') }} <Arrow class="arrow"/>
            </router-link>
        </div>
    </div>
    <div class="blog-photo">
        <img v-if="post.welcomeScreen" :src="require(`../assets/blogPhotos/${post.photo}.jpg`)" alt="">
        <img v-else :src="post.blogCoverPhoto" alt="">
    </div>
  </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg"
export default {
    name: "blogPost",
    props: ["post"],
    components: {
        Arrow,
    },
    computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss" scoped>
.arrow path{
    fill: rgb(81, 206, 255) !important;
}


.blog-wrapper{
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    @media (min-width: 700px){
        min-height: 750px;
        max-height: 750px;
        flex-direction: row;
        }

        .blog-content{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex: 4;
            order: 2;
            background-color: #053f64;
            color:white;
            @media (min-width: 700px){
                order: 1;
            }
            @media (min-width: 800px){
                flex: 3;
                background-color: #053f64;
                color: white;
            }

            div{
                max-width: 375px;
                padding: 72px 24px;
                @media (min-width: 700px){
                    padding: 0 24px;
                }

                h2{
                    font-size: 32px;
                    font-weight: 300;
                    text-transform: uppercase;
                    margin-bottom: 24px;
                    @media (min-width: 700px){
                        font-size: 40px;
                    }

                }
                p {
                    font-size: 20px;
                    font-weight: 300;
                    line-height: 1.5;
                }

                .content-preview{
                    font-size: 13px;
                    max-height: 24px;
                    width: 250px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .link{
                    color:rgb(81, 206, 255)!important;
                    display: inline-flex;
                    align-items: center;
                    margin-top: 32px;
                    padding-bottom: 0%;
                    font-weight: 1000;
                    border-bottom: 1px solid transparent;
                    transition: 0.5s ease-in all;

                    &:hover{
                        border-bottom-color: #303030;
                    }
                }

                .link-light{
                    &:hover{
                        border-bottom-color: #fff;
                    }
                }
            }
        }

        .blog-photo{
            order: 1;
            flex: 3;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

            @media(min-width: 700px){
                order:2;
            }
            @media(min-width: 800px){
                flex: 4;
            }

            img{
                display: block;
                width: 100%;
                @media(max-width: 1559px){
                    margin-left: 0px;
                    width: 99%;
                }       
            }
        }

        &:nth-child(even){
            .blog-content{
                order: 1;
            }

            .blog-photo{
                order: 1;
            }
        }
}


.no-user:first-child{
    .blog-content{
        background-color: #053f64;
        color: #fff;
    }
}


</style>