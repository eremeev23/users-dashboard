<template>
  <div class="form__wrapper">
    <h1 class="title"><strong>Simple Project |</strong> Sign In</h1>
    <v-form ref="form"  v-model="valid" lazy-validation class="form">

      <v-text-field
        class="text__input"
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

      <div class="links">
        <router-link class="sign-up" to='/sign_up'>
          Sign up
        </router-link>
        
          <v-btn
            class="ma-2 submit"
            :loading="loading"
            :disabled="!email || password.length < 8 || loading"
            color="primary"
            @click="loader = 'loading'"
          >
            <router-link to='/home' class="link">
              Sign In
            </router-link>  
          </v-btn>
        
      </div>
      
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      email: '',
      password: '',
      loader: null,
      loading: false,
      show: false,
      valid: false,
      rules: {
          required: value => !!value || 'Required.',
          emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
          ],
          min:  v => v.length >= 8 || 'Min 8 characters',
      },
    }
  },
  methods: {
    submit: function(e) {
      console.log(e.target);
    }
  },
  watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },
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

      .sign-up {
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

