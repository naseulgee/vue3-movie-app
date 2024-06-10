<template>
    <!-- NOTE: RouterLink
        [참고] https://router.vuejs.kr/guide/essentials/active-links.html
        to: 라우터 설정(/src/routes/index.js)에 선언된 페이지 중 path 와 일치하는 페이지로 이동시킨다
        active-class: 클릭시 활성화되는 클래스를 지정한다.
            기본값: router-link-active
    -->
    <div class="nav-wrap w-100 position-fixed top-0 start-0 bg-dark">
        <nav class="container d-flex justify-content-between align-items-center">
            <Logo
                color-class="text-light"
                size-class="fs-2" />
            <ul class="nav nav-pills">
                <li
                    class="nav-item"
                    v-for="navigation in navigations"
                    :key="navigation.name">
                    <RouterLink
                        class="nav-link"
                        active-class="active"
                        :to="navigation.href">
                        {{ navigation.name }}
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import Logo from '~/components/Logo'
export default {
    components: {
        Logo
    },
    data() {
        return {
            navigations: [
                {
                    name: "Home",
                    href: "/"
                },
                {
                    name: "Search",
                    href: "/search"
                },
                {
                    name: "Movie",
                    href: "/movie"
                },
                {
                    name: "About",
                    href: "/about"
                },
            ]
        }
    }
}
</script>

<style>
.nav-wrap {
    z-index: 9;
    nav {
        height: 75px;
    }
}
</style>