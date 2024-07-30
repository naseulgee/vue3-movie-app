<template>
    <section class="container">
        <h2>TEST</h2>
        {{ theMovie }}
    </section>
</template>

<script>
export default {
    props: {
        movieId: {
            type: String,
            require: true,
        }
    },
    components: {
    },
    data() {
        return {
        }
    },
    computed: {
        theMovie() {
            return this.$store.state.movie.theMovie
        }
    },
    methods: {
    },
    watch: {
    },
    created(){
        this.$store.dispatch('movie/searchMovieWithId', {
            id: this.movieId
        })
    },
}
</script>

<style lang="scss" scoped>
section {
    height: $vh-H;
}
</style>