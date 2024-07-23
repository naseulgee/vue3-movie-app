<template>
    <h1>Movie</h1>
    {{ theMovie.Title }}
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
        }
    },
    computed: {
        theMovie(){
            return this.$store.state.movie.theMovie
        }
    },
    methods: {
    },
    watch: {
        theMovie(newVal){// 바뀌는 값을 변수로 받을 수 있다
            console.log('Watch:::::', newVal)
        }
    },
    created(){
        this.$store.dispatch('movie/searchMovieWithId', {
            id : this.$route.params.id // routes/index.js 에서 설정한 콜론(:) 뒤 동적 파라미터 변수명
        })
        console.log("created:::::", this.$store.state.movie.theMovie)
    }
}
</script>