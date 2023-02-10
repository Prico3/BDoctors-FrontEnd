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
        <nav class="navbar  navbar-expand-lg  bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand text-light" href="#">BDoctors</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
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

            <div class="collapse navbar-collapse " id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item me-4">
                        <a href="" class="btn btn-light text-primary">Login</a>
                    </li>
                    <li class="nav-item me-4">
                        <a href="" class="btn btn-light text-primary">Register</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>