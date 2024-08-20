import classes from './BookList.module.css';
export default function BookList() {
   let pageTitle = "Books I have Read";
   let book1 = "https://www.booklistqueen.com/wp-content/uploads/first-lie-wins-ashley-elston-200x300.jpg";
   let book2 = "https://www.booklistqueen.com/wp-content/uploads/the-storm-we-made-vanessa-chan-200x300.jpg";
   let book3 = "https://www.booklistqueen.com/wp-content/uploads/mercury-amy-jo-burns-200x300.jpg";

   return (
      <div>
         <h3  className = {classes.booksHeading} >{pageTitle}</h3>
         <div className = {classes.border} >
            <img src={book1} alt="First Lie Wins by Ashley Elston" />
            <img src={book2} alt="The Storm We Made by Vanessa Chan" />
            <img src={book3} alt="Mercury by Amy Jo Burns" />
         </div>
      </div>      
   );
}