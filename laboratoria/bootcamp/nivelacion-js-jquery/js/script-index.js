$(document).ready( function(){
	$('#hidden-item').hide();
	renderActivities(activitiesArray);
	var printNews = (function (){
		$('#news-paragraph').append('NUEVAS RECETAS');
	})();
	$('.list-activities').append('<a href="#" class="item-activity"><span class="attribution"><span class="avatar"><img src="'+activitiesArray[0].userAvatar+'".jpg class="image-avatar"></span><span class="meta"><span class="author">'+activitiesArray[0].userName+'</span> made<span class="recipe">'+activitiesArray[0].recipeName+'</span>: '+activitiesArray.text+' <span class="location">&mdash;'+activitiesArray[0].place+'</span></span></span><div class="bg-image" style="background-image: url(\''+activitiesArray[0].image+'\');"></div></a>');

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	for (i = 0; i < recipesArray.length; i++){
		if(recipesArray[i].highlighted==true){
			var recipe = recipesArray[i];
			renderRecipe(recipe);
			//console.log('Recipes: ', recipesArray[i]);
		}
	}
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	var title = recipe.title;
	var name = (recipe.source).name;
	var img = recipe.name;
	$('.list-recipes').append('<a class="item-recipe" href="#"><span class="attribution"><span class="title-recipe">'+title+'</span><span class="metadata-recipe"><span class="author-recipe">'+name+' </span><span class="bookmarks-recipe"><span class="icon-bookmark"></span></span></span></span><img src="img/recipes/320x350/'+img+'.jpg"/></a>');
	//console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	for(j = 0; j < activitiesArray.length; j++){
		renderActivity(activitiesArray[j]);	
	}
	//console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	if(activitiesArray.length > 0){
		$('.wrapper-message').hide();
	}	
}



