<template>
    <div>
        <p>{{ `${questionCounter + 1}/10` }}</p>
        <Question @optionClick="handleOptionClick" :question="currentQuestion"/>
    </div>
</template>

<script>
// import { getQuestions } from '@/API/opentdb.js';
import { getQuestions } from '@/mocks/questions.mock.js';
import Question from '../components/Question.vue'

export default {
    name: "Questions",
    components: {
        Question
    },
    methods: {
        handleOptionClick(wasCorrect) {
            this.questionCounter++;
            this.currentQuestion = this.questions[this.questionCounter]
            console.log(this.currentQuestion);
            console.log(wasCorrect);
        }
    },
    data() {
        return {
            questionCounter: 0,
            currentQuestion: undefined,
        }
    },
    async created() {
        try {
            // this.questions = await getQuestions(5, 22, 'Easy');
            this.questions = getQuestions();
            this.currentQuestion = this.questions[0];
        }
        catch (error) {
            console.error(error)
        }
    },
    
}
</script>

<style scoped>

</style>