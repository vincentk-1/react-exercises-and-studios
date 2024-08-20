import classes from './HobbyLink.module.css';

export default function HobbyLinks() {
    let hobbyLinks = ["https://olympics.com/en/paris-2024/sports/table-tennis","https://olympics.com/en/paris-2024/sports/cycling-mountain-bike"];
    
    return (
        <div>
          <h3>My Hobbies</h3>
          <ul className = {classes.links} >
            <li><a href = {hobbyLinks[0]}>Table Tennis</a></li>
            <li><a href = {hobbyLinks[1]}>cycling</a></li>
          </ul>
        </div>
    );
}