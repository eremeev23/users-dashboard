<template>
  <header class="header">
    <nav class="sidebar">
      <v-btn icon @click="closeMenu" class="close__button" color="white">
        <h3>Site Navigation</h3>
        <v-icon color="white">mdi-close</v-icon>
      </v-btn>

      <ul class="nav__list">
        <li class="nav__item" @click.prevent="closeMenu">
          <router-link  active-class='active' to="/dashboard" exact class="item__link">
            Dashboard
          </router-link>
        </li>
        <li class="nav__item" @click.prevent="closeMenu"> 
          <router-link  active-class='active' to="/members" exact class="item__link" >
            Members
          </router-link>
        </li>
      </ul>
    </nav>

    <div class="left-side">
      <v-btn icon @click="openMenu">
        <v-icon color="white">mdi-menu</v-icon>
      </v-btn>
      
      <h2 class="page__title">{{ title }}</h2>
    </div>

    <div class="list">
      <v-menu offset-y class="dropdown">
        <template v-slot:activator="{ on, attrs }" class="dropdown__button">
          <v-btn
            color="#01579B"
            class="action__button"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Actions <v-icon color="white darken-2" class="btn__icon">mdi-menu-down</v-icon>
          </v-btn>
        </template>

        <v-list class="menu__list">
          <v-list-item class="list__item">
            <v-list-item-title>eremeevmiami94@icloud.com</v-list-item-title>
          </v-list-item>

          <router-link to='/' style="text-decoration: none; color: #212121">  
            <v-list-item link class="list__item">
              <v-list-item-title><span class="logout">Log Out</span></v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list>
      </v-menu>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: ['title', 'title2'],
  methods: {
    openMenu: () => {
      const menu = document.querySelector('.sidebar')
      menu.style = 'margin-left: 0'
    },
    closeMenu: () => {
      const menu = document.querySelector('.sidebar')
      menu.style = 'margin-left: -260px'
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8vh;
  background: #01579B;
  color: #fff;

  .sidebar {
    position: absolute;
    margin-left: -260px;
    height: 100vh;
    width: 240px;
    background: #fff;
    left: 0;
    top: 0;
    box-shadow: 2px 0 10px #222222;
    z-index: 10;
    transition: all .3s ease;

    .close__button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      width: 100%;
      height: 8vh;
      border-radius: 0;
      background: #01579B;
    }

    .nav__list {
      padding: 0;
      list-style: none;
      margin-top: 5vh;
      width: 100%;

      .nav__item{
        margin: 10px 0;
        width: 100%;

        .item__link {
          display: inline-block;
          text-decoration: none;
          color: #000;
          width: 100%;
          padding: 16px 24px;
          font-size: 18px;
        }
        .active {
          position: relative;
          background: #0068b8bb;
          color: #fff;
        }
        .active::after {
          position: absolute;
          content: '';
          height: 100%;
          width: 8px;
          top: 0;
          right: 0;
          background: #01579B;
        }
      }
    }
  }
  
  .left-side {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 20px;

    .page__title {
      margin: 0 20px;
      padding: 0;
    }
  }

  .list {
    margin-right: 4vw;

    .action__button {
      box-shadow: none;
      width: 180px;
      display: flex;
      align-items: center;

      .btn__icon {
        margin-left: 10px;
      }
    }
  }
}

.menu__list {
  .v-list-item{
    transition: all .2s ease;
  }
  .v-list-item:hover {
    background: rgba(0, 0, 0, 0.3);
  }
}
</style>