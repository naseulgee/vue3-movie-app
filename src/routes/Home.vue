<template>
    <Headline />

    <BestMovie />
</template>

<script>
import Headline from '~/components/Headline'
import BestMovie from '~/components/BestMovie'

export default {
    components: {
        Headline,
        BestMovie,
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