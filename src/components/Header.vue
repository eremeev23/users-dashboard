<template>
  <v-card
    class="mx-auto overflow-hidden header"
    height="100vh"
    width="100vw"
    
  >

    <v-app-bar
      color="primary"
      dark
      class="navbar"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="primary--text text--accent-4"
        >
          <v-list-item exact>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Members</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
// import { mapMutations } from 'vuex'

export default {
  name: 'Header',
  methods: {
    
  },
  data: () => ({
      drawer: false,
      group: null,
      title: 'Dashboard'
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
}
</script>

<style lang="scss" scoped>
.header {
  border-radius: 0px !important;

}
</style>