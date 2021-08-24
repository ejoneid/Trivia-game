<template>
    <div class="container">
        <h2 class="mb-4">Results</h2>
        <p>Your scored <span v-html="this.score"></span> points!</p>
        <table class="table mb-3">
            <tr>
                <th>Question</th>
                <th>Your answer</th>
                <th>Correct answer</th>
            </tr>
            <tr v-for="(result, index) in results" :key="index">
                <td v-html="result.question"></td>
                <td v-html="result.userAnswer"></td>
                <td v-html="result.correct_answer"></td>
            </tr>
        </table>

        <button class="btn btn-primary" v-on:click="homeClick">
            Home
        </button>
        <button class="btn btn-primary" v-on:click="replayClick">Play again</button>
    </div>
</template>

<script>
export default {
    props: {
        results: {
            type: Array,
            required: true,
        },
        score: {
            type: Number,
            required: true,
        },
    },
    methods: {
        homeClick() {
            this.$router.push("/configure");
        },
        replayClick() {
            this.$router.push("/game");
        },
    },
};
</script>

<style scoped></style>
