<script>
import axios from 'axios';
import { store } from "../store";
import AppCard from './AppCard.vue';
export default {
    name: "AppBanner",

    data() {
        return {
            docData: [],
            docSpecs: [],
            newDocArray: [],
            searchDoc: "",
            store,
            specId: "",
            mediaVote: false,
            review: false,
        }
    },
    components: {
        AppCard
    },
    methods: {
        // getDoctors() {
        //     axios
        //         .get('http://localhost:8000/api/doc')
        //         .then(resp => {
        //             this.docData = resp.data.doctors; console.log(this.docData);
        //         });
        // },
        filteredDoc() {
            return this.docData.filter(item => {
                console.log('ciao');
                return item.name.toLowerCase().includes(this.searchDoc.toLowerCase())
            })
        },
        getSpecs() {
            axios
                .get('http://localhost:8000/api/spec')
                .then(resp => {
                    console.log(resp)
                    this.docSpecs = resp.data.specs[0];
                    console.log(this.docSpecs = resp.data.specs[0]);
                });
        },
        saveSpec(spec) {
            this.specId = "";
            this.specId = spec;
            this.specializationApi();

        },
        specializationApi() {
            if (this.mediaVote) {
                //ORDINATI IN BASE ALLA MEDIA DI RECENSIONE
                axios
                    .get(`http://localhost:8000/api/doc/spec/${this.specId}`)
                    .then(resp => {
                        this.docData = [];
                        this.docData = resp.data;
                        const combinedArray = Object.values(this.docData).reduce((acc, curr) => acc.concat(curr), []);
                        combinedArray.sort((a, b) => b.mediaVote - a.mediaVote);
                        this.docData = combinedArray;
                        console.log(combinedArray, "mememedia");
                        console.log(this.docData, "ciaoooo");
                        console.log(resp.data);
                    })
            } else if (this.review) {
                //ORDINATI IN BASE AL NUMERO DI REVIEW
                axios
                    .get(`http://localhost:8000/api/doc/spec/${this.specId}`)
                    .then(resp => {
                        this.docData = [];
                        this.docData = resp.data;
                        const combinedArray = Object.values(this.docData).reduce((acc, curr) => acc.concat(curr), []);
                        combinedArray.sort((a, b) => b.numReviews - a.numReviews);
                        this.docData = combinedArray;
                        console.log(combinedArray, "c-c-combined");
                        console.log(this.docData, "ciaoooo");
                    })
            } else {
                axios
                    .get(`http://localhost:8000/api/doc/spec/${this.specId}`)
                    .then(resp => {
                        this.docData = [];
                        this.docData = resp.data;
                        console.log(resp.data);
                    })
            }
        },
        nameSearch() {
            if (!this.searchDoc == "") {
                this.newDocArray = []
                this.docData.forEach(item => {
                    let nameArray = item.name.toLowerCase().split('');
                    let searchArray = this.searchDoc.toLowerCase().split('');
                    let surnameArray = item.surname.toLowerCase().split('');
                    let isNameMatched = true;
                    let isSurnameMatched = true;
                    for (let i = 0; i < searchArray.length; i++) {
                        if (nameArray[i] !== searchArray[i]) {
                            isNameMatched = false;
                            break;
                        }
                    }
                    for (let i = 0; i < searchArray.length; i++) {
                        if (surnameArray[i] !== searchArray[i]) {
                            isSurnameMatched = false;
                            break;
                        }
                    }
                    if (isNameMatched || isSurnameMatched) {
                        if (!this.newDocArray.includes(item)) {
                            this.newDocArray.push(item);
                        }
                    }
                });
            }
        },
        getInputMediaVote() {
            if (this.mediaVote) {
                this.mediaVote = !this.mediaVote
                this.specializationApi()
            } else {
                this.mediaVote = !this.mediaVote
                this.specializationApi()
            }
            console.log(this.mediaVote);
        },
        getInputReview() {
            if (this.review) {
                this.review = !this.review
                this.specializationApi()
            } else {
                this.review = !this.review
                this.specializationApi()
            }
            console.log(this.review);
        }
    },

    created() {
        // this.getDoctors()
        this.getSpecs()
    },
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
                <form @submit.prevent="filteredDoc()" action="" class="d-flex justify-content-center w-50 p-2"
                    role="search">
                    <input class="form-control me-2" type="search" v-model="searchDoc" placeholder="Find your Doctor"
                        aria-label="Search">
                    <button href="" class="btn btn-light" type="submit" @click="nameSearch()">Search</button>
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
                    <li v-for="(spec, index) in docSpecs" :key="index" class="nav-item">
                        <a class="nav-link text-light" href="#" @click="saveSpec(spec.id)">{{
                            spec.name
                        }}</a>
                    </li>
                </ul>
                <!-- /SPECIALIZATIONS -->

                <!-- CHECKBOX -->
                <form action="specializationApi">
                    <div class="form-check form-switch">
                        <input @click="getInputMediaVote()" class="form-check-input" type="checkbox" role="switch"
                            id="flexSwitchCheckDefault">
                        <label class="form-check-label" for="flexSwitchCheckDefault">Media Vote
                        </label>
                    </div>
                    <div class="form-check form-switch">
                        <input @click="getInputReview()" class="form-check-input" type="checkbox" role="switch"
                            id="flexSwitchCheckChecked">
                        <label class="form-check-label" for="flexSwitchCheckChecked">Reviews Number
                        </label>
                    </div>
                </form>
                <!-- /CHECKBOX -->



                <div class="row">

                    <div class="col-lg-4 col-md-6 col-sm-12" v-for="(doc, index) in docData" :key="index">

                        <AppCard :doctor="doc" />

                    </div>

                </div>

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