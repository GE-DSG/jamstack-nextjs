import ExternalScript from "../header/ExternalScript";
import Header from "../header/Header";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import { LayoutStyled, LayoutBodyStyled } from "./styles"
import styles from "./layout.module.scss"

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%"
};

const contentStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column"
};

const Layout = props => (
  <div className="Layout" style={layoutStyle}>
   
    <Header />
      <ExternalScript/>
    <div className="page ge-page landing-page">
      <NavBar />
      <main className="ge-main" id="ge-main" role="main" >
          {props.children}
      </main>
    </div>
    <Footer />
   
  </div>
);

export default Layout;