<template>
    <section class="container">
        <p class="message">
            {{ message }}
        </p>
        <MovieItem
            v-for="movie in movies"
            :key="movie.imdbID"
            :movie="movie" />
    </section>
</template>

<script>
import MovieItem from '~/components/MovieItem'

export default {
    components: {
        MovieItem,
    },
    computed: {
        movies() {
            return this.$store.state.movie.movies
        },
        message() {
            return this.$store.state.movie.message
        }
    },
}
</script>