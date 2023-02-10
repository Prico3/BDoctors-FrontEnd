<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppBanner from './components/AppBanner.vue';
import AppMain from './components/AppMain.vue';
export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    AppHeader,
    AppBanner,
    AppMain
  },
  methods: {

  }
}
</script>

<template>
  <AppHeader />
  <AppBanner />
  <AppMain />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
