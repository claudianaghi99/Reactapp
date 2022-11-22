import { Link } from "react-router-dom";

const NoFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>no found</p>
            <Link to="/">go to home page</Link>
        </div>
     );
}
 
export default NoFound;