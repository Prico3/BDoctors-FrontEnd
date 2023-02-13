<script>
export default {
    name: "AppCard"
}
</script>

<template>
    <div class="row g-5">
        <div class="text-center col-lg-4 col-md-6 col-sm-12">
            <!-- CARD -->
            <div class="card">
                <!-- star - reviews  -->
                <a class="special ms_btn px-2" href="">
                    <i class="fa-solid fa-star"></i>
                    5.0
                </a>

                <!-- profile photo -->
                <img src="../assets/img/doctor.jpg" class="card-img-top" alt="...">

                <div class="card-body">
                    <!-- doctor name -->
                    <h5 class="card-title">Doctor Name</h5>
                    <!-- doctor address -->
                    <p class="card-text">Address</p>
                </div>

                <ul class="list-group list-group-flush">
                    <!-- specialization -->
                    <li class="list-group-item">Specialization</li>

                </ul>

                <div class="card-body">
                    <!-- send message -->
                    <a href="#" class="card-link">Send a Message</a>
                    <!-- send reviews -->
                    <a href="#" class="card-link">Send Reviews</a>

                </div>
            </div>
            <!-- /CARD -->

        </div>

        <div class="text-center  col-lg-4 col-md-6 col-sm-12 ">
            <div class="card">
                <img src="../assets/img/doctor.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Doctor Name</h5>
                    <p class="card-text">Address</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Specialization</li>

                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Send a Message</a>
                    <a href="#" class="card-link">See Reviews</a>
                </div>
            </div>
        </div>

        <div class="text-center  col-lg-4 col-md-6 col-sm-12">
            <div class="card">
                <img src="../assets/img/doctor.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Doctor Name</h5>
                    <p class="card-text">Address</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Specialization</li>

                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Send a Message</a>
                    <a href="#" class="card-link">See Reviews</a>
                </div>
            </div>
        </div>

        <div class="text-center  col-lg-4 col-md-6 col-sm-12">
            <div class="card">
                <img src="../assets/img/doctor.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Doctor Name</h5>
                    <p class="card-text">Address</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Specialization</li>

                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Send a Message</a>
                    <a href="#" class="card-link">See Reviews</a>
                </div>
            </div>
        </div>

        <div class="text-center  col-lg-4 col-md-6 col-sm-12">
            <div class="card">
                <img src="../assets/img/doctor.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Doctor Name</h5>
                    <p class="card-text">Address</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Specialization</li>

                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Send a Message</a>
                    <a href="#" class="card-link">See Reviews</a>
                </div>
            </div>
        </div>

        <div class="text-center  col-lg-4 col-md-6 col-sm-12">
            <div class="card">
                <img src="../assets/img/doctor.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Doctor Name</h5>
                    <p class="card-text">Address</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Specialization</li>

                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Send a Message</a>
                    <a href="#" class="card-link">See Reviews</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
a {
    text-decoration: none;
}

.special {
    color: gold;
    text-align: start;
    margin-top: 1rem;
    position: absolute;
    z-index: 999;
}

.ms_btn {
    background-color: lightgoldenrodyellow;
    border-radius: 10px;

}

img {
    position: relative;
}

.card {
    &:hover {
        cursor: pointer;
        transform: scale(1.05);
        transition: 2s;
    }
}
</style>