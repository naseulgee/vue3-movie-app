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
section {
    height: calc(100vh - 75px);
}
/* [MO] =================== */
@media (max-width: 767px) {
    section {
        height: calc(100vh - 50px);
    }
}
</style>