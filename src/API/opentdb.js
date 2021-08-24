
export async function getQuestions(amount, category, difficulty) {
    return await (await fetch(getQuestionsURL(amount, category, difficulty))).json()

}

function getQuestionsURL(amount, categoryID, difficulty) {
    return `https://opentdb.com/api.php?amount=${amount}&category=${categoryID}&difficulty=${difficulty}`;
}

export async function getCategories() {
    try {
        const categories = await fetch("https://opentdb.com/api_category.php");

        return categories.json();
    } catch (error) {
        console.alert(error);
    }
}
