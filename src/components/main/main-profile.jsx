import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";

function MainProfile() {
  return (
    <main className="main">
      <div className="profile">
        <div className="profile--user">
          <FontAwesomeIcon icon={faCircleUser} size="2xl" />
          <h2 className="profile--user--name">Max Doe</h2>
        </div>
        <div className="profile--about">
          <h3>About me</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero fugit ea ratione odit itaque aspernatur
            molestiae libero quasi ducimus laborum.
          </p>
        </div>
        <div className="profile--buttons">
          <button className="profile--button" type="button">
            <FontAwesomeIcon icon={faCircleQuestion} size="xl" /> 12
          </button>
          <button className="profile--button" type="button">
            <FontAwesomeIcon icon={faHeart} style={{ color: "#f25757" }} size="xl" /> 4
          </button>
        </div>
      </div>
      <div className="profile--settings">
        <div className="profile--title">
          <FontAwesomeIcon icon={faGear} size="xl" />
          <h3>Settings</h3>
        </div>
        <div className="profile--darkmode">
          <label htmlFor="profile--darkmode--toggle">Darkmode</label>
          <input type="checkbox" id="profile--darkmode--toggle" name="profile--darkmode--toggle"></input>
        </div>
      </div>
    </main>
  );
}
export default MainProfile;
