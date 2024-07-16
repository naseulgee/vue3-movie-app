<template>
    <Navigation />

    <main>
        <!-- NOTE: routes/index.js 에서 설정한 주소에 일치하는 컴포넌트가 그려진다. -->
        <RouterView />
    </main>

    <Footer />
</template>

<script>
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";

export default {
    components: {
        Navigation,
        Footer,
    }
}
</script>

<!-- NOTE: 전역으로 적용되어야 하기 때문에 scoped를 명시하지 않는다. -->
<style lang="scss">
@import "~/scss/main";

body {
    --headerH: 75px;
    --footerH: 110px;
    --vh-H   : calc(100vh - var(--headerH));
    --vh-HF  : calc(100vh - var(--headerH) - var(--footerH));
    main {
        min-height: var(--vh-HF);
        padding-top: var(--headerH);
    }
}
/* [MO] =================== */
@media (max-width: 767px) {
    body {
        --headerH: 50px;
        --footerH: 105px;
        main {
            min-height: var(--vh-HF);
            padding-top: 0;
        }
        footer{
            padding-bottom: var(--headerH);
        }
    }
}
</style>