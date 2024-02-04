import { useState } from "react";
// import components
import Header from "../components/header/header";
import Main from "../components/main/main-home";
import Footer from "../components/footer/footer";
// import css
import "../components/header/header.css";
import "../components/main/main-home.css";
import "../components/card/card.css";
import "../components/footer/footer.css";

function Profile() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default Profile;
