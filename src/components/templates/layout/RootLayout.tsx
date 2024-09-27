import { Outlet } from "react-router-dom";
import "./rootLayout.scss";
import Sidebar from "../../organisms/sidebar/Sidebar";
import Topbar from "../../organisms/topbar/Topbar";
import ScrollToTop from "../../../utils/ScrollToTop";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <ScrollToTop />
      <Topbar />
      <main className="main-content">
        <Sidebar />
        <section id="scrollable-section" className="scrollable-section">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default RootLayout;
