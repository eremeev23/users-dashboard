<template>
  <header class="header">
    <nav class="navigation">
      <ul class="nav__list">
        <li class="list__item">
          <v-btn rounded class="button" @click.prevent="login">Log in</v-btn>
        </li>
        <li class="list__item">
          <v-btn rounded class="button" @click.prevent="ToggleSignUp">Sign up</v-btn>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Header',
  methods: {
    ...mapMutations(['ToggleLogin', 'ToggleSignUp']),

    login: function() {
      this.ToggleLogin()
    },
    signup: function() {
      this.ToggleSignUp()
    }  
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 60px;
  background: #2196F3;

  .navigation {
    max-width: 80%;
    display: flex;
    justify-content: flex-end;
    height: 100%;

    .nav__list {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .list__item {

        .button {
          margin: 0 15px;
          padding: 8px 20px;
          background: transparent;
          border: 2px solid #fff;
          color: #fff;
          font-weight: bold;
        }
      }
    }
  }
}
</style>