<script>
import axios from 'axios';
import { store } from "../store";
export default {
    name: "AppDocPage",
    data() {
        return {
            store,
            docData: [],
            docSlug: ""
        }
    },
    methods: {
        docPageApi() {
            axios.get(`http://localhost:8000/api/doc/${this.store.doctorSlug}`).then(resp => {
                this.docData = resp.data.doctor
                console.log(this.docData, "ciao");
            })

        },
        slugCheck() {
            this.docData = this.store.docData
            console.log(this.docData)
        }
    },
    created() {
        this.docPageApi()
        this.slugCheck()
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