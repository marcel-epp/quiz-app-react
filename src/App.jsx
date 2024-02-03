import { useState } from "react";
// import components
import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
// import css
import "./App.css";
import "./components/header/header.css";
import "./components/main/main.css";
import "./components/card/card.css";
import "./components/footer/footer.css";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
