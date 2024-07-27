<template>
    <section class="container">
        <ul class="d-flex flex-wrap justify-content-center align-items-center w-100 my-1 p-1 rounded">
            <Loader
                v-if="loading"
                position="absolute"
                :size="5" />
            <li
                v-if="message != ''"
                class="message w-100 h-auto fs-2 text-center">
                {{ message }}
            </li>
            <MovieItem
                v-else
                v-for="movie in movies"
                :key="movie.imdbID"
                :movie="movie" />
        </ul>
    </section>
</template>

<script>
import Loader from '~/components/common/Loader'
import MovieItem from '~/components/MovieItem'

export default {
    components: {
        MovieItem,
        Loader,
    },
    computed: {
        movies() {
            return this.$store.state.movie.movies
        },
        message() {
            return this.$store.state.movie.message
        },
        loading() {
            return this.$store.state.movie.loading
        }
    },
}
</script>

<style lang="scss" scoped>
.container{
    ul{
        gap: 10px;
        min-height: calc(var(--vh-HF) - 75.5px);
        background-color: var(--bs-gray-200);
        li{
            $width: 200px;
            width: $width;
            height: calc($width * 3 / 2);
            &.message{
                color: var(--bs-gray-500);
            }
        }
    }
}
</style>