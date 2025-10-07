import "./Achievements.css";

const Achievements = () => {
  return (
    <div className="achievements-container">
      <h2 className="achievements-title">Achievements</h2>
      <p className="achievements-subtitle">
        With our educational consulting services tailored to aspirations and
        capabilities, our positive impact has touched thousands.
      </p>
      <div className="stats-grid">
        <div className="stat-item">
          <h2>10+</h2>
          <p>COUNTRIES</p>
        </div>
        <div className="stat-item">
          <h2>60+ </h2>
          <p>UNIVERSITIES </p>
        </div>
        <div className="stat-item">
          <h2>30+</h2>
          <p>COURSES</p>
        </div>
        <div className="stat-item">
          <h2>2K+</h2>
          <p>STUDENTS </p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
