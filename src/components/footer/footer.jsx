import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <a href="#" className="footer__link">
          <FontAwesomeIcon icon={faHouse} size="2xl" />
        </a>
        <a href="#" className="footer__link">
          <FontAwesomeIcon icon={faBookmark} size="2xl" />
        </a>
        <a href="#" className="footer__link">
          <FontAwesomeIcon icon={faCirclePlus} size="2xl" />
        </a>
        <a href="#" className="footer__link">
          <FontAwesomeIcon icon={faCircleUser} size="2xl" />
        </a>
      </div>
    </footer>
  );
}
export default Footer;
