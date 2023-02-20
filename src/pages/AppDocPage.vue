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
            docPDF: "",
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
                    console.log(this.docData);
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

        docPdfApi() {

            if (this.store.doctorSlug !== "") {
                axios.get(`http://localhost:8000/api/doc/${this.store.doctorSlug}`).then(resp => {
                    //this.docData = resp.data.doctor
                    console.log(this.docData);
                    this.docPDF = this.docData[1].curriculum_vitae;

                })

            } else {
                axios.get(`http://localhost:8000/api/doc/${this.myData}`).then(resp => {
                    //this.docData = resp.data.doctor
                    console.log(this.docData);
                    this.docPDF = this.docData[1].curriculum_vitae;

                })
            }



        },

        submitFormMessage() {
            axios.post(`http://localhost:8000/api/savemessage/${this.docData[1].id}`, {
                messageUsername: this.userNameValue,
                messageMail: this.emailValue,
                messageText: this.textMessageValue,
                
            })
                .then(response => {
                    console.log('Successo!', response);
                    this.userNameValue = "";
                    this.emailValue ="";
                    this.textMessageValue = "";
                })
                .catch(error => {
                    console.error('Errore:', error);
                });
        },

        submitFormReview() {
            const reviewIntValue = parseInt(this.reviewValue);
            console.log(reviewIntValue, "REVIEW VALUE");
            axios.post(`http://localhost:8000/api/savereview/${this.docData[1].id}`, {
                reviewUsername: this.userReviewNameValue,
                reviewVote: reviewIntValue,
                reviewText: this.reviewText,
            })
                .then(response => {
                    console.log('Successo!', response);
                    this.userReviewNameValue ="";
                    this.reviewValue = "";
                    this.reviewText = "";

                })
                .catch(error => {
                    console.error('Errore:', error);
                });
        },

        slugCheck() {
            this.docData = this.store.docData
            console.log(this.docData, "ehi ehi ehi");

        },
        redeemLocalSave() {
            const savedData = localStorage.getItem('myData');
            if (savedData !== null || savedData !== undefined || savedData !== "") {
                this.myData = JSON.parse(savedData);
                this.docPageApi();
                this.docPdfApi();
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
                    <!-- <img class="img-thumbnail border border-3" :src="`http://localhost:8000/storage/${docPhoto}`" alt=""> -->
                    <img v-if="`${docPhoto}`" :src="`http://localhost:8000/storage/${docPhoto}`" class="img-thumbnail"
                        alt="">
                    <img v-else src="../assets/img/no-photo.png" class="img-fluid" alt="">
                </div>

                <div class="col bg-col">
                    <h2 class="text-center"><b>{{ docData[0].name }} {{ docData[0].surname }}</b></h2>
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
                    <!-- RATE EXPERIENCE -->
                    <div class="col-5 bg-col">
                        <h2>Rate your experience</h2>
                        <form @submit.prevent="submitFormReview()">


                            <div class="mb-2">
                                <input type="userName" class="form-control" id="exampleInputEmail1"
                                required placeholder="Name and Surname" v-model="userReviewNameValue">
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                                required value="1" v-model="reviewValue">
                                <label class="form-check-label" for="exampleRadios1">
                                    <i class="fa-solid fa-star"></i>
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
                                required value="2" v-model="reviewValue">
                                <label class="form-check-label" for="exampleRadios2">
                                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3"
                                required value="3" v-model="reviewValue">
                                <label class="form-check-label" for="exampleRadios3">
                                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                                        class="fa-solid fa-star"></i>
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4"
                                required value="4" v-model="reviewValue">
                                <label class="form-check-label" for="exampleRadios4">
                                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                                        class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios5"
                                required value="5" v-model="reviewValue">
                                <label class="form-check-label" for="exampleRadios5">
                                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                                        class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                                        class="fa-solid fa-star"></i>
                                </label>
                            </div>

                            <textarea class="form-control" id="reviewText" placeholder="Write here a review..." rows="2"
                            required v-model="reviewText"></textarea>
                            <button type="submit" class="btn btn-success mt-2">Submit</button>
                        </form>
                    </div>
                    <!-- /RATE EXPERIENCE -->

                    <!-- SEND MESSAGE -->
                    <div class="col-5 bg-col">
                        <h2>Book your visit</h2>
                        <form class="form" @submit.prevent="submitFormMessage()">
                            <div class="mb-3">
                                <input type="userName" class="form-control" id="" placeholder="Name and Surname"
                                required v-model="userNameValue">
                            </div>


                            <div class="mb-3">
                                <input type="email" class="form-control" id="exampleFormControlInput1"
                                required placeholder="your@mail.com" v-model="emailValue">
                            </div>
                            <div class="mb-3">

                                <textarea class="form-control" id="message-text" placeholder="Write your requests here..."
                                required rows="5" v-model="textMessageValue"></textarea>
                            </div>
                            <div class="d-flex justify-content-end">
                                <button type="submit" class="btn btn-success">Submit</button>
                            </div>
                        </form>

                    </div>
                    <!-- /SEND MESSAGE -->

                </div>

            </div>
        </div>

        <!-- REVIEWS -->
        <div class="container text-light mt-5 py-3 bg-col text-center">
            <h2 class="p-1">Reviews from other users</h2>
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



        <div class="container text-light mt-5 py-3 bg-col">
            <h2>Curriculum Vitae</h2>
            <div class="row">
                <div class="col">
                    <embed class="curriculum" :src="`http://localhost:8000/storage/${docPDF}`" type="application/pdf"
                        id="curriculum_preview" alt="pdf-curriculum" />
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

.curriculum {

    height: 500px;
    width: 100%;
}
</style>