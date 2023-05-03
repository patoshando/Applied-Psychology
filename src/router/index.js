import Vue from "vue";
import VueRouter from "vue-router";
import Domu from "../views/Home.vue";
import Vydani from "../views/Blogs.vue";
import ZapomnelHeslo from "../views/ForgotPassword.vue";
import Prihlasit from "../views/Login.vue";
import VytvoritPrispevek from "../views/CreatePost.vue";
import Profile from "../views/Profile.vue";
import Admin from "../views/Admin.vue";
import PreviewPrispevek from "../views/BlogPreview.vue";
import ZhlednoutPrispevek from "../views/ViewBlog.vue";
import UpravitPrispevek from "../views/EditBlog.vue";
import ProAutory from "../views/ForAuthors.vue";
import Vydavatel from "../views/Vydavatel.vue";
import Redakce from "../views/Redakce.vue";
import Kontakt from "../views/Kontakt.vue";
import Ethics from "../views/Ethics.vue";
import i18n from '../i18n'

import firebase from "firebase/app";
import "firebase/auth";

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    redirect: `/${i18n.locale}`
  },
  {
    path: "/:lang",
    component: {
      render (c) { return c("router-view")}
    },
    children: [
      {
      path: "",
      name: "Domu",
      component: Domu,
      meta: {
        title: "Domů",
        requiresAuth: false,
      },
      },
      {
        path: "Vydani",
        name: "Vydani",
        component: Vydani,
        meta: {

          title: "Vydání",
          requiresAuth: false,
        },
      },
      {
        path: "Eticky-kodex",
        name: "Ethics",
        component: Ethics,
        meta: {

          title: "Etický kodex",
          requiresAuth: false,
        },
      },
      {
        path: "Prihlasit",
        name: "Prihlasit",
        component: Prihlasit,
        meta: {
          title: "Přihlásit",
          requiresAuth: false,
        },
      },
      {
        path: "Zapomnel-heslo",
        name: "ZapomnelHeslo",
        component: ZapomnelHeslo,
        meta: {
          title: "Zapomenuté heslo",
          requiresAuth: false,
        },
      },
      {
        path: "Profil",
        name: "Profil",
        component: Profile,
        meta: {
          title: "Profil",
          requiresAuth: true,
        },
      },
      {
        path: "Admin",
        name: "Admin",
        component: Admin,
        meta: {
          title: "Admin",
          requiresAdmin: true,
          requiresAuth: true,
        },
      },
      {
        path: "Vytvorit-Prispevek",
        name: "VytvoritPrispevek",
        component: VytvoritPrispevek,
        meta: {
          title: "Nový příspěvek",
          requiresAuth: true,
        },
      },
      {
        path: "Preview-Prispevek",
        name: "PreviewPrispevek",
        component: PreviewPrispevek,
        meta: {
          title: "Preview příspěvku",
          requiresAuth: true,
        },
      },
      {
        path: "Zhlednout-prispevek/:blogid",
        name: "ZhlednoutPrispevek",
        component: ZhlednoutPrispevek,
        meta: {
          title: "Zhlédnout příspěvek",
          requiresAuth: false,
        },
      },
      {
        path: "Upravit-prispevek/:blogid",
        name: "UpravitPrispevek",
        component: UpravitPrispevek,
        meta: {
          title: "Upravit příspěvek",
          requiresAuth: true,
        },
      },
      {
        path: "Pro-autory",
        name: "ProAutory",
        component: ProAutory,
        meta: {
          title: "Pro Autory",
          requiresAuth: false,
        },
      },
      {
        path: "Redakce",
        name: "Redakce",
        component: Redakce,
        meta: {
          title: "Redakce",
          requiresAuth: false,
        },
      },
      {
        path: i18n.t("nav.Vydavatel"),
        name: "Vydavatel",
        component: Vydavatel,
        meta: {
          title: "Vydavatel",
          requiresAuth: false,
        },
      },
      {
        path: "Kontakt",
        name: "Kontakt",
        component: Kontakt,
        meta: {
          title: "Kontakt",
          requiresAuth: false,
        },
      },
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - VŠAPS`;
  
  next();
});


router.beforeEach(async(to, from, next) =>{
  let user = firebase.auth().currentUser;
  let admin = null;
  if (user) {
    let token = await user.getIdTokenResult();
    admin = token.claims.admin;
  }
  if (to.matched.some((res)=>res.meta.requiresAuth)){
    if (user) {
      if (to.matched.some((res) => res.meta.requiresAdmin)){
        if (admin) {
          return next();
        }
        return next({name: "Domu"});
      }
      return next();
    }
    return next({name: "Domu"});
  }
  return next();
});

export default router;
