import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./Home.css";
const Home = () => {
  return (
    <div>
      {/* adding home page using header main and footer components */}
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
