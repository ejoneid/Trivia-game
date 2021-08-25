<template>
    <div class="container">
        <h2 class="mb-4">Results</h2>
        <h4 class="mb-3">Your scored <span v-html="this.score"></span> points!</h4>
        <table class="table mb-5">
            <tr>
                <th>Question</th>
                <th>Your answer</th>
                <th>Correct answer</th>
            </tr>
            <tr
                :class="{
                    correct: result.userAnswer == result.correctAnswer,
                    incorrect: result.userAnswer != result.correctAnswer,
                }"
                v-for="(result, index) in results"
                :key="index"
            >
                <td v-html="result.question"></td>
                <td v-html="result.userAnswer"></td>
                <td v-html="result.correctAnswer"></td>
            </tr>
        </table>

        <button class="btn btn-primary btn-lg" v-on:click="homeClick">
            Home
        </button>
        <button class="btn btn-primary btn-lg" v-on:click="replayClick">Play again</button>
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

<style scoped>
button {
    margin-inline: 5px;
}

th {
    border-bottom: 1px solid lightgrey;
}

table {
    border: 1px solid lightgrey;
}

.correct {
    background-color: rgb(179, 255, 179);
}

.incorrect {
    background-color: rgb(255, 155, 155);
}
</style>
