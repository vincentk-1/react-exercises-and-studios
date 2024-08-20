export default function BookList() {
   let pageTitle = "Books I have Read";
   let book1 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1704216161i/164444179.jpg";
   let book2 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1681136411i/60211228.jpg";
   let book3 = "https://www.booklistqueen.com/wp-content/uploads/mercury-amy-jo-burns-200x300.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="First Lie Wins by Ashley Elston" />
         <img src={book2} alt="The Storm We Made by Vanessa Chan" />
         <img src={book3} alt="Mercury by Amy Jo Burns" />
      </div>      
   );
}