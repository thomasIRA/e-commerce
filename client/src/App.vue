<template>
  <div class="bg-main-200 min-h-screen">
    <div class="max-w-screen-lg mx-auto p-3 text-text text-dark">
      <MainNav :toggle="toggleSideBar" :qty="totalQty"/>
      <RouterView :inventory="inventory" :add="addToCart"/>
      <MainFooter/>
      <SideBar v-if="showSideBar" :toggle="toggleSideBar" :cart="cart" :inventory="inventory" :remove="removeFromCart"/>
    </div>
  </div>
</template>

<script>
import MainFooter from '@/components/MainFooter.vue'
import SideBar from '@/components/SideBar.vue'
import MainNav from './components/MainNav.vue'
import ProductDataService from '@/services/ProductDataService.js'
export default {
  components: {
    MainFooter,
    SideBar,
    MainNav
  },
  mounted () {
    ProductDataService.getAll()
      .then(res => { this.inventory = res.data })
  },
  data () {
    return {
      showSideBar: false,
      inventory: [],
      cart: {}
    }
  },
  methods: {
    toggleSideBar () {
      this.showSideBar = !this.showSideBar
    },
    addToCart (product, index) {
      console.log(product.qty)
      if (!this.cart[product]) this.cart[product] = 0
      if (isNaN(this.inventory[index].qty)) this.inventory[index].qty = 1
      this.cart[product] += this.inventory[index].qty
    },
    removeFromCart (name) {
      delete this.cart[name]
    }
  },
  computed: {
    totalQty () {
      return Object.values(this.cart).reduce((acc, curr) => {
        return acc + curr
      }, 0)
    }
  }
}
</script>
