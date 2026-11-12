import Button from "./ui/button";
import { Link, useLocation } from "react-router";

const Header = () => {
  const { pathname } = useLocation();
  const homePage = pathname === "/";
  const sectionLink = (section) => homePage ? `#${section}` : `/#${section}`;

  return (
    <header className="site-header">
      <Link className="brand-mark" to="/" aria-label="Neb's portfolio home">
        N<span>.</span>
      </Link>

      <nav className="main-nav" aria-label="Main navigation">
        <Link to={sectionLink("projects")}>Projects</Link>
        <Link to={sectionLink("about")}>About</Link>
        <Link to={sectionLink("contact")}>Contact</Link>
      </nav>

      <Button
        href="mailto:rubenloic8@gmail.com"
        variant="outline"
        className="header-contact"
      >
        Let&apos;s talk <span aria-hidden="true">↗</span>
      </Button>
    </header>
  );
};

export default Header;
