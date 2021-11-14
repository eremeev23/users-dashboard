import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../pages/SignInPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Sign In',
    component: SignIn
  },
  {
    path: '/sign_up',
    name: 'Sign Up',
    component: () => import( '../pages/SignUpPage.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    meta: {auth: true},
    component: () => import( '../pages/Dashboard.vue')
  },
  {
    path: '/members',
    name: 'Members',
    meta: {auth: true},
    component: () => import( '../pages/Users.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let pageTitle = `${ process.env.VUE_APP_TITLE } - ${to.name}`;
  if (to.params.title) {
    pageTitle += ` - ${ to.params.title }`;
  }
  document.title = pageTitle;
  next();
})

export default router
