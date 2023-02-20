<script>
import { store } from "../store";



export default {
    name: "AppCard",
    props: {
        doctor: Object
    },
    data() {
        return {
            store,
            detailsDoc: this.doctor.slug,
            docPhoto: "",
        }
    },
    methods: {
        functionDoc() {
            console.log(this.doctor, "doctor");

        },
        showDoc() {
            this.store.doctorSlug = this.detailsDoc
        },
    },
    created() {
        this.functionDoc()

    }

}

</script>

<template>
    <div class="row  g-4">
        <div class="text-center">
            <div class="ms_div" :class="[doctor.sponsorized ? 'sponsored' : '']">
                <!-- CARD -->
                <div class="card">
                    <!-- star - reviews  -->
                    <p class="special ms_btn px-2" href="">
                        <i class="fa-solid fa-star"></i>
                        {{ doctor.mediaVote }}
                    </p>

                    <p class="special-2 ms_btn-2 px-2" href="">
                        <i class="fa-solid fa-comment-dots"></i>
                        {{ doctor.numReviews }}
                    </p>
                    <!-- <span>{{ doctor.numReviews }}</span> -->
                    <div class="img-wrapper">
                        <!-- profile photo -->
                        <img v-if="doctor.photo" :src="`http://localhost:8000/storage/${doctor.photo}`" alt="">
                        <img v-else src="../assets/img/doctor-1-removebg-preview.png" alt="">
                    </div>

                    <div class="card-body">
                        <!-- doctor name -->
                        <h5 class="card-title">{{ doctor.name }} {{ doctor.surname }}</h5>
                        <!-- doctor address -->
                        <p class="card-text">{{ doctor.studio_address }}</p>
                    </div>

                    <ul class="list-group list-group-flush">
                        <!-- specialization -->
                        <li class="list-group-item">{{ doctor.specialization }}</li>

                    </ul>

                    <div class="card-body">
                        <!-- send message -->
                        <!-- <a href="#" class="card-link">Send a Message</a> -->
                        <!-- send reviews -->
                        <!-- <a href="#" class="card-link">Send Reviews</a> -->
                        <!-- see more details -->
                        <router-link to="doc" @click="showDoc" class="card-link btn btn-primary docPage">See
                            details</router-link>
                    </div>
                </div>
                <!-- /CARD -->
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

.special-2 {
    color: lightgreen;
    text-align: end;
    margin-top: 1rem;
    position: absolute;
    right: 0;
    z-index: 999;
}

.ms_btn {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 0 10px 10px 0;


}

.ms_btn-2 {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px 0 0 10px;

}

.img-wrapper {

    img {
        position: relative;
        border-radius: 5px;
        max-width: 100%;

    }
}

.card {
    &:hover {
        cursor: pointer;
        transform: scale(1.05);
        transition: 2s;
    }

    border: none;
    border-radius: 10px;

    // &.div-photo {
    //     max-width: 200px;
    // }
}

.sponsored {

    border: 20px solid rgb(255, 215, 0, 0.8);
    border-radius: 15px;
    background-color: rgb(255, 215, 0, 0.8);



}
</style>