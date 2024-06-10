<template>
    <!-- NOTE:
    [참고] https://www.capitoltheatre.com.au/
    [참고] https://colorlib.com/wp/wp-content/uploads/sites/2/theater-websites.jpg
    -->
    <section class="intro d-flex flex-column justify-content-center align-items-center mt-4 text-center text-white position-relative">
        <!-- FIXME: css에서 이미지 url 변환이 제대로 되지 않아 임시로 template 에서 선언하여 사용 -->
        <img src="~assets/main-bg.jpg" />
        <h1>
            welcome to
            <br />
            <Logo />
        </h1>
        <hr />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, quo.</p>
        <font-awesome-icon icon="fa-solid fa-chevron-down" />
    </section>
    <section class="container">
        <h2>TEST</h2>
    </section>
</template>

<script>
import Logo from '~/components/Logo'

export default {
    components: {
        Logo,
    },
    data() {
        return {
        }
    },
    computed: {
    },
    methods: {
    },
    watch: {
    },
}
</script>

<style lang="scss" scoped>
.intro {
    height: calc(100vh - 75px);
    background: url('assets/main-bg.jpg') no-repeat center;
    background-size: cover;
    z-index: 1;
    //FIXME: css에서 이미지 url 변환이 제대로 되지 않아 임시로 img 태그로 선언하여 사용
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
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