<script>

export default {
    name: 'AppMain',
    data() {
        return {

        }
    }
}
</script>

<template><!-- HOW IT WORKS -->
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
                        <img class="mb-3 max-w" src="../assets/img/send a message.png" alt="">
                        <h4>Send a message</h4>
                        <p>You can easily send a message to a doctor you need by the message section in the doctor page.</p>
                    </div>
                    <!-- book the visit -->
                    <div class="text-center p-4 col-lg-4 col-sm-12 hvr">
                        <img class="mb-3 max-w" src="../assets/img/book a visit.png" alt="">
                        <h4>Book the visit</h4>
                        <p>Once you send a message, the doctor will contact you via email to reserve your visit!</p>
                    </div>
                    <!-- leave a review -->
                    <div class="text-center p-4 col-lg-4 col-sm-12 hvr">
                        <img class="mb-3 max-w" src="../assets/img/send a review.png" alt="">
                        <h4>Leave a review</h4>
                        <p>You can leave a review to a doctor. More reviews you leave, more the system granted an affordable
                            service.</p>
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
                <div class="row align-items-center">
                    <div class="text-center p-4 col-lg-6 col-sm-12 hvr">
                        <img class="mb-3 max-w" src="../assets/img/about us.png" alt="">
                    </div>
                    <div class="text-center col-lg-6 col-sm-12">
                        <p>We are a <b>young</b> and <b>passionate</b> company of web developers named The Code
                            Commanders.Our mission is
                            to <b>create</b> some great and <b>beautiful things</b> that can help people. Our greatest
                            satisfaction is the
                            <b>love</b>
                            and cheer of <b>our customers</b> and partners that grant people health and Psychophisical
                            support.

                        </p>
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
                <div class="row align-items-center">
                    <div class="p-4 col-lg-6 col-sm-12 hvr">
                        <!-- text -->
                        <p>
                            Sign up and reach new patient. <br>
                            More than <b>2 million patients</b> look for their doctor every month on BDoctors, the <b>first
                                site</b>
                            in Italy for <b>visitors</b> and number of <b>bookings</b>.
                        </p>
                        <!-- list -->
                        <p class="mt-3">With BDoctors you can:</p>
                        <ul class="ms-4">
                            <li><b>Receive bookings</b> from new patients</li>
                            <li><b>Improve</b> your <b>online visibility</b> and reputation</li>
                            <li>You have <b>our staff</b> available <b>24/h</b></li>
                        </ul>
                        <!-- register button -->
                        <a href="http://localhost:8000" class="btn btn-light text-primary mt-3">Register</a>
                    </div>

                    <!-- img -->
                    <div class="d-flex justify-content-center p-4 col-lg-6 col-sm-12 hvr">
                        <img class="mb-3 max-w" src="../assets/img/are you a doctor.png" alt="">
                    </div>

                </div>

            </div>

        </div>
    </div>
<!-- /ARE YOU A DOCTOR --></template>

<style lang="scss" scoped>
.max-w {
    max-width: 60%;
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