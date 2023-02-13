<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            // navigation: [
            //     {
            //         label: 'Home',
            //         routeName: 'home'
            //     },
            //     {
            //         label: 'About us',
            //         routeName: 'about'
            //     },
            //     {
            //         label: 'Blog',
            //         routeName: 'blog'
            //     }
            // ]
        }
    }
}
</script>

<template>
    <header>
        <!-- NAVBAR -->
        <nav class="navbar  navbar-expand-lg bg">

            <!-- LOGO -->
            <div class="container-fluid">
                <a class="navbar-brand text-light fs-1 hvr" href="#">BDoctors</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <!-- LOGO -->


            <!-- <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="(navItem, index) in navigation" :key="index">
                        <router-link :to="{ name: navItem.routeName }" class="nav-link" aria-current="page">{{
                            navItem.label
                        }}</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="http://localhost:8000/admin">Login</a>
                    </li>
                </ul>
            </div> -->

            <!-- BUTTONS -->
            <div class="collapse navbar-collapse " id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item me-4">
                        <a href="http://localhost:8000" class="btn btn-light text-primary">Login</a>
                    </li>
                    <li class="nav-item me-4">
                        <a href="http://localhost:8000/register" class="btn btn-light text-primary">Register</a>
                    </li>
                </ul>
            </div>
            <!-- /BUTTONS -->


        </nav>
        <!-- /NAVBAR -->

    </header>
</template>

<style lang="scss" scoped>
.bg {
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(25, 70, 172, 1) 0%, rgba(0, 215, 255, 1) 100%);
}

.hvr {
    &:hover {
        transform: scale(1.1);
        transition: 2s;
    }
}
</style>