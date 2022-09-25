<template>
    <div class="container">
        <div class="back">
            <div class="label-container">
                <h1>current series</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "JumboTron",
};
</script>

<style scoped lang="scss">
.container {
    position: relative;
}

.back {
    height: 50vh;
    width: 100%;
    background-image: url("../../assets/img/jumbotron.jpg");
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.label-container {
    width: 90%;
    margin: 0 auto;

    h1 {
        background-color: #0082f9;
        margin: 0;
        width: fit-content;
        padding: 0.7rem 1.2rem;
        color: white;
        text-transform: uppercase;
        font-size: 1.5rem;

        transform: translateY(50%);
    }
}
</style>
