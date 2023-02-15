<script>

import AppBanner from '../components/AppBanner.vue';
import AppMain from '../components/AppMain.vue';
export default {
    name: 'AppHome',
    data() {
        return {

        }
    },
    components: {
        AppBanner,
        AppMain,
    },
    methods: {

    }
}
</script>

<template>

    <AppBanner />
    <AppMain />


</template>

<style lang="scss">
@use "../styles/general.scss" as *;
</style>