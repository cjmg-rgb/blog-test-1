import { Outlet } from "react-router-dom";
import Foooter from "../components/Footer";
import Nav from "../components/Nav";

const RootLayout = ({ search, setSearch }) => {
  return (  
    <div className="App">
      <header>
        <Nav 
          search={search}
          setSearch={setSearch}
        />
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer>
        <Foooter />
      </footer>
    </div>
  );
}
 
export default RootLayout;