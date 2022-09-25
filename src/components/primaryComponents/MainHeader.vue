<template>
    <header>
        <div class="wrapper">
            <div class="logo-container">
                <img src="../../assets/img/dc-logo.png" alt="dc-logo" />
            </div>
            <nav>
                <ul>
                    <li><a>characters</a></li>
                    <li><a>comics</a></li>
                    <li><a>movies</a></li>
                    <li><a>tv</a></li>
                    <li><a>games</a></li>
                    <li><a>collectibles</a></li>
                    <li><a>videos</a></li>
                    <li><a>fans</a></li>
                    <li><a>news</a></li>
                    <li><a>shop</a></li>
                </ul>
            </nav>
        </div>

        <JumboTron />
    </header>
</template>

<script>
import JumboTron from "../secondaryComponents/JumboTron.vue";

export default {
    name: "MainHeader",
    components: {
        JumboTron,
    },
};
</script>

<style scoped lang="scss">
header {
    .wrapper {
        display: flex;
        justify-content: space-between;

        width: 80%;
        margin: 0 auto;
    }

    .logo-container {
        padding: 0.4rem 0;

        display: flex;
        justify-content: center;
        align-items: center;

        img {
            height: 80%;
        }
    }

    nav {
        padding-bottom: 4px;
    }

    ul {
        height: 100%;

        display: inline-flex;

        li {
            &:hover {
                border-bottom: 4px solid #0082f9;
                a {
                    color: #0082f9;
                }
            }
            height: 100%;
            list-style-type: none;
            /* background-color: aqua; */

            padding: 0 1rem;

            display: flex;
            align-items: center;
            justify-content: center;

            a {
                line-height: 100%;
                text-align: center;

                font-size: 0.9rem;
                font-weight: 800;
                text-transform: uppercase;
                font-family: "Antonio", sans-serif;
            }
        }
    }
}
</style>
