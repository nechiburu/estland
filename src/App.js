import React, { useEffect } from "react";
import AllRoutes from "./router/AllRoutes";
import HomeLightAnimation from "./views/all-home-version/HomeLightAnimation";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "photoswipe/dist/photoswipe.css";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <ScrollToTop />
      < AllRoutes/>
    </>
  );
};

export default App;
