<script>
export default {
    name: "AppBanner"
}
</script>

<template>
    <div class="container-fluid bg-primary">

        <div class="container text-light bg-primary  py-4">

            <h1 class="text-center">Find your Doctor</h1>

            <div class="ms_container d-flex justify-content-center mt-4 ">
                <form class="d-flex justify-content-center w-50 p-2" role="search">
                    <input class="form-control me-2" type="search" placeholder="Find your Doctor" aria-label="Search">
                    <button class="btn btn-light" type="submit">Search</button>
                </form>
            </div>

        </div>

    </div>
</template>

<style>
form {
    background-color: rgba(5, 12, 36, 0.1);
    border-radius: 10px;
}
</style>