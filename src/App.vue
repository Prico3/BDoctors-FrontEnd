<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import { store } from "./store";


export default {
  name: 'App',
  data() {
    return {
      store
    }
  },
  components: {
    AppHeader,
    AppFooter
  },
  methods: {

  }
}
</script>

<template>
  <AppHeader />
  <router-view></router-view>
  <AppFooter />

</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
