<template>
    <section class="container">
        <MovieItem
            v-for="movie in movies"
            :key="movie.imdbID" />
    </section>
</template>

<script>
import MovieItem from '~/components/MovieItem'

export default {
    components: {
        MovieItem,
    },
    data() {
        return {
            movies: [],
        }
    },
}
</script>