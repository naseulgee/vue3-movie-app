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
}
</script>

<style lang="scss" scoped>
section {
    height: var(--vh-H);
}
</style>