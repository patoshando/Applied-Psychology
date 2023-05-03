<template>
  <footer>
    <div class="container">
      <div class="left">
        <div class="col-1">
          <ul>
            <li>
              <img @click.prevent="setLocale('cs')" class="cs-flag" src="../assets/Icons/cz.webp" alt="">
            </li>
            <li>
              <img @click.prevent="setLocale('en')" class="gb-flag" src="../assets/Icons/gb.webp" alt="">
            </li>
          </ul>
        </div>
      </div>
      <div class="right">
        <p>© 2023 VŠAPS. All rights reserved<br>
        Provided by: <a href="https://tomaspatolan.cz/">Tomáš Patolán</a>
        </p>
                <router-link v-if="!user" class="option" :to="{ name:'Prihlasit'}">
                    <adminIcon class="icon"/>
                    <p>{{ $t('nav.Prihlasit') }}</p>
                </router-link>
      </div>
    </div>
  </footer>
</template>
<script id="CookieDeclaration" src="https://consent.cookiebot.com/1834ecb7-5dd8-4bf7-9176-69afbf608a69/cd.js" type="text/javascript" async></script>

<script>
import adminIcon from '../assets/Icons/user-crown-light.svg';
export default {
  name: "footer-vue",
  components:{adminIcon,},
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    setLocale(locale){
        this.$root.$i18n.locale = locale;
        this.$router.push({
          params: {lang: locale}
        }).catch(()=>{})
      },
  }
};
</script>

<style lang="scss" scoped>
.option {
      color: white;
      text-decoration: underline;
      display: flex;
      margin-left: 1500px;
      margin-bottom:-80px ;
      transition: 0.3s color ease;
      @media (max-width: 700px) {
      margin-left: initial;
      margin-bottom: initial;
      
      }
      @media (max-width: 1200px) {
      margin-left: initial;
      margin-top: 25px;
    }
    @media (max-width: 1600px) {
      margin-left: 0px;
    }
      .icon {
        width: 14px;
        height: auto;
      }
      p {
        font-size: 14px;
        margin-left: 8px;
      }
      &:hover {
                color: #1eb8b8;
              }
    }

footer {
  a{
    color: #999;
    text-decoration: none;
  }

  margin-top: auto;
  padding: 100px 25px;
  background-color: #053f64;;
  .container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    @media (min-width: 800px) {
      flex-direction: row;
      gap: 0px;
    }
    > div {
      display: flex;
      flex: 1;
    }
    .left {
      gap: 32px;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (min-width: 800px) {
        flex-direction: row;
        align-items: initial;
        gap: 0;
        display: none;
      }
      .header {
        text-align: center;
        font-size: 24px;
        color: #fff;
        margin-bottom: 16px;
        text-decoration: none;
        font-weight: 600;
        @media (min-width: 800px) {
          text-align: initial;
        }
      }
      ul {
        gap: 16px;
        list-style: none;
        display: flex;
      }
      .col-1,
      .col-2 {
        gap: 32px;
        display: flex;
        flex: 1;
        @media (min-width: 800px) {
          gap: 0;
        }
      }
      .col-1 {
        flex-direction: column;
        h2 {
          text-align: center;
          @media (min-width: 800px) {
            text-align: initial;
          }
        }
        ul {
          margin-top: auto;
          li {
            display: flex;
            align-items: center;
            .svg-icon {
              width: 24px;
              height: auto;
              color: #fff;
            }
          }
        }
      }
      .col-2 {
        ul {
          height: 100%;
          justify-content: center;
          flex-direction: row;
          flex-wrap: wrap;
          margin-left: 60px;
          @media (min-width: 800px) {
            flex-direction: column;
          }
          .link {
            font-size: 16px;
            font-weight: 500;
            color: #fff;
            text-decoration: none;
          }
        }
      }
    }
    .right {
      gap: 32px;
      color: #fff;
      align-items: center;
      flex-direction: column;
      margin-right: 150px;
      @media (max-width: 800px) {
        align-items: center;
        gap: 0;
        margin-right: initial;
      }
    }
    p {
      margin-top: auto;
    }
  }
}
</style>