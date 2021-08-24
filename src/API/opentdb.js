export async function getCategories() {
    try {
        const categories = await fetch("https://opentdb.com/api_category.php");

        return categories.json();
    } catch (error) {
        console.alert(error);
    }
}
