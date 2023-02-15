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
    <h2>hello {{ docData[0].name }}</h2>
    <a @click="docPageApi">ciao</a>
    <a @click="slugCheck">ref</a>


</template>

<style>

</style>