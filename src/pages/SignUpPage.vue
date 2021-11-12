<template>
  <div class="sign-up__wrapper">
    <SignUp />
  </div>
</template>

<script>
import SignUp from '../components/SignUp.vue'

export default {
  name: 'SignUpPage',
  components: {
    SignUp
  }
}
</script>


<style lang="scss" scoped>
.sign-up__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>