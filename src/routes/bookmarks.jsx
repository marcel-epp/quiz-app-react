import { useState } from "react";
// import components
import Header from "../components/header/header";
import MainBookmarks from "../components/main/main-bookmarks";
import Footer from "../components/footer/footer";
// import css
import "../components/header/header.css";
import "../components/card/card.css";
import "../components/footer/footer.css";

function Bookmarks() {
  return (
    <>
      <Header />
      <MainBookmarks />
      <Footer />
    </>
  );
}

export default Bookmarks;
