<template>
    <header>
        <div class="wrapper">
            <div class="logo-container">
                <img src="../../assets/img/dc-logo.png" alt="dc-logo" />
            </div>
            <nav>
                <ul>
                    <li><a>pagina</a></li>
                    <li><a>pagina</a></li>
                    <li><a>pagina</a></li>
                    <li><a>pagina</a></li>
                    <li><a>pagina</a></li>
                    <li><a>pagina</a></li>
                    <li><a>pagina</a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: "MainHeader",
};
</script>

<style lang="scss">
header {
    .wrapper {
        display: flex;
        justify-content: space-between;

        width: 90%;
        margin: 0 auto;
    }

    .logo-container {
        padding: 0.4rem 0;

        display: flex;
        justify-content: center;
        align-items: center;

        img {
            height: 70%;
        }
    }

    ul {
        height: 100%;

        display: inline-flex;

        li {
            &:hover {
                border-bottom: 4px solid blue;
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

                font-size: 0.8rem;
                font-weight: 600;
                text-transform: uppercase;
            }
        }
    }
}
</style>
