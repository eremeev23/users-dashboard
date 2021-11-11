<template>
  <v-form ref="form"  v-model="valid" lazy-validation class="form">
    <h1 class="title">Sign Up</h1>

    <v-text-field
      v-model="username"
      :rules="[rules.required]"
      label="Username"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.min]"
      :type="show ? 'text' : 'password'"
      name="input-10-2"
      label="Password"
      class="input-group--focused"
      @click:append="show = !show"
      required
    ></v-text-field>

    <v-btn
      :disabled="valid"
      color="primary"
      class="mr-10"
      @click="validate"
    >
      Sign Up
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      password: '',
      show: false,
      valid: false,
      rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
      },
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  width: 420px;
  padding: 60px 30px;
  border-radius: 8px;
  box-shadow: 0 5px 15px #757575;
}
</style>

