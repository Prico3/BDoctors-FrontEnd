<script>
import axios from 'axios';
import { store } from "../store";
export default {
    name: "AppDocPage",
    data() {
        return {
            store,
            docData: [],
            docSlug: "",
            myData: "",
            docPhoto: "",
            reviewValue: "",
            reviewText: "",
            userNameValue: "",
            emailValue: "",
            textMessageValue: "",
            userReviewNameValue: "",


        }
    },
    methods: {
        docPageApi() {

            if (this.store.doctorSlug !== "") {
                axios.get(`http://localhost:8000/api/doc/${this.store.doctorSlug}`).then(resp => {
                    this.docData = resp.data.doctor
                    this.docPhoto = this.docData[1].photo


                })

            } else {
                axios.get(`http://localhost:8000/api/doc/${this.myData}`).then(resp => {
                    this.docData = resp.data.doctor
                    console.log(this.docData);
                    this.docPhoto = this.docData[1].photo

                })
            }
        },
        submitFormReview() {
            axios.post(`http://localhost:8000/api/savereview/${this.docData[0].id}`, {
                reviewUsername: this.userReviewNameValue,
                reviewVote: this.reviewValue,
                reviewText: this.reviewText,
            })
                .then(response => {
                    console.log('Successo!', response);
                })
                .catch(error => {
                    console.error('Errore:', error);
                });
        },
        submitFormMessage() {
            axios.post(`http://localhost:8000/api/savemessage/${this.docData[0].id}`, {
                messageUsername: this.userNameValue,
                messageMail: this.emailValue,
                messageText: this.textMessageValue,
            })
                .then(response => {
                    console.log('Successo!', response);
                })
                .catch(error => {
                    console.error('Errore:', error);
                });
        },
        slugCheck() {
            this.docData = this.store.docData

        },
        redeemLocalSave() {
            const savedData = localStorage.getItem('myData');
            if (savedData !== null || savedData !== undefined || savedData !== "") {
                this.myData = JSON.parse(savedData);
                this.docPageApi()
            }
        },
        localSave() {
            if (this.myData == "") {
                localStorage.setItem('myData', JSON.stringify(this.store.doctorSlug));
            } else if (this.store.doctorSlug !== "") {
                this.myData = this.store.doctorSlug
                localStorage.setItem('myData', JSON.stringify(this.myData));
            } else {
            }
        },
        // getNewUrl(path) {

        //     return new URL(`http://localhost:8000/storage/${path}`, import.meta.url).href;
        // }


    },
    created() {
        // this.docPageApi()
        this.slugCheck()
        this.redeemLocalSave()
        this.localSave()
    }
}
</script>

<template>
    <div class="container-fluid bg py-5">
        <div class="container text-light">
            <div class="row">
                <div class="col">
                    <img class="img-thumbnail border border-3" :src="`http://localhost:8000/storage/${docPhoto}`" alt="">
                </div>

                <div class="col">
                    <h2>{{ docData[0].name }} {{ docData[0].surname }}</h2>
                    <h4> Specialization:</h4>
                    <ul>
                        <li v-for="(spec, index) in docData[2]" :key="index">
                            {{ spec }}
                        </li>
                    </ul>
                    <h4>Studio address: {{ docData[0].address }}</h4>
                </div>
            </div>
            <hr>
        </div>

        <!-- FORMS -->
        <div class="container-fluid">
            <div class="container text-light">
                <div class="row justify-content-between">
<<<<<<< HEAD
                    <!-- RATE EXPERIENCE -->
                    <form @submit.prevent="reviewForm" method="POST" class="col-5 bg-col">
                        <h2>Rate your experience</h2>
=======
                    <div class="col-5 bg-col">
                        <h2 class="p-1">Rate your experience</h2>
>>>>>>> f4b471585bb64f3a8f272265d2e0275eeec620d9
                        <div class="form-check">
                            <div class="mb-2">
                                <input type="userName" class="form-control" id="exampleInputEmail1"
                                    placeholder="Name and Surname" v-model="userReviewNameValue">
                            </div>
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="1"
                                v-model="reviewValue">
                            <label class="form-check-label" for="exampleRadios1">
                                <i class="fa-solid fa-star"></i>
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="2"
                                v-model="reviewValue">
                            <label class="form-check-label" for="exampleRadios2">
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="3"
                                v-model="reviewValue">
                            <label class="form-check-label" for="exampleRadios3">
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                                    class="fa-solid fa-star"></i>
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="4"
                                v-model="reviewValue">
                            <label class="form-check-label" for="exampleRadios3">
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                                    class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="5"
                                v-model="reviewValue">
                            <label class="form-check-label" for="exampleRadios3">
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                                    class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                                    class="fa-solid fa-star"></i>
                            </label>
                        </div>

                        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Write here a review..."
<<<<<<< HEAD
                            rows="2" v-model="reviewText"></textarea>
                        <button type="submit" class="btn btn-success mt-2" @click="submitFormReview()">Submit</button>
                    </form>
                    <!-- /RATE EXPERIENCE -->

                    <!-- SEND MESSAGE -->
                    <div class="col-5 bg-col">
                        <h2>Book your visit</h2>
                        <form class="form" @submit.prevent="messageForm">
                            <div class="mb-2">
                                <input type="userName" class="form-control" id="" placeholder="Name and Surname"
                                    v-model="userNameValue">
                            </div>
=======
                            rows="2"></textarea>
                        <button type="submit" class="btn btn-success mt-2 mb-2">Submit</button>
                    </div>
                    <div class="col-5 bg-col">
                        <h2 class="p-1">Book your visit</h2>
                        <div class="form">
>>>>>>> f4b471585bb64f3a8f272265d2e0275eeec620d9

                            <label for="exampleFormControlInput1" class="form-label"></label>
                            <input type="email" class="form-control" id="exampleFormControlInput1"
                                placeholder="name@example.com" v-model="emailValue">

                            <div class="mb-2">
                                <label for="exampleFormControlTextarea1" class="form-label"></label>
                                <textarea class="form-control" id="exampleFormControlTextarea1"
                                    placeholder="Write your requests here..." rows="5"
                                    v-model="textMessageValue"></textarea>
                            </div>
                            <div class="d-flex justify-content-end">
<<<<<<< HEAD
                                <button type="submit" class="btn btn-success" @click="submitFormMessage()">Submit</button>
=======
                                <button type="submit" class="btn btn-success  mb-2">Submit</button>
>>>>>>> f4b471585bb64f3a8f272265d2e0275eeec620d9
                            </div>
                        </form>

                    </div>
                    <!-- /SEND MESSAGE -->

                </div>

            </div>
        </div>

        <!-- REVIEWS -->
        <div class="container text-light mt-5 py-3 bg-col">
            <h4 class="p-1">Reviews from other users</h4>
            <div class="review-container">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" v-for="(review, id) in docData.review" :key="id">
                        <p> <i class="fa-solid fa-star"></i> {{ review.vote }} from: {{ review.username }}</p>
                        <p> {{ review.text }}</p>

                    </li>

                </ul>
            </div>

        </div>
        <!-- /REVIEWS -->



        <div class="container bg-w rounded-2 w-50 mt-5 text-center text-primary p-4">
            <img :src="`http://localhost:8000/storage/${docPhoto}`" alt="">
            <h4>dati</h4>
            <h4>dati</h4>
            <h4>dati</h4>
        </div>




        <div class="container-fluid bg-w mt-5 d-flex justify-content-between">

        </div>

    </div>
</template>

<style lang="scss" scoped>
.bg {
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(25, 70, 172, 1) 0%, rgba(0, 215, 255, 1) 100%);
}

.ms_container {
    margin: 0 auto;
}

.bg-w {
    background-color: white;

}

i {
    color: gold;
}

.review-container {
    height: 400px;
    overflow: auto;
    border-radius: 10px;

}

::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

.bg-col {
    border-radius: 10px;
    background-color: rgba(5, 12, 36, 0.4);

}
</style>