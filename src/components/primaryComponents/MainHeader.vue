<template>
    <header>
        <div class="wrapper">
            <img src="../../assets/img/dc-logo.png" alt="dc-logo" />
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
        background-color: red;

        width: 90%;
        margin: 0 auto;
    }

    ul {
        height: 100%;
        background-color: antiquewhite;
        display: inline-flex;

        li {
            height: 100%;
            list-style-type: none;
            background-color: aqua;

            padding: 0 0.5rem;

            display: flex;
            align-items: center;
            justify-content: center;

            a {
                line-height: 100%;
                text-align: center;

                font-size: 1rem;
            }
        }
    }
}
</style>
