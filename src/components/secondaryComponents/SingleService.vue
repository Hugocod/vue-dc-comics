<template>
    <div class="service">
        <img :src="url" alt="" />
        <h3>{{ serviceTitle }}</h3>
    </div>
</template>

<script>
export default {
    name: "SingleService",
    props: {
        url: String,
        serviceTitle: String,
    },
};
</script>

<style scoped lang="scss">
.service {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: fit-content;
        height: 50px;
    }

    h3 {
        text-transform: uppercase;
        font-size: 0.7rem;
        color: white;
        padding: 1rem;
    }
}
</style>
