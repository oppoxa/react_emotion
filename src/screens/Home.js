import React from "react";
import Header from "../components/header/header.js";
import Footer from "../components/footer/footer.js";
import Button from "../components/button/button.js";

const Home = ({toggleTheme, isDarkTheme}) => {
  return (
      <>
        <Header isDarkTheme={isDarkTheme}/>
        <Button toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}/>
        <Footer />
      </>
  );
}

export default Home;
