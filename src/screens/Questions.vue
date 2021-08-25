<template>
    <main class="container">
        <p>{{ `${questionCounter + 1}/${questions.length}` }}</p>
        <h2 v-html="currentQuestion.question" class="mb-3"></h2>
        <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-primary btn-lg" v-for="option in options" :key="option" v-on:click="handleOptionClick(option)" v-html="option">            </button>
        </div>
        
    </main>
</template>

<script>
// import { getQuestions } from "@/mocks/questions.mock.js";
import { getQuestions } from "@/API/opentdb.js";
import { getConfig } from "@/utils/config.js";

export default {
    name: "Questions",
    methods: {
        handleOptionClick(option) {
            if (option == this.currentQuestion.correct_answer) {
                this.score += 10;
            }
            console.log(this.score);

            this.results.push({
                question: this.currentQuestion.question,
                userAnswer: option,
                correct_answer: this.currentQuestion.correct_answer,
            });

            if (this.questionCounter >= this.questions.length - 1) {
                this.$router.push({
                    name: "result",
                    params: { results: this.results, score: this.score },
                });
            }

            this.questionCounter++;
        },
        shuffle(array) {
            return array.sort(() => Math.random() - 0.5);
        },
    },
    async created() {
        const config = getConfig();
        const { numberOfQuestions, category, difficulty } = config;

        if (config === null) {
            this.$router.push("/");
            return;
        }

        try {
            const response = await getQuestions(numberOfQuestions, category, difficulty);
            this.questions = response.results;
        } catch (error) {
            console.error(error);
        }
    },
    data() {
        return {
            questionCounter: 0,
            questions: [],
            score: 0,
            results: [],
        };
    },
    computed: {
        currentQuestion: function() {
            return this.questions[this.questionCounter];
        },
        options: function() {
            return this.shuffle(
                this.currentQuestion.incorrect_answers.concat(this.currentQuestion.correct_answer)
            );
        },
    },
};
</script>

<style scoped>
button {
    height: 5rem;
}
</style>
