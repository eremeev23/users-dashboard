<template>
  <div class="home__page">
    <Header :title='title'/>
    <section class="main">
      <v-card class="mx-auto mt-10" max-width="500">
        <v-img src="https://www.hellowp.com/wp-content/uploads/2018/06/users.png" height="240px"></v-img>

        <v-card-title>
          Total Accounts count:
        </v-card-title>

        <v-card-subtitle>
          1 563
        </v-card-subtitle>

        <v-card-actions>
          <router-link to='/members' style="text-decoration: none">
            <v-btn color="orange lighten-2" text>
              Explore
            </v-btn>
          </router-link>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              This is total number of accounts registered on our site since January 2020. 
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </section>
  </div>
</template>

<script>
import Header from '../components/Navigation.vue'

export default {
 name: 'Dashboard',
 data() {
    return {
      title: 'Dashboard',
      show: false,
    }
  },
 components: {
   Header
 }
}
</script>

<style>

</style>