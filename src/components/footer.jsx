const Footer = () => (
  <footer className="site-footer page-width" id="contact">
    <div className="footer-cta">
      <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
      <h2>Let&apos;s make it real.</h2>
      <a className="footer-email" href="mailto:rubenloic8@gmail.com">
        rubenloic8@gmail.com <span aria-hidden="true">↗</span>
      </a>
    </div>
    <div className="footer-bottom">
      <span>© {new Date().getFullYear()} Neb. Made with care in Cameroon.</span>
      <div className="footer-links">
        <a href="https://github.com/Nebur23" target="_blank" rel="noreferrer">GitHub ↗</a>
      </div>
    </div>
  </footer>
);

export default Footer;
