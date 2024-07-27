<template>
    <!-- NOTE:
    [참고] https://www.capitoltheatre.com.au/
    [참고] https://colorlib.com/wp/wp-content/uploads/sites/2/theater-websites.jpg
    -->
    <section class="intro container-fluid d-flex flex-column justify-content-center align-items-center text-center text-white position-relative z-1">
        <div class="container">
            <h1>
                <Logo />
                <br />
                The Open Movie Database
            </h1>
            <hr class="mx-auto" />
            <p>The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users.</p>
            <font-awesome-icon
                icon="fa-solid fa-chevron-down"
                class="position-absolute bottom-0 start-50 translate-middle" />
        </div>
    </section>
</template>

<script>
import Logo from '~/components/common/Logo'

export default {
    components: {
        Logo,
    },
}
</script>

<style lang="scss" scoped>
.intro {
    background: url(~assets/images/main/main-bg.jpg) no-repeat center/cover;
    &::before {
        display: block;
        content: "";
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
    h1 {
        font-size: calc(3rem + 1.5vw);
    }
    hr {
        width: 10vw;
        opacity: 1;
    }
}
</style>