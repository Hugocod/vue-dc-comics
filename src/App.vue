<template>
    <div id="app">
        <MainHeader />
        <MainContent />
    </div>
</template>

<script>
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

/* import { ButtonPizza, ButtonPomodoro } from "./components/multiComponent.js"; */
import MainHeader from "./components/primaryComponents/MainHeader.vue";
import MainContent from "./components/primaryComponents/MainContent.vue";

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
export default {
    name: "App",
    components: {
        MainHeader,
        MainContent,
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body,
ul {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
