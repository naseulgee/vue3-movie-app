<template>
    <div>{{ movie.Title }}</div>
</template>

<script>
export default {
    props: {
        movie: {
            type: Object,
            defualt: () => ({}), // 객체형은 함수로 반환해줘야 함
        }
    },
}
</script>