<script>
import AppCard from './AppCard.vue';
export default {
    name: "AppBanner",

    data() {
        return {

        }
    },
    components: {
        AppCard
    },
    methods: {

    }
}
</script>

<template>

    <div class="container-fluid bg">

        <div class="container text-light  py-4">
            <!-- TITLE -->
            <div class="waviy text-center">
                <h1 class="text-center">Find your </h1>
                <span style="--i:9">doctor</span>
            </div>
            <!-- /TITLE -->

            <!-- SEARCH -->
            <div class="ms_container d-flex justify-content-center mt-4 ">
                <form class="d-flex justify-content-center w-50 p-2" role="search">
                    <input class="form-control me-2" type="search" placeholder="Find your Doctor" aria-label="Search">
                    <button class="btn btn-light" type="submit">Search</button>
                </form>
            </div>
            <!-- /SEARCH -->

        </div>


        <div class="d-flex justify-content-around py-4">

            <div class="container">
                <!-- SPECIALIZATIONS -->
                <ul class="nav nav-tabs mb-3">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">All</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#">Cardiologist</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link  text-light" href="#">Oncologist</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link  text-light" href="#">Dermatologist</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link  text-light" href="#">Gynecologist</a>
                    </li>
                </ul>
                <!-- /SPECIALIZATIONS -->


                <AppCard />

            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.bg {
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(25, 70, 172, 1) 0%, rgba(0, 215, 255, 1) 100%);
}


form {
    background-color: rgba(5, 12, 36, 0.1);
    border-radius: 10px;
}

h1 {
    display: inline;
    font-family: 'Alfa Slab One', cursive;
}


@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    background-color: #151719;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.waviy {
    position: relative;

    font-size: 60px;
}

.waviy span {
    font-family: 'Alfa Slab One', cursive;
    position: relative;
    display: inline-block;
    color: #fff;
    text-transform: uppercase;
    animation: waviy 1s infinite;
    animation-delay: calc(.1s * var(--i));

}

@keyframes waviy {

    0%,
    40%,
    100% {
        transform: translateY(0)
    }

    20% {
        transform: translateY(-20px)
    }
}


.card {
    &:hover {
        cursor: pointer;
        transform: scale(1.05);
        transition: 2s;
    }
}
</style>