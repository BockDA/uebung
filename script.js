let recipes = [];

function addToRecipes(event) {
  event.preventDefault();
  let titel = document.getElementById('title');
  let description = document.getElementById('description');

  let recipy = {
    "title": titel.value,
    "description": description.value
  };

  recipes.push(recipy);
  console.log(recipes);

  titel.value = "";
  description.value = "";





}
