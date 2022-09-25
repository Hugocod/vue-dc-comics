<template>
    <footer>
        <div class="wrapper">
            <div class="resources">
                <div class="double-column">
                    <SingleList title="dc comics" :list="resourcesLink.dcComics" />
                    <SingleList title="shop" :list="resourcesLink.shop" />
                </div>
                <SingleList title="dc" :list="resourcesLink.dc" />
                <SingleList title="sites" :list="resourcesLink.sites" />
            </div>
            <div class="dc-logo">
                <img src="../../assets/img/dc-logo-bg.png" alt="dc-logo" />
            </div>
        </div>
        <MiniFooter />
    </footer>
</template>

<script>
import SingleList from "../secondaryComponents/SingleList.vue";
import MiniFooter from "../secondaryComponents/MiniFooter.vue";

export default {
    name: "MainFooter",
    data() {
        return {
            resourcesLink: {
                dcComics: ["Characters", "Comics", "Movies", "TV", "Games", "Videos", "News"],
                shop: ["Shop DC", "Shop DC collectibles"],
                dc: ["Termes of use", "Privacy", "Movies", "TV", "Games", "Videos", "News", "TV", "Games", "Videos", "News"],
                sites: ["DC", "Magazine", "Movies", "TV", "Games"],
            },
        };
    },
    components: {
        SingleList,
        MiniFooter,
    },
};
</script>

<style scoped lang="scss">
footer {
    background-color: aqua;

    background-image: url(../../assets/img/footer-bg.jpg);
    background-size: cover;

    .wrapper {
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        overflow: hidden;

        padding: 2rem 0;

        .resources {
            height: 100%;
            width: fit-content;

            display: flex;
        }

        .dc-logo {
            position: relative;

            width: 50%;
            height: 100%;
            background-color: red;

            img {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);

                width: 100%;
            }
        }
    }
}
</style>
