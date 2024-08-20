import classes from './ChoresList.module.css';


export default function ChoresList () {
   return (
   <p>
      <h3 className = {classes.choresHeading}>Today's Chores</h3>
      <ul>
         <li className={classes.choresText}>Clean the cat Pan</li>
         <li className={classes.choresText}>Wash Dishes</li>
         <li className={classes.choresText}>Take the trash out</li>
      </ul>
   </p>
   );
}