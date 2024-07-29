<template>
    <Headline />

    <BestMovieCard />
</template>

<script>
import Headline from '~/components/Headline'
import BestMovieCard from '~/components/BestMovieCard'

export default {
    components: {
        Headline,
        BestMovieCard,
    },
    created() {
        this.$store.commit('movie/resetMovies') // 검색 내용 초기화
    },
}
</script>

<style lang="scss" scoped>
section {
    height: $vh-H;
}
</style>