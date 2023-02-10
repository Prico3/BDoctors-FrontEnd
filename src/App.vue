<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    AppHeader
  },
  methods: {

  }
}
</script>

<template>
  <AppHeader />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
