import { useState } from "react";
// import components
import Header from "../components/header/header";
import MainProfile from "../components/main/main-profile";
import Footer from "../components/footer/footer";
// import css
import "../components/header/header.css";
import "../components/main/main-profile.css";
import "../components/footer/footer.css";

function Profile() {
  return (
    <>
      <Header />
      <MainProfile />
      <Footer />
    </>
  );
}

export default Profile;
