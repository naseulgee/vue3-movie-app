<template>
    <section class="container pt-1 text-center">
        <div class="img-wrap m-auto mt-0 mb-2 rounded-5 overflow-hidden position-relative">
            <Loader
                v-if="imageLoading"
                position="absolute"
                size="3" />
            <img
                :src="image"
                alt="Profile avata"
                class="w-100" />
        </div>
        <ul class="p-0 text-break">
            <li>
                <h1 class="text-primary">
                    {{ name }}
                </h1>
            </li>
            <li>{{ phone }}</li>
            <li>{{ email }}</li>
            <li>{{ blog }}</li>
        </ul>
    </section>
</template>

<script>
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
        name() {
            return this.$store.state.about.name
        },
        email() {
            return this.$store.state.about.email
        },
        phone() {
            return this.$store.state.about.phone
        },
        blog() {
            return this.$store.state.about.blog
        },
        image() {
            return this.$store.state.about.image
        },
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
}
</style>