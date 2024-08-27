import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.melskitchencafe.com/the-best-chicken-quesadillas/";
   let authorPhoto = "https://www.melskitchencafe.com/wp-content/uploads/2024/02/melheadshot2-2024smallblog.webp";
   let authorName = "Mel";

   return (
      <div>
         <img 
            src={authorPhoto} 
            alt = "" 
            style={{objectFit: "contain", borderRadius: "50%"}} 
            width="200px"
         />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = [
      "chicken", 
      "oil",
      "mushrooms",
      "bell peppers",
      "onion",
      "broth or water", 
      "shredded Monterey Jack cheese",
      "shredded medium or sharp cheddar cheese", 
      "8-inch flour tortillas" 
   ];

   let ingredientListItems = ingredients.map((ingredient, index) => {
      return <li key={index}>{ingredient}</li>;
   })
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            {ingredientListItems}
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>The Best Chicken Quesadillas</h1>
            <p>"This really is the best chicken quesadillas recipe! So easy, these fajita-style quesadillas taste just as good, if not better, than any restaurant!"</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.melskitchencafe.com/wp-content/uploads/2022/02/chicken-quesadillas7-640x960.webp" 
         alt="" 
         className="imageUpdates"
         height="450px"
      />
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
