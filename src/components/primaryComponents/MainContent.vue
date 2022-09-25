<template>
    <div>
        <div class="content"></div>
        <div class="products">
            <div class="wrapper">
                <!-- 
                L'interpolazione 'stramba' su URL risolve un noto problema su webpack 
                APPROFONDIMENTI QUI : https://stackoverflow.com/questions/57349167/vue-js-dynamic-image-src-with-webpack-require-not-working 
                -->
                <SingleService :url="require(`../../assets/img/${'buy-comics-digital-comics.png'}`)" serviceTitle="digital comics"></SingleService>
                <SingleService :url="require(`../../assets/img/${'buy-comics-merchandise.png'}`)" serviceTitle="dc merchandise"></SingleService>
                <SingleService :url="require(`../../assets/img/${'buy-comics-subscriptions.png'}`)" serviceTitle="subscription"></SingleService>
                <SingleService :url="require(`../../assets/img/${'buy-comics-shop-locator.png'}`)" serviceTitle="comic shop locator"></SingleService>
                <SingleService :url="require(`../../assets/img/${'buy-dc-power-visa.svg'}`)" serviceTitle="dc power visa"></SingleService>
            </div>
        </div>
    </div>
</template>

<script>
import SingleService from "../secondaryComponents/SingleService.vue";

export default {
    name: "MainContent",

    components: {
        SingleService,
    },
    mounted() {},
};
</script>

<style scoped lang="scss">
.wrapper {
    width: 90%;

    height: 100%;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.content {
    background-color: black;
    height: 200px;
}

.products {
    background-color: #0082f9;

    height: 200px;
}
</style>
