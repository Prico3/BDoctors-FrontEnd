<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppBanner from './components/AppBanner.vue';
export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    AppHeader,
    AppBanner
  },
  methods: {

  }
}
</script>

<template>
  <AppHeader />
  <AppBanner />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
