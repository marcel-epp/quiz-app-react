import { Outlet, NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function footerLinkHelper(route, icon) {
  return (
    <NavLink
      to={route}
      className={({ isActive, isPending }) =>
        isActive
          ? "footer__link footer__link--active"
          : isPending
          ? "footer__link footer__link--pending"
          : "footer__link"
      }>
      <FontAwesomeIcon icon={icon} size="2xl" />
    </NavLink>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {footerLinkHelper("/", faHouse)}
        {footerLinkHelper("/bookmarks", faBookmark)}
        {footerLinkHelper("/createbookmarks", faCirclePlus)}
        {footerLinkHelper("/profile", faCircleUser)}
      </div>
    </footer>
  );
}
export default Footer;
