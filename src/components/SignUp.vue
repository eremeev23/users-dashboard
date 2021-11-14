<template>
  <div class="form__wrapper">
    <h1 class="title"><strong>Simple Project |</strong> Sign Up</h1>
    <v-form ref="form" lazy-validation class="form" @submit="register">
      <v-text-field
        class="text__input"
        append-icon="mdi-account"
        v-model="name"
        :rules="[rules.name, rules.required]"
        label="Full Name"
        required
      ></v-text-field>

      <v-text-field
      append-icon="mdi-email"
        v-model="email"
        :rules="rules.emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show ? 'text' : 'password'"
        hint="At least 8 characters"
        v-model="password"
        name="input-10-2"
        label="Password"
        class="input-group--focused text__input"
        @click:append="show = !show"
        required
      ></v-text-field>

      <v-text-field
        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.confirm]"
        :type="show2 ? 'text' : 'password'"
        
        v-model="confirm"
        name="input-10-2"
        label="Confirm Password"
        class="input-group--focused text__input"
        @click:append="show2 = !show2"
        required
      ></v-text-field>

      <div class="links">
        <router-link class="sign-in" to='/'>
          Sign in
        </router-link>
        
        <v-btn
          class="ma-2 submit"
          :loading="loading"
          :disabled="!email || !name || confirm.length < 8 || password.length < 8 || password !== confirm || loading"
          color="primary"
          @click="loader = 'loading'"
          to='/dashboard'
        >
          Sign up
        </v-btn>
        
      </div>
    </v-form>
  </div>
</template>

<script>
// import gql from 'graphql-tag'

export default {
  name: 'Form',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirm: '',
      loader: null,
      show: false,
      show2: false,
      valid: false,
      rules: {
          required: value => !!value || 'Required',
          min: v => v.length >= 8 || 'Min 8 characters',
          name: v => v.length >= 1 || 'Type your full name',
          confirm: v => v === this.password || "It doesn't confirm",
          emailRules: [
            v => !!v || 'Type your e-mail',
            v => /.+@.+\..+/.test(v) || 'Type your e-mail',
          ],
      },
    }
  },

  methods: {
    register: () => {
      // const email = this.email;
      // const password = this.password;

      this.$apollo.mutate({
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.form__wrapper {
  width: 100%;
  max-width: 420px;
  padding: 0;
  border-radius: 4px;
  box-shadow: 0 5px 15px #757575bd;

  .title {
    padding: 20px;
    border-bottom: 1px solid #c3c3c3;
    font-weight: 400;
  }

  .form {
    position: relative;
    padding: 36px 16px 20px;

    .links {
      margin-top: 16px;
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .sign-in {
        color: #757575;
        letter-spacing: 1px;
      }

      .submit {
        
        .link {
          text-decoration: none;
          color: #fff;
        }
      }
      .submit:disabled {
        .link {
          text-decoration: none;
          color: inherit;
        }
      }
    }
  }
}
</style>

