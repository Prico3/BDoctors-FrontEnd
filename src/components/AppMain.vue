<script>

export default {
    name: 'AppMain',
    data() {
        return {

        }
    }
}
</script>

<template>

    <!-- HOW IT WORKS -->
    <div id="how-it-works" class="container-fluid bg">
        <div class="container py-5">
            <!-- <h2 class="text-center fts">How it Works?</h2> -->

            <!-- title -->
            <div class="waviy text-center">
                <h2 class="text-center">How it </h2>
                <span style="--i:9">Works</span>
            </div>



            <div class="d-flex justify-content-around">
                <div class="row">
                    <!-- send a message -->
                    <div class="text-center p-4 col-lg-4 col-sm-12 hvr">
                        <img class="mb-3" src="../assets/img/send a message.png" alt="">
                        <h5>Send a message</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat odio officiis id voluptatum
                            magnam, tempora facere esse nam inventore? Vitae voluptatibus qui officiis voluptates
                            praesentium? Autem illum impedit officiis iste.</p>
                    </div>
                    <!-- book the visit -->
                    <div class="text-center p-4 col-lg-4 col-sm-12 hvr">
                        <img class="mb-3" src="../assets/img/book a visit.png" alt="">
                        <h5>Book the visit</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, totam repudiandae? Esse
                            nostrum,
                            incidunt illum atque omnis facilis dolorem sapiente provident, minus voluptatum iusto in
                            modi
                            minima nobis iure! Vel!</p>
                    </div>
                    <!-- leave a review -->
                    <div class="text-center p-4 col-lg-4 col-sm-12 hvr">
                        <img class="mb-3" src="../assets/img/send a review.png" alt="">
                        <h5>Leave a review</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sit doloribus eius dolore
                            magni
                            dolor tempora ipsum incidunt enim? Praesentium, sequi dolor. Beatae a porro deleniti officia
                            reprehenderit ad optio.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <!-- /HOW IT WORKS -->


    <!-- ABOUT US -->
    <div id="about-us" class="container-fluid bg2">
        <div class="container py-5">
            <!-- title -->
            <div class="waviy text-center">
                <h2 class="text-center">About </h2>
                <span style="--i:9">Us</span>
            </div>

            <div class="d-flex justify-content-around">
                <div class="row">
                    <div class="d-flex text-center p-4 col-lg-12 col-sm-12 hvr">
                        <img class="mb-3" src="../assets/img/consultazione-sito.svg" alt="">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat odio officiis id voluptatum
                            magnam, tempora facere esse nam inventore? Vitae voluptatibus qui officiis voluptates
                            praesentium? Autem illum impedit officiis iste.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /ABOUT US -->

    <!-- ARE YOU A DOCTOR -->
    <div class="container-fluid bg">
        <div class="container py-5">
            <!-- title -->
            <div class="waviy text-center">
                <h2 class="text-center">Are you a </h2>
                <span style="--i:9">Doctor?</span>
            </div>

            <div class="d-flex justify-content-around">
                <div class="row">
                    <div class="p-4 col-lg-6 col-sm-6 hvr">
                        <!-- text -->
                        <p>
                            Sign up and reach new patient. <br>
                            More than 2 million patients look for their doctor every month on BDoctors, the first site
                            in Italy for visitors and number of bookings.
                        </p>
                        <!-- list -->
                        <p class="mt-3">With BDoctors you can:</p>
                        <ul class="ms-4">
                            <li>Receive bookings from new patients</li>
                            <li>Improve your online visibility and reputation</li>
                            <li>You have our staff always available to help you</li>
                        </ul>
                        <!-- register button -->
                        <a href="http://localhost:8000" class="btn btn-light text-primary mt-3">Register</a>
                    </div>

                    <!-- img -->
                    <div class="d-flex justify-content-center p-4 col-lg-6 col-sm-6 hvr">
                        <img class="mb-3" src="../assets/img/doctor-1-removebg-preview.png" alt="">
                    </div>

                </div>

            </div>

        </div>
    </div>
    <!-- /ARE YOU A DOCTOR -->


</template>

<style lang="scss" scoped>
img {
    max-width: 150px;
}

.bg {
    background: rgb(2, 0, 36);
    background: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(255, 255, 255, 1) 0%, rgba(67, 166, 255, 1) 100%);
}

.bg2 {

    background: rgb(2, 0, 36);
    background: linear-gradient(0deg, rgba(2, 0, 36, 1) 0%, rgba(255, 255, 255, 1) 0%, rgba(67, 166, 255, 1) 100%);
}

h2 {
    display: inline;
    color: rgba(25, 70, 172, 1)
}

.hvr {
    &:hover {
        transform: scale(1.05);
        transition: 2s;
    }
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
    color: rgba(25, 70, 172, 1);
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
</style>