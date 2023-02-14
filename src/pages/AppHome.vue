<script>

import AppHeader from '../components/AppHeader.vue';
import AppBanner from '../components/AppBanner.vue';
import AppMain from '../components/AppMain.vue';
import AppFooter from '../components/AppFooter.vue';
export default {
    name: 'AppHome',
    data() {
        return {

        }
    },
    components: {
        AppHeader,
        AppBanner,
        AppMain,
        AppFooter
    },
    methods: {

    }
}
</script>

<template>
    <AppHeader />
    <AppBanner />
    <AppMain />
    <AppFooter />

</template>

<style lang="scss">
@use "../styles/general.scss" as *;
</style>