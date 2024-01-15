<template>
  <div class="bg-main-200 min-h-screen">
    <div class="max-w-screen-lg mx-auto p-3 text-text text-dark">
      <MainNav :toggle="toggleSideBar"/>
      <RouterView :inventory="inventory"/>
      <MainFooter/>
      <SideBar v-if="showSideBar" :toggle="toggleSideBar" :cart="cart"/>
    </div>
  </div>
</template>

<script>
import MainFooter from '@/components/MainFooter.vue'
import SideBar from '@/components/SideBar.vue'
import MainNav from './components/MainNav.vue'
import products from '@/data/products.json'
export default {
  components: {
    MainFooter,
    SideBar,
    MainNav
  },
  data () {
    return {
      showSideBar: false,
      inventory: products,
      cart: {}
    }
  },
  methods: {
    toggleSideBar () {
      this.showSideBar = !this.showSideBar
    }
  }
}
</script>
