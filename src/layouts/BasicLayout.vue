<template>
    <MainHeader />

    <main>
        <!-- NOTE: 레이아웃 컴포넌트를 호출한 부분에서 내부에 작성한 컴포넌트가 전달되어 그려진다. -->
        <slot></slot>
    </main>

    <MainFooter />
</template>

<script>
import MainHeader from "~/components/common/Header";
import MainFooter from "~/components/common/Footer";

export default {
    components: {
        MainHeader,
        MainFooter,
    }
}
</script>

<!-- NOTE: 전역으로 적용되어야 하기 때문에 scoped를 명시하지 않는다. -->
<style lang="scss">
body {
    --headerH: 75px;
    --footerH: 113px;
    --vh-H   : calc(100vh - var(--headerH));
    --vh-HF  : calc(100vh - var(--headerH) - var(--footerH));
    main {
        min-height: var(--vh-HF);
        padding-top: var(--headerH);
        box-sizing: content-box;
    }
}
/* [MO] =================== */
@media (max-width: 767px) {
    body {
        --headerH: 50px;
        --footerH: 113px;
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