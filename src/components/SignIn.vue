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
        :rules="[rules.required]"
        :type="show ? 'text' : 'password'"
        name="input-10-2"
        label="Password"
        class="input-group--focused text__input"
        @click:append="show = !show"
        required
      ></v-text-field>

      <v-btn
        class="ma-2 submit"
        :loading="loading"
        :disabled="loading"
        color="primary"
        @click="loader = 'loading'"
      >
        Sign In
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      username: '',
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
    padding: 36px 16px 72px;

    .submit {
      position: absolute;
      right: 24px;
      bottom: 14px;
    }
  }
}
</style>

