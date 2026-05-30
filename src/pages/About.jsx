export default function About({ aboutTexts }) {
  return (
    <div className="container animate-fade-in">
      <h2 className="section-title">{aboutTexts.heading}</h2>

      <div className="about-grid">
        <div className="about-content-left">
          <p className="about-main-text">{aboutTexts.overview}</p>
          
          <div className="experience-block">
            <p className="experience-text">
              "{aboutTexts.experienceText}"
            </p>
          </div>

          <div className="location-block">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>
              {aboutTexts.locationTitle}: <strong className="location-value">{aboutTexts.locationText}</strong>
            </span>
          </div>
        </div>

        <div className="about-sidebar">
          <div className="sidebar-card">
            <h3 className="sidebar-card-title">{aboutTexts.missionTitle}</h3>
            <p className="sidebar-card-text">{aboutTexts.missionText}</p>
          </div>

          <div className="sidebar-card">
            <h3 className="sidebar-card-title">{aboutTexts.visionTitle}</h3>
            <p className="sidebar-card-text">{aboutTexts.visionText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
