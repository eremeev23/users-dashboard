<template>
  <section class="home__page">
    <LogInForm />
    <SignUpForm v-if="getSignUp"/>
  </section>
</template>

<script>
  import LogInForm from '../components/SignIn.vue'
  import SignUpForm from '../components/SignUp.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'Home',

    components: {
      LogInForm,
      SignUpForm
    },

    computed: mapGetters(['getLogIn', 'getSignUp'])
  }
</script>

<style lang="scss" scoped>
.home__page {
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>