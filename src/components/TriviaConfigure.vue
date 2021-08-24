<template>
    <main class="container">
        <form @submit.prevent="testSubmit">
            <fieldset class="mb-3">
                <label class="form-label">Category</label>
                <select class="form-select">
                    <option value="">-- Choose category --</option>
                    <option v-for="category of categories" :key="category.id">{{
                        category.name
                    }}</option>
                </select>
            </fieldset>

            <fieldset class="mb-3">
                <label class="form-label">Difficulty</label>
                <select class="form-select">
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
        };
    },
    async created() {
        try {
            // this.categories = await getCategories();
            this.categories = CATEGORIES;
        } catch (error) {
            this.error = error.message;
        }
    },
};
</script>
