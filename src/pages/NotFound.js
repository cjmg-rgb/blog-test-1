import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (  
    <main className="not-found">
      <h2>Page Not Found</h2>
      <p>Well, that's disappointing</p>
      <p>
        <NavLink to='/'>Visit our homepage</NavLink>
      </p>
    </main>
  );
}
 
export default NotFound;