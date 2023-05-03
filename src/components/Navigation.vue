<template>
  <header>
    <nav v-show="!mobile" class="container menu" tabindex="0">

        <div class="wrapper">
            <img src="../assets/Icons/logo.png" alt="">
            <img src="../assets/Icons/Erih_plus.png" alt="">
            <div>
                <ul>
                    <li tabindex="0" class="icon-dashboard"><span><router-link class="link" :to="{ name: 'Domu' }">{{ $t('nav.Domu') }}</router-link></span></li>
                    <li tabindex="0" class="icon-dashboard"><span><router-link class="link" :to="{ name: 'Vydani' }">{{ $t('nav.Archiv') }}</router-link></span></li>
                    <li tabindex="0" class="icon-dashboard"><span><router-link class="link" :to="{ name: 'ProAutory' }">{{ $t('nav.Pro_Autory') }}</router-link></span></li>
                    <li tabindex="0" class="icon-dashboard"><span><router-link class="link" :to="{ name: 'Ethics' }">{{ $t('nav.Eticky_kodex') }}</router-link></span></li>
                    <li tabindex="0" class="icon-dashboard"><span><router-link class="link" :to="{ name: 'Redakce' }">{{ $t('nav.Redakce') }}</router-link></span></li>
                    <li tabindex="0" class="icon-dashboard"><span><router-link class="link" :to="{ name: 'Vydavatel' }">{{ $t('nav.Vydavatel') }}</router-link></span></li>
                    <li tabindex="0" class="icon-dashboard"><span><router-link class="link" :to="{ name: 'Kontakt' }">{{ $t('nav.Kontakt') }}</router-link></span></li>
                    <li tabindex="0" class="icon-dashboard"><span><router-link v-if="user" class="link" :to="{ name: 'VytvoritPrispevek' }">{{ $t('nav.Novy_prispevek') }} </router-link></span></li>
                  </ul>
                <ul class="socials">
                    <li>
                    <img @click.prevent="setLocale('cs')" class="cs-flag" src="../assets/Icons/cz.webp" alt="">
                    </li>
                    <li>
                    <img @click.prevent="setLocale('en')" class="gb-flag" src="../assets/Icons/gb.webp" alt="">
                    </li>
                </ul> 
            </div>
        </div>
        <div class="nav-links">
             <div v-if="user" @click="toggleProfileMenu" class="profile" ref="profile">
                <span> {{ $store.state.profileInitials }} </span>
                <div v-if="user" class="profile-menu">
                    <div class="info">
                        <p class="initials">{{ $store.state.profileInitials }}</p>
                        <div class="right">
                            <p>{{ $store.state.profileFirstName }} {{ $store.state.profileLastName }}</p>
                            <p>{{ $store.state.profileUsername }}</p>
                            <p>{{ $store.state.profileEmail }}</p>
                        </div>
                    </div>
                    <div class="options">
                        <div class="option">
                            <router-link class="option" :to="{ name:'Profil'}">
                                <userIcon class="icon"/>
                                <p>{{ $t('profile.Profil') }}</p>
                            </router-link>
                        </div>
                        <div class="option">
                            <router-link class="option" :to="{ name:'Admin'}">
                                <adminIcon class="icon"/>
                                <p>{{ $t('profile.Admin') }}</p>
                            </router-link>
                        </div>
                        <div @click="signOut" class="option">
                                <signOutIcon class="icon"/>
                                <p>{{ $t('profile.Odhlasit_se') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <div class="mobile-menu">
      <div class="branding">
        <router-link @click="toggleMobileNav" v-show="mobile" class="link" :to="{name: 'Domu'} ">{{ $t('mobile') }}</router-link>
      </div>
      <menu-Icon @click="toggleMobileNav" class="menu-icon" v-show="mobile"/>
      <transition name="mobile-nav">
        <ul class="mobile-nav" v-show="mobileNav">
            <router-link @click="toggleMobileNav" v-show="mobile" class="link" :to="{name: 'Domu'} ">{{ $t('nav.Domu') }}</router-link>
            <router-link @click="toggleMobileNav" v-show="mobile" class="link" :to="{name: 'Vydani' }">{{ $t('nav.Archiv') }}</router-link>
            <router-link @click="toggleMobileNav" v-show="mobile" class="link" :to="{ name: 'Ethics' }">{{ $t('nav.Eticky_kodex') }}</router-link>
            <router-link @click="toggleMobileNav" v-show="mobile" class="link" :to="{ name: 'ProAutory' }">{{ $t('nav.Pro_Autory') }}</router-link>
            <router-link @click="toggleMobileNav" v-show="mobile" class="link" :to="{ name: 'Redakce' }">{{ $t('nav.Redakce') }}</router-link>
            <router-link @click="toggleMobileNav" v-show="mobile" class="link" :to="{ name: 'Vydavatel' }">{{ $t('nav.Vydavatel') }}</router-link>
            <router-link @click="toggleMobileNav" v-show="mobile" class="link" :to="{ name: 'Kontakt' }">{{ $t('nav.Kontakt') }}</router-link>
            <router-link v-if="user" class="link" :to="{ name: 'VytvoritPrispevek' }">{{ $t('nav.Novy_prispevek') }}</router-link>
            <img src="../assets/Icons/logo.png" alt=""><br>
            <img src="../assets/Icons/Erih_plus.png" alt="">
            <div v-if="user" class="profile-menu">
                    <div class="info">
                        <p class="initials">{{ $store.state.profileInitials }}</p>
                        <div class="right">
                            <p>{{ $store.state.profileFirstName }} {{ $store.state.profileLastName }}</p>
                            <p>{{ $store.state.profileUsername }}</p>
                            <p>{{ $store.state.profileEmail }}</p>
                        </div>
                    </div>
                    <div class="options">
                        <div class="option">
                            <router-link class="option" :to="{ name:'Profil'}">
                                <userIcon class="icon"/>
                                <p>{{ $t('profile.Profil') }}</p>
                            </router-link>
                        </div>
                        <div class="option">
                            <router-link class="option" :to="{ name:'Admin'}">
                                <adminIcon class="icon"/>
                                <p>{{ $t('profile.Admin') }}</p>
                            </router-link>
                        </div>
                        <div @click="signOut" class="option">
                                <signOutIcon class="icon"/>
                                <p>{{ $t('profile.Odhlasit_se') }}</p>
                        </div>
                    </div>
                </div>
        </ul>
    </transition>
    </div>
  </header>
</template>

<script>
import menuIcon from '../assets/Icons/bars-regular.svg';
import userIcon from '../assets/Icons/user-alt-light.svg';
import adminIcon from '../assets/Icons/user-crown-light.svg';
import signOutIcon from '../assets/Icons/sign-out-alt-regular.svg';
import firebase from "firebase/app";
import "firebase/auth";



export default {
    name: "navigation",
    components: {
        menuIcon,
        userIcon,
        adminIcon,
        signOutIcon,
    },
    data(){
        return{
            profileMenu: null,
            mobile: null,
            mobileNav: null,
            windowWidth: null,

        };
    },
    created(){
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    },
    methods:{
      setLocale(locale){
        this.$root.$i18n.locale = locale;
        this.$router.push({
          params: {lang: locale}
        }).catch(()=>{})
      },
        checkScreen(){
            this.windowWidth = window.innerWidth;
            if (this.windowWidth < 750){
                this.mobile = true;
                return;
            }
            this.mobile = false
            this.mobileNav = false
            return;
        },
        toggleMobileNav(){
            if (this.mobileNav === true) {
              this.mobileNav === false;
            }
            this.mobileNav = !this.mobileNav;
        },
        toggleProfileMenu(e){
            if(e.target === this.$refs.profile){
                this.profileMenu = !this.profileMenu;
            }
        },

        signOut(){
            firebase.auth().signOut();
            window.location.reload();
        },
    },
    computed:{
        user(){
            return this.$store.state.user;
        },
    }
}
</script>
<style lang="scss" scoped>

.cs-flag{
  width: 20px !important;
  padding-bottom: 10px;
}

.gb-flag{
  width: 20px !important;
  margin-top: 20px !important;
}

.profile-menu {
          position: absolute;
          top: 550px;
          right: 0;
          width: 250px;
          background-color: white;
          color: black;
          box-shadow: 0 4px 10px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          .info {
            display: flex;
            align-items: center;
            padding: 15px;
            border-bottom: 1px solid #fff;
            .initials {
              position: initial;
              width: 40px;
              height: 40px;
              background-color: lightgray;
              color: black;  //initials color text
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50%;
            }
            .right {
              flex: 1;
              margin-left: 24px;
              p:nth-child(1) {
                font-size: 14px;
              }
              p:nth-child(2),
              p:nth-child(3) {
                font-size: 12px;
              }
            }
          }
          .options {
            padding: 15px;
            .option {
              text-decoration: none;
              color: black;
              display: flex;
              align-items: center;
              margin-bottom: 12px;
              .icon {
                width: 18px;
                height: auto;
              }
              p {
                font-size: 14px;
                margin-left: 12px;
              }
              &:last-child {
                margin-bottom: 0px;
              }
              &:hover {
                color: #1eb8b8;
              }
            }
          }
        }

.socials{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    list-style-type: none;

    a{
        display: block;
        width: 40px;
        height: 40px;
        line-height: 45px;
        text-align: center;
        margin: 0 5px;
        color: #303030;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
}
.menu{
    background:white;
    box-shadow: 0 5px 200px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    height:100vh;
    width: 275px;
    position:fixed;
    top:0;
    left:0;
    z-index:5;
    outline:none;

    img{
        margin-top: 17px;
        margin-left: 10px;
        width: 250px;
    }

    li{
        padding: 10px;
        font-size:15px;
        background-repeat:no-repeat;
        background-position:left 15px center;
        background-size:auto 20px;
        transition:all 0.15s linear;
        cursor:pointer;  
    }
}
@media screen and (max-width: 750px) {
  .profile{
    margin-bottom: 20px;
    padding: 20px;
    width: 70%;
    max-width: 250px;
    position: fixed;
    top: 30px;
    left: 0;
    }
}


header {
  .link {
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3s color ease;
    &:hover {
      color: #1eb8b8;
    }
  }
  nav {
    display: flex;
    padding: 25px 0;
      .header {
        font-weight: 600;
        font-size: 24px;
        color: #000;
        text-decoration: none;
      }
    .nav-links {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-end;
      ul {
        margin-right: 32px;
        .link {
          margin-right: 32px;
        }
        .link:last-child {
          margin-right: 0;
        }
      }
      .profile {
        position: absolute;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 495px;
        right: 15px;
        width: 40px;
        height: 40px;
        color: #fff;
        span {
          display: none;
          pointer-events: none;
        }
        .profile-menu {
          position: absolute;
          top: 60px;
          right: 0;
          width: 250px;
          background-color: #fff;
          color: black;
          box-shadow: 0 4px 10px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          .info {
            display: flex;
            align-items: center;
            padding: 15px;
            border-bottom: 1px solid #fff;
            .initials {
              position: initial;
              width: 40px;
              height: 40px;
              background-color: lightgray;
              color: black;  //initials color text
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50%;
            }
            .right {
              flex: 1;
              margin-left: 24px;
              p:nth-child(1) {
                font-size: 14px;
              }
              p:nth-child(2),
              p:nth-child(3) {
                font-size: 12px;
              }
            }
          }
          .options {
            padding: 15px;
            .option {
              text-decoration: none;
              color: black;
              display: flex;
              align-items: center;
              margin-bottom: 12px;
              .icon {
                width: 18px;
                height: auto;
              }
              p {
                font-size: 14px;
                margin-left: 12px;
              }
              &:last-child {
                margin-bottom: 0px;
              }
              &:hover {
                color: #1eb8b8;
              }
            }
          }
        }
      }
    }
    .mobile-user-menu {
      margin-right: 40px;
    }
  }
  .menu-icon {
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 25px;
    height: 25px;
    width: auto;
    color: white;
  }
  .mobile-nav {
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: #303030;
    top: 0;
    left: 0;
    z-index: 999;
    .link {
      padding: 15px 0;
      color: #fff;
    }
  }
  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: all 1s ease;
  }
  .mobile-nav-enter {
    transform: translateX(-250px);
  }
  .mobile-nav-enter-to {
    transform: translateX(0);
  }
  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }
}

  .mobile-menu{
    height: 10vh;
    width: 100%;
    .link{
      margin-left: 17px;
      color: white;
    }
  }

  .branding{
    display: flex;
    align-items: center;
    height: 10vh;
    background-color: #053f64;
  }

  .branding img{
    width: 180px;
  }


  @media only screen and (min-width: 992px) {
  .mobile-menu{
    display: none;
  }
}
</style>