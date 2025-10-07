import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-grid">
        <div className="footer-column">
          <h4>Gradwings</h4>
          <p>
            A smart platform built to help organizations, educators, and
            learners seamlessly manage, deliver, and track learning journeys
            with ease.
          </p>
        </div>
        <div className="footer-column">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <a href="#">Home </a>
            </li>
            <li>
              <a href="#">About Us </a>
            </li>
            <li>
              <a href="#">Careers </a>
            </li>
            <li>
              <a href="#">Contact Us </a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Study Abroad </h4>
          <ul>
            <li>
              <a href="#">Study in UK </a>
            </li>

            <li>
              <a href="#">Study in Canada </a>
            </li>

            <li>
              <a href="#">Study in Australia </a>
            </li>

            <li>
              <a href="#">Study in USA </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Gradwings Immigration. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
