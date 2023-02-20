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

    },
    mounted() {
        // $('.dropdown-toggle').dropdown();
    }
}
</script>

<template>
    <header>
        <!-- NAVBAR -->
        <nav class="navbar navbar-expand-lg bg">
            <div class="container-fluid">
                <div class="d-flex align-items-center">
                    <img src="../assets/img/logo-removebg-preview.png" alt="">
                    <router-link to="/" class="navbar-brand text-light fs-1 hvr" href="#">BDoctors</router-link>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-end">
                        <ul class="navbar-nav">
                            <li class="nav-item me-4 d-flex">
                                <a href="http://localhost:8000" class="btn btn-light text-primary mt-2">Login</a>
                            </li>
                            <li class="nav-item me-4">
                                <a href="http://localhost:8000/register"
                                    class="btn btn-light text-primary mt-2">Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>




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

img {
    max-width: 50px;
    max-height: 50px;
}
</style>