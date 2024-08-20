import styles from './Description.module.css';
import React from 'react';
let recipeTitle = "The Best Chicken Quesadillas";
let recipeShortDesc = "This really is the best chicken quesadillas recipe! So easy, these fajita-style quesadillas taste just as good, if not better, than any restaurant!";


const RecipeAuthor = () => {
    let authorLink = "https://www.melskitchencafe.com/the-best-chicken-quesadillas/";
    let authorPhoto = "https://www.melskitchencafe.com/wp-content/uploads/2024/02/melheadshot2-2024smallblog.webp";
    let authorName = "Mel";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img 
                src={authorPhoto} 
                alt = {authorName}
                className={styles.imageUpdates} 
           />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Mel's Kitchen Cafe </a> 
           </div>
        </div>
     );
};

class RecipeDescription extends React.Component {
    render () {
        return(
          <div> 
            <div>
              <h1>{recipeTitle}</h1>
              <p>{recipeShortDesc}</p>
            </div>
            <RecipeAuthor />
         </div>
        )
    }
}


export default RecipeDescription;