
export async function getQuestions(amount, category, difficulty) {
    return await (await fetch(getQuestionsURL(amount, category, difficulty))).json()

}

function getQuestionsURL(amount, categoryID, difficulty) {
    return `https://opentdb.com/api.php?amount=${amount}&category=${categoryID}&difficulty=${difficulty}`;
}