<template>
    <div class="back">
        <div class="wrapper">
            <button>sign-up now!</button>
            <div class="social">
                <h1>follow us</h1>
                <img src="../../assets/img/footer-facebook.png" />
                <img src="../../assets/img/footer-twitter.png" />
                <img src="../../assets/img/footer-youtube.png" />
                <img src="../../assets/img/footer-pinterest.png" />
                <img src="../../assets/img/footer-periscope.png" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MiniFooter",
};
</script>

<style scoped lang="scss">
.back {
    background-color: #303030;

    padding: 2rem 0;
}

.wrapper {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 auto;

    .social {
        display: flex;
        justify-content: center;
        align-items: center;

        gap: 1rem;

        img {
            height: 100%;
        }

        h1 {
            color: #0082f9;
            text-transform: uppercase;
            font-size: 1.4rem;
            font-family: "Antonio", sans-serif;
        }
    }

    button {
        padding: 0.8rem;
        border: 2px solid #0082f9;
        background-color: rgba(0, 139, 139, 0);
        color: white;
        text-transform: uppercase;
        font-weight: 600;
    }
}
</style>
