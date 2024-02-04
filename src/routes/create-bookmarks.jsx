import { useState } from "react";
// import components
import Header from "../components/header/header";
import MainCreateBookmarks from "../components/main/main-create-bookmarks";
import Footer from "../components/footer/footer";
// import css
import "../components/header/header.css";
import "../components/main/main-create-bookmarks.css";
import "../components/footer/footer.css";

function CreateBookmarks() {
  return (
    <>
      <Header />
      <MainCreateBookmarks />
      <Footer />
    </>
  );
}

export default CreateBookmarks;
