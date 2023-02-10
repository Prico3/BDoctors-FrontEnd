<script>
export default {
    name: "AppBanner"
}
</script>

<template>
    <div class="container-fluid bg-primary">

        <div class="container text-light bg-primary  py-4">

            <h1 class="text-center">Find your Doctor</h1>

            <div class="ms_container d-flex justify-content-center mt-4 ">
                <form class="d-flex justify-content-center w-50 p-2" role="search">
                    <input class="form-control me-2" type="search" placeholder="Find your Doctor" aria-label="Search">
                    <button class="btn btn-light" type="submit">Search</button>
                </form>
            </div>

        </div>


        <div class="d-flex justify-content-around py-4">
            <div class="container">
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
                <div class="row g-5">
                    <div class="text-center   col-lg-4 col-md-6 col-sm-12">
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
            </div>

        </div>

    </div>
</template>

<style>
form {
    background-color: rgba(5, 12, 36, 0.1);
    border-radius: 10px;
}
</style>