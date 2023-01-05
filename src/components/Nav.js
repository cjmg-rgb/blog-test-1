import { NavLink } from "react-router-dom";

const Nav = ({ search, setSearch }) => {
  return (  
    <nav>
      <header>
        <h1>Blogtest 1</h1>
      </header>
      <main>
        <form
          onSubmit={e => e.preventDefault()}
        >
          <input type="search" 
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </form>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='post'>Post</NavLink>
          </li>
          <li>
            <NavLink to='about'>About</NavLink>
          </li>
        </ul>
      </main>
    </nav>
  );
}
 
export default Nav;