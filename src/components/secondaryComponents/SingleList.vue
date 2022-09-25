<template>
    <div class="links-block">
        <h1>{{ title }}</h1>
        <a v-for="(link, index) in list" :key="index">
            {{ link }}
        </a>
    </div>
</template>

<script>
export default {
    name: "SingleList",
    props: {
        list: Array,
        title: String,
    },
};
</script>

<style scoper lang="scss">
.links-block {
    display: flex;
    flex-direction: column;

    margin: 1rem;

    a {
        color: rgb(148, 144, 144);
        font-size: 0.8rem;
    }

    h1 {
        color: white;
        text-transform: uppercase;

        font-size: 1.1rem;
    }
}
</style>
