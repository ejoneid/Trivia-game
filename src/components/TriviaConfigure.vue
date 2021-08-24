<template>
    <main class="container">
        <form @submit.prevent="onConfigureSubmit">
            <fieldset class="mb-3">
                <label :key="numberOfQuestions" class="form-label"
                    >Number of questions: {{ numberOfQuestions }}</label
                >
                <input
                    type="range"
                    min="5"
                    v-model="numberOfQuestions"
                    max="30"
                    class="form-range"
                    id="customRange1"
                />
            </fieldset>

            <fieldset class="mb-3">
                <label class="form-label">Category</label>
                <select class="form-select" v-model="selectedCategory">
                    <option value="">-- Choose category --</option>
                    <option v-for="category of categories" :value="category.id" :key="category.id">
                        {{ category.name }}
                    </option>
                </select>
            </fieldset>

            <fieldset class="mb-3">
                <label class="form-label">Difficulty</label>
                <select class="form-select" v-model="selectedDifficulty">
                    <option value="">-- Choose Difficulty --</option>
                    <option v-for="difficulty of difficulties" :key="difficulty">{{
                        difficulty
                    }}</option>
                </select>
            </fieldset>

            <button type="submit" class="btn btn-primary">Play</button>
        </form>
    </main>
</template>

<script>
// import { getCategories } from "@/API/opentdb.js";
import { CATEGORIES } from "@/mocks/categories.mock.js";

export default {
    name: "TriviaConfigure",
    data() {
        return {
            categories: [],
            difficulties: ["Easy", "Medium", "Hard"],
            selectedCategory: "",
            selectedDifficulty: "",
            numberOfQuestions: 10,
        };
    },
    watch: {},
    async created() {
        try {
            // this.categories = await getCategories();
            this.categories = CATEGORIES;
        } catch (error) {
            this.error = error.message;
        }
    },
    methods: {
        onConfigureSubmit() {
            console.log(this.numberOfQuestions);
        },
    },
};
</script>
