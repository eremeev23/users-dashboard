<template>
  <div class="home__page">
    <Header :title='title'/>

    <div class="table__wrapper">
      <v-data-table
        :headers="headers"
        :items="desserts"
        :server-items-length="totalDesserts"
        :loading="loading"
        :search="search"
        class="elevation-1"
        hide-default-header
        :footer-props="{
          showFirstLastPage: true,
          firstIcon: 'mdi-arrow-collapse-left',
          lastIcon: 'mdi-arrow-collapse-right',
          prevIcon: 'mdi-minus',
          nextIcon: 'mdi-plus'
        }"
        @update:pagination="page++"
      >
        <template v-slot:top>
          <v-text-field
            v-model="search"
            label="Search (UPPER CASE ONLY)"
            class="mx-4"
          ></v-text-field>
        </template> 
        <template v-slot:header="{ props: { headers } }">
          <thead class="v-data-table-header">
            <tr>
              <th 
                  v-for="item in headers" 
                  :key="item.value"
                  class="column"
                  :class="[item.sortable ? 'sortable' : '', pagination.sortBy == item.value ? 'active': '', pagination.descending ? 'desc':'asc']"
                  @click="item.sortable ? changeSort(item.value) : ''"
              >
                {{ item.text }}
                <v-icon v-if="item.sortable" class="v-data-table-header__icon" small>mdi-arrow-up</v-icon>
              </th>
            </tr>  
          </thead>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
import Header from '../components/Navigation.vue'
import gql from 'graphql-tag'

export default {
  name: 'Users',
  apollo: {
    accounts: gql`query {
      accounts {
        list
      }
    }
    `
  },
  data() {
    return {
      title: 'Members',
      totalDesserts: 0,
      desserts: [],
      loading: true,
      pagination: {
        sortBy: null,
        descending: false,
        page: 1,
        itemsPerPage: 5
      },
      headers: [
        {
          text: 'E-mail',
          align: 'start',
          sortable: false,
          value: 'name',
          color: 'blue'
        },
        { text: 'Created At', value: 'calories', color: 'green', sortable: true },
      ],
    }
  },
  watch: {
    pagination: {
      handler () {
        this.getDataFromApi()
          .then(data => {
            this.desserts = data.items
            this.totalDesserts = data.total
          })
      },
      deep: true,
    },
  },
  mounted () {
    this.getDataFromApi()
      .then(data => {
        this.desserts = data.items
        this.totalDesserts = data.total
      })
  },
  methods: {
    getDataFromApi () {
      this.loading = true
      return new Promise((resolve) => {
        const { sortBy, descending, page, itemsPerPage } = this.pagination

        let items = this.getDesserts()
        const total = items.length

        if (sortBy) {
          items = items.sort((a, b) => {
            const sortA = a[sortBy]
            const sortB = b[sortBy]

            if (descending) {
              if (sortA < sortB) return 1
              if (sortA > sortB) return -1
              return 0
            } else {
              if (sortA < sortB) return -1
              if (sortA > sortB) return 1
              return 0
            }
          })
        }

        if (itemsPerPage > 0) {
          items = items.slice((page - 1) * itemsPerPage, page * itemsPerPage)
        }

        setTimeout(() => {
          this.loading = false
          resolve({
            items,
            total,
          })
        }, 1000)
      })
    },
    getDesserts () {
      return [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
      ]
    },
    changeSort(column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending;
      } else {
        this.pagination.sortBy = column;
        this.pagination.descending = false;
      }
    },
  },
  components: {
    Header
  },
}
</script>

<style lang='scss' scoped>
.home__page {
  .table__wrapper {
    margin: 0 auto;
    max-width: 50%;

    .v-data-footer {
      display: none !important;
    }
  }
}
</style>