<template>
    <li class="rounded overflow-hidden position-relative">
        <RouterLink
            :to="`/movie/${movie.imdbID}`"
            class="d-block w-100 h-100">
            <Loader
                v-if="imageLoading"
                position="absolute" />
            <img
                v-else-if="noImage"
                src="~/assets/images/common/404-img.jpg"
                alt="No Poster"
                class="w-100 h-100" />
            <img
                v-else
                :src="movie.Poster"
                :alt="movie.Title + ' Poster'"
                class="w-100 h-100" />
            <div class="info d-flex flex-column justify-content-center align-items-center w-100 h-25 position-absolute bottom-0 start-0 text-white text-center text-wrap">
                <p class="title w-100 m-0 px-1 overflow-hidden text-nowrap fs-4 lh-1">
                    {{ movie.Title }}
                </p>
                <p class="year m-0 px-1 fs-6 text-white-50">
                    {{ movie.Year }}
                </p>
            </div>
        </RouterLink>
    </li>
</template>

<script>
import Loader from '~/components/common/Loader'

export default {
    props: {
        movie: {
            type: Object,
            defualt: () => {}, // 객체형은 함수로 반환해줘야 함
        }
    },
    components: {
        Loader,
    },
    data() {
        return {
            imageLoading: true,
            noImage: false,
        }
    },
    methods: {
        async init(){
            const src = this.movie.Poster

            try {
                // 메모리상 이미지가 로딩이 완료될 때 까지 대기
                await this.$loadImage(src)
            } catch (error) { // 이미지가 없는 경우 예외처리
                console.error(error)
                this.noImage = true
            } finally {
                this.imageLoading = false // 로딩 종료
            }
        }
    },
    mounted(){ // HTML 구조와 컴포넌트 연결 직후 바로 실행 (created는 DOM과 연결되지 않은 상태)
        this.init()
    },
}
</script>

<style lang="scss" scoped>
li{
    background-color: $gray-500;
    &:hover{
        border: 5px solid $primary;
        img{
            transform: scale(1.2);
        }
    }
    img{
        object-fit: cover;
        transition: 0.5s;
    }
    .info{
        backdrop-filter: blur(2px) brightness(0.5);
        .title{
            text-overflow: ellipsis;
        }
    }
}
</style>