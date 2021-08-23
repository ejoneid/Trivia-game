<template>
    <div>
        <h2 v-html="questionText" ></h2>
        <button v-for="option in options" :key="option" v-on:click="handleOptionClick(option)" >{{ option }}</button>
    </div>
</template>

<script>

export default {
    name: "Question",
    methods: {
        shuffle(array) {
            return array.sort(() => Math.random() - 0.5);
        },
        handleOptionClick(option) {
            if (option == this.correct_answer) {
                this.$emit("optionClick", true);
            }
            else {
                this.$emit("optionClick", false);
            }
        }
    },
    data() {
        return {
            questionText: this.question.question,
            correct_answer: this.question.correct_answer,
            options: this.shuffle(this.question.incorrect_answers.concat(this.question.correct_answer))
        }
    },
    props: {
        question: {
            type: Object,
            required: true,
        }
    }
    
}
</script>

<style scoped>

</style>