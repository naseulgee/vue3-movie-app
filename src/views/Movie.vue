<template>
    <section class="container pt-1">
        <template v-if="loading">
            <Loader
                position="fixed"
                :z-index="1"
                :size="5" />
            <div class="skeletons info-wrap d-flex flex-wrap justify-content-between">
                <div class="skeleton poster"></div>
                <ul class="specs p-0">
                    <li class="skeleton title"></li>
                    <li class="skeleton labels"></li>
                    <li class="skeleton plot"></li>
                    <li class="skeleton etc"></li>
                    <li class="skeleton etc"></li>
                    <li class="skeleton etc"></li>
                </ul>
            </div>
        </template>
        <div
            v-else
            class="info-wrap d-flex flex-wrap justify-content-between">
            <div
                class="poster rounded-3"
                :style="{background: `url(${theMovie.Poster}) no-repeat center/cover`}"></div>
            <ul class="specs p-0">
                <li class="title">
                    <h1>{{ theMovie.Title }}</h1>
                </li>
                <li class="labels text-black-50">
                    <span>{{ theMovie.Released }}, </span>
                    <span>{{ theMovie.Runtime }}, </span>
                    <span>{{ theMovie.Country }}</span>
                </li>
                <li class="plot fs-5">
                    {{ theMovie.Plot }}
                </li>
                <li class="etc">
                    <h3 class="mt-2 mb-0">
                        Ratings
                    </h3>
                    <ul class="rating-wrap d-flex flex-wrap align-items-center p-0 text-black-50">
                        <li
                            v-for="{ Source: name, Value: score } in theMovie.Ratings"
                            :key="name"
                            class="rating m-0 align-middle">
                            <img
                                :src="require(`~/assets/images/movie/${name}.png`)"
                                :alt="name"
                                class="me-1" />
                            <span>{{ score }}</span>
                        </li>
                    </ul>
                </li>
                <li class="etc">
                    <h3 class="mt-2 mb-0">
                        Actors
                    </h3>
                    <p class="text-black-50">
                        {{ theMovie.Actors }}
                    </p>
                </li>
                <li class="etc">
                    <h3 class="mt-2 mb-0">
                        Director
                    </h3>
                    <p class="text-black-50">
                        {{ theMovie.Director }}
                    </p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import Loader from '~/components/common/Loader'

export default {
    components: {
        Loader
    },
    data() {
        return {
        }
    },
    computed: {
        loading() {
            return this.$store.state.movie.loading
        },
        theMovie(){
            return this.$store.state.movie.theMovie
        }
    },
    created(){
        this.$store.dispatch('movie/searchMovieWithId', {
            id : this.$route.params.id // routes/index.js 에서 설정한 콜론(:) 뒤 동적 파라미터 변수명
        })
    }
}
</script>

<style lang="scss" scoped>
.container{
    .info-wrap{
        gap: 50px;
        .poster{
            --posterW: 550px;
            flex-shrink: 0;
            width: var(--posterW);
            height: calc(var(--posterW) * 5 / 4);
        }
        .specs{
            flex-grow: 1;
            width: min-content;
            li{
                margin-bottom: 20px;
                .rating-wrap{
                    gap: 20px;
                    .rating{
                        img{
                            height: 30px;
                        }
                    }
                }
            }
        }
    }
    .skeletons{
        .skeleton{
            display: block;
            border-radius: 10px;
            background-color: var(--bs-gray-200);
            &.title{
                width: 80%;
                height: 70px;
            }
            &.labels{
                width: 60%;
                height: 30px;
            }
            &.plot{
                width: 100%;
                height: 250px;
            }
            &.etc{
                width: 50%;
                height: 50px;
            }
        }
    }
}
/* [MO] =================== */
@media (max-width: 767px) {
    .container{
        .info-wrap{
            gap: 30px;
            .poster{
                width: 100%;
                height: var(--vh-HF);
            }
            .specs{
                width: 100%;
                li{
                    margin-bottom: 10px;
                }
            }
        }
    }
}
</style>