import Button from "./ui/button";

const Header = () => (
  <header className="site-header">
    <a className="brand-mark" href="#home" aria-label="Neb's portfolio home">
      N<span>.</span>
    </a>

    <nav className="main-nav" aria-label="Main navigation">
      <a href="#projects">Projects</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
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

export default Header;
