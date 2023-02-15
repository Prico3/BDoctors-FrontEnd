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
            detailsDoc: this.doctor.slug
        }
    },
    methods: {
        functionDoc() {
            console.log(this.doctor);
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
    <div class="row ">
        <div class="text-center">
            <!-- CARD -->

            <div class="card">
                <!-- star - reviews  -->
                <a class="special ms_btn px-2" href="">
                    <i class="fa-solid fa-star"></i>
                    {{ doctor.mediaVote }}
                </a>

                <!-- profile photo -->
                <img v-if="doctor.photo" :src="doctor.photo" alt="">

                <div class="card-body">
                    <!-- doctor name -->
                    <h5 class="card-title">{{ doctor.name }}</h5>
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
                    <router-link to="doc" @click="showDoc" class="card-link docPage">See details</router-link>
                </div>
            </div>
            <!-- /CARD -->

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