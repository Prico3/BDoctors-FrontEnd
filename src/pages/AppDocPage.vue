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
                <div class="row">
                    <div class="col">
                        <h2>Rate your experience</h2>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                                value="option1" checked>
                            <label class="form-check-label" for="exampleRadios1">
                                <i class="fa-solid fa-star"></i>
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
                                value="option2">
                            <label class="form-check-label" for="exampleRadios2">
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3"
                                value="option3">
                            <label class="form-check-label" for="exampleRadios3">
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                                    class="fa-solid fa-star"></i>
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3"
                                value="option3">
                            <label class="form-check-label" for="exampleRadios3">
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                                    class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3"
                                value="option3">
                            <label class="form-check-label" for="exampleRadios3">
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                                    class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                                    class="fa-solid fa-star"></i>
                            </label>
                        </div>
                        <label for="exampleFormControlTextarea1" class="form-label"></label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Write here a review..."
                            rows="3"></textarea>
                        <button type="submit" class="btn btn-success mt-3">Submit</button>
                    </div>
                    <div class="col">
                        <h2>Book your visit</h2>
                        <div class="form">
                            <div class="">
                                <label for="exampleFormControlInput1" class="form-label"></label>
                                <input type="email" class="form-control" id="exampleFormControlInput1"
                                    placeholder="name@example.com">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label"></label>
                                <textarea class="form-control" id="exampleFormControlTextarea1"
                                    placeholder="Write your requests here..." rows="6"></textarea>
                            </div>
                            <div class="d-flex justify-content-end">
                                <button type="submit" class="btn btn-success">Submit</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>


        <h4>Review</h4>
        <ul>
            <li v-for="(review, id) in docData.review" :key="id">

                <p> <span>{{ review.vote }}</span> {{ review.text }}</p>
            </li>
        </ul>

        <div class="container bg-w rounded-2 w-50 mt-5 text-center text-primary p-4">
            <h4>{{ docData[1].curriculum_vitae }}</h4>
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
</style>