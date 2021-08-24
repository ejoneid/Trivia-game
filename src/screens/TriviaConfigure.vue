<template>
    <main class="container">
        <h1 class="mb-4">Trivia Game</h1>
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
                <select
                    :class="{ 'form-select': true, 'is-invalid': this.categoryError }"
                    v-model="selectedCategory"
                >
                    <option value="">-- Choose category --</option>
                    <option v-for="category of categories" :value="category.id" :key="category.id">
                        {{ category.name }}
                    </option>
                </select>
            </fieldset>

            <fieldset class="mb-3">
                <label class="form-label">Difficulty</label>
                <select
                    :class="{ 'form-select': true, 'is-invalid': this.difficultyError }"
                    v-model="selectedDifficulty"
                >
                    <option value="">-- Choose Difficulty --</option>
                    <option v-for="difficulty of difficulties" :key="difficulty">{{
                        difficulty
                    }}</option>
                </select>
            </fieldset>

            <button type="submit" class="btn btn-primary btn-lg">Play</button>
        </form>
    </main>
</template>

<script>
import { getCategories } from "@/API/opentdb.js";
// import { CATEGORIES } from "@/mocks/categories.mock.js";
import { setConfig } from "@/utils/config.js";

export default {
    name: "TriviaConfigure",
    data() {
        return {
            categories: [],
            difficulties: ["Easy", "Medium", "Hard"],
            selectedCategory: "",
            selectedDifficulty: "",
            numberOfQuestions: 10,
            categoryError: false,
            difficultyError: false,
        };
    },
    watch: {},
    async created() {
        try {
            const response = await getCategories();
            this.categories = response.trivia_categories;
        } catch (error) {
            this.error = error.message;
        }
    },
    methods: {
        onConfigureSubmit() {
            this.categoryError = false;
            this.DifficultyError = false;

            if (!this.selectedCategory) {
                this.categoryError = true;
                return;
            }

            if (!this.selectedDifficulty) {
                this.difficultyError = true;
                return;
            }

            setConfig({
                numberOfQuestions: this.numberOfQuestions,
                category: this.selectedCategory,
                difficulty: this.selectedDifficulty.toLowerCase(),
            });
            this.$router.push("/game");
        },
    },
};
</script>
