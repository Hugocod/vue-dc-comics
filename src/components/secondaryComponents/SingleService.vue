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

<style lang="scss">
.service {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 50px;
        height: 50px;
    }
}
</style>
