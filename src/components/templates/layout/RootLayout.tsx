import { Outlet } from "react-router-dom";
import "./rootLayout.scss";
import ScrollToTop from "../../../utils/ScrollToTop";
import Sidebar from "../../organisms/sidebar/Sidebar";
import Topbar from "../../organisms/topbar/Topbar";

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
