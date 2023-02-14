<script>
import { store } from "../store";
export default {
    name: "AppDocPage",
    data() {
        return {
            store,
            docData: [],
        }
    },
    docPageApi() {
        axios.get(`http://localhost:8000/api/doc/spec/${this.store.doctorId}`).then(resp => {
            this.docData = resp.data[0];
            console.log(this.docData);
        })
    },
    created() {
        this.docPageApi
    }
}
</script>

<template>
    <h1>{{ docData.name }} </h1>
</template>

<style>

</style>