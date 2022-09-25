<template>
    <figure>
        <img :src="url" :alt="alt" />
        <figcaption>{{ title }}</figcaption>
    </figure>
</template>

<script>
export default {
    name: "SingleCard",
    props: {
        title: String,
        url: String,
        alt: String,
    },
};
</script>

<style scoped lang="scss">
figure {
    width: calc(100% / 6);

    margin: 0 0 2rem 0;

    figcaption {
        color: white;
        text-transform: uppercase;
        font-size: 0.8rem;
        font-weight: 600;
    }
}
</style>
