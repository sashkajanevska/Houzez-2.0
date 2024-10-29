import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import useWindowScroll from "../hooks/useWindowScroll";

const Layout = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Outlet />
      <Footer />
      <button
        className={`scroll-to-top-button ${scroll.y > 300 ? "active" : null}`}
        onClick={() => scrollTo({ y: 0 })}
      >
        <img src="../../images/footer/arrow-up.svg" />
      </button>
    </>
  );
};

export default Layout;
