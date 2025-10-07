import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-title">Why Gradwings?</h2>
      <div className="services-grid">
        <div className="service-card1">
          <h3>+ Global University Partnerships</h3>
          <p>
            With Gradwings by your side, the world is your campus! Our students
            are already excelling at top international universities.
          </p>
        </div>
        <div className="service-card2">
          <h3>Seamless End-to-End Visa Support</h3>
          <p>
            Forget the stress—we handle it all! We make the entire process
            smooth, hassle-free, and student-friendly.
          </p>
        </div>
        <div className="service-card3">
          <h3>Smart Visa Preparation</h3>

          <p>
            Our expert team ensures you're fully ready with organized documents,
            clear insights, and mock interview training.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
