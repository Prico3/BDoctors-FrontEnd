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
        }
    },
    methods: {
        docPageApi() {
            if (this.store.doctorSlug !== "") {
                axios.get(`http://localhost:8000/api/doc/${this.store.doctorSlug}`).then(resp => {
                    this.docData = resp.data.doctor
                    console.log(this.docData, "ciao");
                })

            } else {
                console.log(this.myData, "my data else if");
                axios.get(`http://localhost:8000/api/doc/${this.myData}`).then(resp => {
                    this.docData = resp.data.doctor
                    console.log(this.docData, "ciao");
                })
            }
        },
        slugCheck() {
            this.docData = this.store.docData
            console.log(this.docData)
        },
        redeemLocalSave() {
            const savedData = localStorage.getItem('myData');
            if (savedData !== null) {
                console.log(savedData, "saved data");
                this.myData = JSON.parse(savedData);
                console.log(savedData, "my data?");
                this.docPageApi()
            }
        },
        localSave() {
            console.log(this.store.doctorSlug, "local save");
            if (this.myData == "") {
                localStorage.setItem('myData', JSON.stringify(this.store.doctorSlug));
            } else {
                localStorage.setItem('myData', JSON.stringify(this.myData));
            }
        }
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
    <!-- <h1>{{ docData.name }} </h1> -->
    <!-- <h2>hello {{ docData[0].name }}</h2>
    <a @click="docPageApi">ciao</a>
    <a @click="slugCheck">ref</a> -->
    <div class="container-fluid bg py-5">
        <div class="container d-flex">
            <div class="ms_container d-flex">
                <img class="img-thumbnail border border-3" src="../assets/img/doctor.jpg" alt="">
                <div class="flex-column ms-4 text-light">
                    <h2>Nome e Cognome</h2>
                    <h4>Specializzazione</h4>
                    <h4>Media voto e numero recensioni</h4>

                </div>

            </div>

        </div>
        <div class="container bg-w rounded-2 w-50 mt-5 text-center text-primary p-4">
            <h4>Il mio CV</h4>
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
</style>