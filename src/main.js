import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue2Editor from "vue2-editor";
import firebase from "firebase/app";
import "firebase/auth";
import i18n from './i18n'

Vue.use(Vue2Editor);

Vue.config.productionTip = false;


// use beforeEach route guard to set the language
router.beforeEach((to, from, next) => {

  // use the language from the routing param or default language
  let language = to.params.lang;
  if (!language) {
    language = 'cs'
  }

  // set the current language for i18n.
  i18n.locale = language
  next()
})


let app;
firebase.auth().onAuthStateChanged(() =>{
  if(!app ){
    new Vue({
      router,
      store,
      i18n,
      render: (h) => h(App)
    }).$mount("#app");
  }
});

