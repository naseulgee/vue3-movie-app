<template>
    <section class="container pt-1 text-center">
        <div class="img-wrap m-auto mt-0 mb-2 rounded overflow-hidden position-relative">
            <Loader
                v-if="imageLoading"
                position="absolute"
                size="3" />
            <img
                :src="image"
                alt="Profile avata"
                class="w-100" />
        </div>
        <ul class="info-wrap p-0 lh-lg text-break">
            <li>
                <h1 class="text-primary">
                    {{ name }}
                </h1>
            </li>
            <li>
                <a
                    :href="'tel:' + phone"
                    target="_blank">
                    {{ phone }}
                </a>
            </li>
            <li>
                <a
                    :href="'mailto:' + email"
                    target="_blank">
                    {{ email }}
                </a>
            </li>
            <li>
                <a
                    :href="blog"
                    target="_blank">
                    {{ blog }}
                </a>
            </li>
        </ul>
    </section>
</template>

<script>
import { mapState } from 'vuex'
import Loader from '~/components/common/Loader'

export default {
    components: {
        Loader,
    },
    data() {
        return {
            imageLoading: true,
        }
    },
    computed: {
        ...mapState('about', [
            'name',
            'email',
            'phone',
            'blog',
            'image',
        ]),
    },
    methods: {
        async init() {
            await this.$loadImage(this.image)
            this.imageLoading = false
        },
    },
    mounted() {
        this.init()
    },
}
</script>

<style lang="scss" scoped>
.container{
    .img-wrap{
        width: 100%;
        max-width: 300px;
    }
    .info-wrap{
        li{
            a{
                color: $body-color;
                text-decoration: none;
            }
        }
    }
}
</style>