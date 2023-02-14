<script>
import { store } from "./store";


export default {
  name: 'App',
  data() {
    return {
      store
    }
  },
  components: {

  },
  methods: {

  }
}
</script>

<template>
  <router-view></router-view>

</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
