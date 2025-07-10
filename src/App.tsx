import { Outlet } from "react-router";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

const App = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="bg-effect top-0 -translate-1/2 left-0"></div>
      <nav>
        <Navbar />
      </nav>
      <Outlet />
      <footer className="relative z-20">
        <Footer />
      </footer>
      <div className="bg-effect bottom-0 translate-1/2 right-0"></div>
    </div>
  );
};

export default App;