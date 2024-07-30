<template>
    <Headline />

    <BestMovieCard
        movie-id="tt4520988" />
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