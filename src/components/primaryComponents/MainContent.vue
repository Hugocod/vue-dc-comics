<template>
    <div>
        <div class="content"></div>
        <div class="products">
            <div class="wrapper">
                <SingleService url="https://cdn.lovesavingsgroup.com/logos/square.jpg" serviceTitle="servizio1"></SingleService>
                <SingleService url="https://cdn.lovesavingsgroup.com/logos/square.jpg" serviceTitle="servizio2"></SingleService>
                <SingleService url="https://cdn.lovesavingsgroup.com/logos/square.jpg" serviceTitle="servizio3"></SingleService>
                <SingleService url="https://cdn.lovesavingsgroup.com/logos/square.jpg" serviceTitle="servizio4"></SingleService>
                <SingleService url="https://cdn.lovesavingsgroup.com/logos/square.jpg" serviceTitle="servizio5"></SingleService>
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
