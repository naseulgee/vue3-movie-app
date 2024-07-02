<template>
    <section class="container pt-1">
        <form
            class="d-flex flex-wrap justify-content-between align-items-center">
            <input
                class="form-control"
                type="text"
                v-model="title" 
                placeholder="영화 제목을 입력하세요."
                @keyup.enter="search" />
            <select
                v-for="filter in filters"
                :key="filter.name"
                v-model="$data[filter.name]"
                class="form-select"
                :aria-label="filter.label">
                <option
                    v-if="filter.name === 'year'"
                    value="">
                    전체
                </option>
                <option
                    v-for="item in filter.items"
                    :key="item">
                    {{ item }}
                </option>
            </select>
            <button
                class="btn btn-primary"
                type="submit"
                @click="search">
                검색
            </button>
        </form>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    components: {
    },
    data() {
        return {
            title: "",
            type: "movie",
            perPages: 10,
            year: "",
            filters: [
                {
                    name: "type",
                    label: "종류",
                    items: ["movie", "series", "episode"],
                },
                {
                    name: "perPages",
                    label: "페이지당 표시 수",
                    items: [10, 20, 30],
                },
                {
                    name: "year",
                    label: "연도",
                    items: (() => {
                        const years = [];
                        const currentYear = new Date().getFullYear(); // 올해 연도
                        for (let i = currentYear; i >= 1900; i--) {
                            years.push(i);
                        }
                        return years;
                    })(),
                },
            ]
        }
    },
    computed: {
    },
    methods: {
        async search() {
            const OMDB_API_KEY = '8a44dd72';
            const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${this.title}&type=${this.type}&y=${this.year}&page=1`)
            console.log(res);
        }
    },
    watch: {
    },
}
</script>

<style lang="scss" scoped>
.container{
    form{
        gap: 10px;
        .form-control{
            flex: 5;
            min-width: 150px;
        }
        .form-select{
            flex: 1;
            min-width: 150px;
        }
    }
}
</style>