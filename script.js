const recipes = [
    { 
        id: 1, 
        name: "Chocolate Brownie", 
        description: "Rich and fudgy chocolate brownies.", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStrNfI7o4REZnEyDNQUsgTjYfNpLNJoYopIw&s" 
    },
    { 
        id: 2, 
        name: "Chocolate Chip Cookies", 
        description: "Crispy on the outside, chewy on the inside.", 
        image: "https://joyfoodsunshine.com/wp-content/uploads/2018/02/best-chocolate-chip-cookies-recipe-1.jpg" 
    },
    { 
        id: 3, 
        name: "Chocolate Cake", 
        description: "Moist and decadent chocolate layer cake.", 
        image: "https://addapinch.com/wp-content/uploads/2020/04/chocolate-cake-DSC_1768.jpg" 
    }
];

function renderRecipesPage() {
    const appHTML = `
        <div style="font-family: Arial, sans-serif; margin: 20px; text-align: center;">
            <h1>Chocolate Recipes</h1>
            <div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center;">
                ${recipes.map(recipe => `
                    <div style="border: 1px solid #ddd; padding: 10px; border-radius: 5px; width: 220px; text-align: center;">
                        <img src="${recipe.image}" alt="${recipe.name}" style="width: 200px; height: 150px; object-fit: cover; border-radius: 5px; margin: 0 auto;">
                        <h2 style="font-size: 1.2em; margin: 10px 0;">${recipe.name}</h2>
                        <p style="font-size: 0.9em; color: #555;">${recipe.description}</p>
                        <a href="?id=${recipe.id}" style="text-decoration: none; color: #db0505;">View Details</a>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    document.body.innerHTML = appHTML;
}

function renderRecipeDetailsPage(recipeId) {
    const recipe = recipes.find(r => r.id === parseInt(recipeId));
    if (!recipe) {
        document.body.innerHTML = `<h1>Recipe not found</h1>`;
        return;
    }

    const appHTML = `
        <div style="font-family: Arial, sans-serif; margin: 20px; text-align: center;">
            <h1>${recipe.name}</h1>
            <img src="${recipe.image}" alt="${recipe.name}" style="width: 300px; height: auto; object-fit: cover; border-radius: 5px; margin: 20px 0;">
            <p>${recipe.description}</p>
            <a href="index.html" style="text-decoration: none; color: #db0505;">Back to Recipes</a>
        </div>
    `;
    document.body.innerHTML = appHTML;
}


const urlParams = new URLSearchParams(window.location.search);
const recipeId = urlParams.get('id');

if (recipeId) {
    renderRecipeDetailsPage(recipeId);
} else {
    renderRecipesPage();
}
